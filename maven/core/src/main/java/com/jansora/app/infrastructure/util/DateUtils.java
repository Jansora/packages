package com.jansora.app.infrastructure.util;

import com.jansora.app.infrastructure.carrier.dto.DateDto;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * <Description> Description for DateUtils <br>
 *
 * @author jansora <br>
 * @version 1.0 <br>
 * @github https://github.com/Jansora
 * @CreateDate 2021/5/16 20:55:11 <br>
 * @see com.jansora.app.infrastructure.util <br>
 * @since 1.0 <br>
 */
public class DateUtils {

    private static final SimpleDateFormat tableDf = new SimpleDateFormat("yyyy_MM");

    private static final SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");

    public static String formatNow() {
        return df.format(new Date());
    }
    public static String format(Date date) {
        return df.format(date);
    }

    public static String format(DateDto date) {
        return date.getYear() + "-" + date.getMonth() + "-" + date.getDay();
    }

    public static String formatToday() {
        Calendar today = Calendar.getInstance();
        today.set(Calendar.HOUR_OF_DAY, 0); // same for minutes and seconds
        return df.format(today);
    }

    public static String formatThisMonth() {
        return tableDf.format(new Date());
    }


    public static DateDto today() {
        Calendar today = Calendar.getInstance();
        return formatCalendar(today);
    }

    public static DateDto yesterday() {
        Calendar today = Calendar.getInstance();
        today.add(Calendar.DATE, -1);
        return formatCalendar(today);
    }

    public static DateDto theDayBeforeYesterday() {
        Calendar today = Calendar.getInstance();
        today.add(Calendar.DATE, -2);
        return formatCalendar(today);
    }

    private static DatetimeDto formatCalendar(Calendar calendar) {

        DatetimeDto date = new DatetimeDto();
        date.setYear(calendar.get(Calendar.YEAR));
        date.setMonth(calendar.get(Calendar.MONTH) + 1);
        date.setDay(calendar.get(Calendar.DAY_OF_MONTH));
        date.setHour(calendar.get(Calendar.HOUR));
        date.setMinute(calendar.get(Calendar.MINUTE));
        date.setSecond(calendar.get(Calendar.SECOND));
        return date;
    }

    /**
     * <Description> Description for DatetimeDto <br>
     *
     * @author jansora (zhang.yangyuan) <br>
     * @version 1.0 <br>
     * @email zhangyue1936@gmail.com
     * @transId null
     * @CreateDate 2022/3/23 PM12:19 <br>
     * @since 1.0 <br>
     */
    public static class DatetimeDto extends DateDto implements Serializable {

        Integer hour;

        Integer minute;

        Integer second;

        public Integer getHour() {
            return hour;
        }

        public void setHour(Integer hour) {
            this.hour = hour;
        }

        public Integer getMinute() {
            return minute;
        }

        public void setMinute(Integer minute) {
            this.minute = minute;
        }

        public Integer getSecond() {
            return second;
        }

        public void setSecond(Integer second) {
            this.second = second;
        }


    }
}
