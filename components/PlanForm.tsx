import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import Calendar from 'react-native-calendar-picker';
import { FormikProps, withFormik } from 'formik';
import moment from 'moment';
import Icon from './Icon';

interface FormValues {
  name: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
}

function PlanForm({ values, setFieldValue }: FormikProps<FormValues>) {
  const theme = useTheme();
  const styles = useStyles(theme);
  console.log(values);

  const onDateChange = (date: moment.Moment, type: 'START_DATE' | 'END_DATE') => {
    setFieldValue(
      type === 'START_DATE' ? 'startDate' : 'endDate',
      date ? date.toDate() : undefined,
    );
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
      <Button mode="text" style={styles.button}>
        <Text style={styles.buttonText}>Next </Text>
        <Icon style={styles.icon} name="chevron-right" color={theme.colors.accent} size={16} />
      </Button>
    </View>
  );
}

export default withFormik({
  displayName: 'PlanForm',
  mapPropsToValues: (): FormValues => ({
    name: 'New Plan',
    startDate: undefined,
    endDate: undefined,
  }),
  handleSubmit: (values, props) => {
    console.log('submit', values, props);
  },
})(PlanForm);

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
    marginTop: 50,
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
