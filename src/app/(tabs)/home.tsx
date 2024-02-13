import { VStack, Box } from '@gluestack-ui/themed';
import { FlashList } from '@shopify/flash-list';
import React, { useEffect, useState } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { CustomHeading, AlertCard } from '~/src/components';
import { ScreenWrapper } from '~/src/components/layouts';
import LoadingNoDataAnimation from '~/src/components/loaders/LoadingNoDataAnimation';
import { COLORS } from '~/src/constants/color';
import { fetchAlertData } from '~/src/hooks/firebase/fetchAlertData';
// import { useAuth } from '~/src/services/state/context/authContex';

const Page = () => {
  // const { logout } = useAuth();
  const [alertData, setAlertData] = useState<any>(null);
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    // Call the fetchAlertData function to start listening for updates
    const { unsubscribe } = fetchAlertData((data) => {
      setAlertData(data);
      setLoading(false); // Set loading to false when data is fetched
    });

    // Return a cleanup function to unsubscribe from the snapshot listener
    return () => {
      unsubscribe();
    };
  }, []);
  // Render "No Current Data" if alertData is empty or loading
  if (loading || !alertData || alertData.length === 0) {
    return <LoadingNoDataAnimation />;
  }
  return (
    <ScreenWrapper>
      <Spinner visible={loading} color={COLORS.primary} />
      <VStack mt={hp(5)}>
        <CustomHeading text="QuakeAlert detected Earthquake" textAlign="center" size={2} />
        <Box h={hp(85)} w={wp(100)}>
          <FlashList
            data={alertData}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({ item }: any) => (
              <AlertCard
                status={item.data.status}
                location={item.data.Location}
                evacuationArea={item.data.SafetyEvacuation}
                date={item.data.Date}
              />
            )}
            estimatedItemSize={50}
          />
        </Box>
      </VStack>
    </ScreenWrapper>
  );
};

export default Page;
