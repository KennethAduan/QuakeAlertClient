import * as Notifications from 'expo-notifications';
interface Props {
  titleNotification: string;
  bodyNotification: string;
}

const ScheduledNotification = async ({ titleNotification, bodyNotification }: Props) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: titleNotification,
      body: bodyNotification,
      //   data: { data: 'goes here', url: '/home' },
    },
    trigger: { seconds: 1 },
  });
};

export default ScheduledNotification;
