

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
