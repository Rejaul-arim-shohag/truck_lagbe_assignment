// import React, { useRef } from 'react';
// import { View, Button, Text } from 'react-native';
// import RBSheet from 'react-native-raw-bottom-sheet';

// export default function BottomSheet() {
//   const refRBSheet = useRef<any>(null); // 👈 Add generic type and initial null

//   return (
//     <View style={{ flex: 1 }}>
//       <Button
//         title="OPEN BOTTOM SHEET"
//         onPress={() => refRBSheet.current?.open()} // 👈 Use optional chaining
//       />
//       <RBSheet
//         ref={refRBSheet}
//         useNativeDriver={true}
//         customStyles={{
//           wrapper: {
//             backgroundColor: 'transparent',
//           },
//           draggableIcon: {
//             backgroundColor: '#000',
//           },
//         }}
//         customModalProps={{
//           animationType: 'slide',
//           statusBarTranslucent: true,
//         }}
//         customAvoidingViewProps={{
//           enabled: false,
//         }}
//       >
//         <Text>Hello</Text>
//       </RBSheet>
//     </View>
//   );
// }

import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  ForwardedRef,
} from 'react';
import { View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

export type RBSheetRef = {
  open: () => void;
  close: () => void;
};

type BottomSheetProps = React.ComponentPropsWithoutRef<typeof RBSheet>;

const BottomSheet = forwardRef<RBSheetRef, BottomSheetProps>(
  (props, ref: ForwardedRef<RBSheetRef>) => {
    const sheetRef = useRef<RBSheetRef>(null);

    useImperativeHandle(ref, () => ({
      open: () => sheetRef.current?.open(),
      close: () => sheetRef.current?.close(),
    }));

    return (
      <View style={{ flex: 1 }}>
        <RBSheet ref={sheetRef} {...props} />
      </View>
    );
  },
);

export default BottomSheet;
