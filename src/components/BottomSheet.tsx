import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

export type RBSheetRef = {
  open: () => void;
  close: () => void;
};

type BottomSheetProps = {
  children: React.ReactNode;
};

const BottomSheet = forwardRef<RBSheetRef, BottomSheetProps>(
  ({ children }, ref) => {
    const sheetRef = useRef<any>(null);

    useImperativeHandle(ref, () => ({
      open: () => sheetRef.current?.open(),
      close: () => sheetRef.current?.close(),
    }));

    return (
      <RBSheet
        ref={sheetRef}
        height={350}
        openDuration={250}
        customStyles={{
          container: {
            padding: 20,
          },
        }}
      >
        {children}
      </RBSheet>
    );
  },
);

export default BottomSheet;
