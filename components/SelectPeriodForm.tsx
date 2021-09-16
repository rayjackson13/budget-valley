/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Text, useTheme } from 'react-native-paper';
import Calendar from 'react-native-calendar-picker';
import { FormikProps, withFormik } from 'formik';
import moment from 'moment';
import { RootStackParamList } from 'types';
import Icon from './Icon';

interface FormValues {
  title: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
}

type SelectPeriodFormProps = {
  setTitle: (title: string) => void
  title: string
  navigation: NativeStackNavigationProp<RootStackParamList, 'AddPlanModal'>
}

function SelectPeriodForm(props: SelectPeriodFormProps & FormikProps<FormValues>) {
  const { values, setFieldValue, setTitle, submitForm } = props;
  const theme = useTheme();
  const styles = useStyles(theme);

  const onDateChange = (date: moment.Moment, type: 'START_DATE' | 'END_DATE') => {
    setFieldValue(
      type === 'START_DATE' ? 'startDate' : 'endDate',
      date ? date.toDate() : undefined,
    );

    if (!date) return;
    if (type === 'START_DATE') {
      setDateTitle(date);
      return;
    }

    setDateTitle(moment(values.startDate), date);
  };

  const setDateTitle = (startDate: moment.Moment, endDate?: moment.Moment) => {
    const title = !endDate
      ? `${startDate.format('DD MMM \'YY')} — `
      : `${startDate.format('DD MMM \'YY')} — ${endDate.format('DD MMM \'YY')}`;
    setFieldValue('title', title);
    setTitle(title);
  };

  return (
    <View style={styles.form}>
      <Calendar
        selectedStartDate={values.startDate}
        selectedEndDate={values.endDate}
        startFromMonday
        allowRangeSelection
        previousComponent={(
          <Button>
            <Icon name="chevron-left" color={theme.colors.accent} size={18} />
          </Button>
        )}
        nextComponent={(
          <Button>
            <Icon name="chevron-right" color={theme.colors.accent} size={18} />
          </Button>
        )}
        textStyle={styles.calendarText}
        selectedDayTextColor="#fff"
        selectedRangeStartTextStyle={styles.selectedRangeBoundaryText}
        selectedRangeEndTextStyle={styles.selectedRangeBoundaryText}
        selectedRangeStyle={styles.selectedRange}
        selectedRangeStartStyle={styles.selectedRangeStart}
        selectedRangeEndStyle={styles.selectedRangeEnd}
        dayShape="circle"
        onDateChange={onDateChange}
      />
      <Button mode="text" style={styles.button} onPress={submitForm}>
        <Text style={styles.buttonText}>Next </Text>
        <Icon style={styles.icon} name="chevron-right" color={theme.colors.accent} size={16} />
      </Button>
    </View>
  );
}

export default withFormik({
  displayName: 'PlanForm',
  mapPropsToValues: (props: SelectPeriodFormProps): FormValues => {
    const { title } = props;
    return ({
      title,
      startDate: moment().toDate(),
      endDate: moment().add(2, 'weeks').toDate(),
    });
  },
  handleSubmit: (values, { props: { navigation } }) => {
    navigation.pop();
  },
})(SelectPeriodForm);

const useStyles = ({ colors, roundness }: ReactNativePaper.Theme) => StyleSheet.create({
  form: {
    paddingHorizontal: 30,
  },
  calendarText: {
    color: colors.text,
  },
  selectedRange: {
    backgroundColor: '#1b1b1b',
    borderWidth: 0,
    borderColor: '#fff',
  },
  selectedRangeStart: {
    backgroundColor: colors.accent,
    borderTopStartRadius: roundness / 2,
    borderBottomStartRadius: roundness / 2,
  },
  selectedRangeEnd: {
    backgroundColor: colors.accent,
    borderTopEndRadius: roundness / 2,
    borderBottomEndRadius: roundness / 2,
  },
  selectedRangeBoundaryText: {
    color: colors.background,
    zIndex: 99999,
  },
  button: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  buttonText: {
    color: colors.accent,
    fontSize: 18,
  },
  icon: {
    marginLeft: 10,
  },
});
