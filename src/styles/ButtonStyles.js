import * as Constants from '../constants/index'
import { scale } from '../util/scaling'

export const BUTTON_HEIGHT = 44

const BUTTON_WIDTH_1 = '70%'
const BUTTON_BORDER_STROKE = 1
const BUTTON_BORDER_RADIUS = 3

export const PrimaryButtonUpStyle = {
  position: 'relative',
  backgroundColor: Constants.BUTTON_PRIMARY_UP,
  width: BUTTON_WIDTH_1,
  height: scale(BUTTON_HEIGHT),
  alignItems: 'center',
  justifyContent: 'space-around',
  borderRadius: scale(BUTTON_BORDER_RADIUS)
}

export const PrimaryWidthButtonUpStyle = {
  ...PrimaryButtonUpStyle,
  width: '100%'
}
export const PrimaryButtonUpTextStyle = {
  position: 'relative',
  color: Constants.WHITE,
  fontSize: scale(Constants.FONTS.defaultButtonTextSize),
  fontFamily: Constants.FONTS.fontFamilyRegular,
  width: '100%',
  textAlign: 'center'
}
export const PrimaryButtonDownTextStyle = {
  position: 'relative',
  color: Constants.WHITE,
  fontSize: scale(Constants.FONTS.defaultButtonTextSize),
  fontFamily: Constants.FONTS.fontFamilyRegular,
  width: '100%',
  textAlign: 'center'
}
export const PrimaryButtonDownStyle = {
  position: 'relative',
  backgroundColor: Constants.BUTTON_PRIMARY_DOWN,
  width: BUTTON_WIDTH_1,
  height: scale(BUTTON_HEIGHT),
  alignItems: 'center',
  justifyContent: 'space-around',
  borderRadius: scale(BUTTON_BORDER_RADIUS)
}
export const PrimaryWidthButtonDownStyle = {
  ...PrimaryButtonDownStyle,
  width: '100%'
}

export const DefaultButtonUpStyle = {
  position: 'relative',
  backgroundColor: Constants.BUTTON_DEFAULT_UP,
  width: BUTTON_WIDTH_1,
  height: scale(BUTTON_HEIGHT),
  alignItems: 'center',
  justifyContent: 'space-around',
  borderColor: Constants.BUTTON_DEFAULT_UP_TEXT,
  borderWidth: BUTTON_BORDER_STROKE,
  borderRadius: scale(BUTTON_BORDER_RADIUS)
}

export const DefaultWidthButtonUpStyle = {
  ...DefaultButtonUpStyle,
  width: '100%'
}

export const DefaultButtonUpTextStyle = {
  position: 'relative',
  color: Constants.BUTTON_DEFAULT_UP_TEXT,
  fontSize: scale(Constants.FONTS.defaultButtonTextSize),
  fontFamily: Constants.FONTS.fontFamilyRegular,
  width: '100%',
  textAlign: 'center'
}
export const DefaultButtonDownTextStyle = {
  position: 'relative',
  color: Constants.BUTTON_DEFAULT_DOWN_TEXT,
  fontSize: scale(Constants.FONTS.defaultButtonTextSize),
  fontFamily: Constants.FONTS.fontFamilyRegular,
  width: '100%',
  textAlign: 'center'
}

export const DefaultButtonDownStyle = {
  position: 'relative',
  backgroundColor: Constants.BUTTON_DEFAULT_UP,
  width: BUTTON_WIDTH_1,
  height: scale(BUTTON_HEIGHT),
  alignItems: 'center',
  justifyContent: 'space-around',
  borderColor: Constants.BUTTON_DEFAULT_DOWN_TEXT,
  borderWidth: BUTTON_BORDER_STROKE,
  borderRadius: scale(BUTTON_BORDER_RADIUS)
}

export const DefaultWidthButtonDownStyle = {
  ...DefaultButtonDownStyle,
  width: '100%'
}

export const TextOnlyButtonUpStyle = {
  backgroundColor: Constants.TRANSPARENT,
  padding: scale(10)
}

export const TextOnlyButtonTextUpStyle = {
  color: Constants.SECONDARY,
  fontSize: scale(Constants.FONTS.defaultButtonTextSize),
  fontFamily: Constants.FONTS.fontFamilyRegular,
  width: '100%',
  textAlign: 'center'
}

export const TextOnlyButtonDownStyle = {
  backgroundColor: Constants.TRANSPARENT,
  padding: scale(10)
}

export const TextOnlyButtonTextDownStyle = {
  color: Constants.PRIMARY,
  fontSize: scale(Constants.FONTS.defaultButtonTextSize),
  fontFamily: Constants.FONTS.fontFamilyRegular,
  width: '100%',
  textAlign: 'center'
}

export const TextAndIconButtonAlignEdgesStyle = {
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  centeredContent: {
    width: '100%'
    // alignItems: 'center'
  },
  inner: {
    position: 'relative',
    flexDirection: 'row'
  },
  textContainer: {
    flex: 17,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  iconContainer: {
    flex: 3,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around'
  },
  text: {
    color: Constants.GRAY_2,
    fontSize: scale(18)
  },
  textPressed: {
    color: Constants.GRAY_1,
    fontSize: scale(18)
  },
  icon: {
    color: Constants.GRAY_2
  },
  iconPressed: {
    color: Constants.GRAY_1
  },
  iconSize: scale(25),
  underlayColor: Constants.TRANSPARENT
}

export const PrimaryButtonUpScaledStyle = {
  position: 'relative',
  backgroundColor: Constants.BUTTON_PRIMARY_UP,
  width: BUTTON_WIDTH_1,
  height: scale(BUTTON_HEIGHT),
  alignItems: 'center',
  justifyContent: 'space-around',
  borderRadius: scale(BUTTON_BORDER_RADIUS)
}
export const PrimaryButtonUpTextScaledStyle = {
  position: 'relative',
  color: Constants.WHITE,
  fontSize: scale(Constants.FONTS.defaultButtonTextSize),
  fontFamily: Constants.FONTS.fontFamilyRegular,
  width: '100%',
  textAlign: 'center'
}
export const PrimaryButtonDownTextScaledStyle = {
  position: 'relative',
  color: Constants.WHITE,
  fontSize: scale(Constants.FONTS.defaultButtonTextSize),
  fontFamily: Constants.FONTS.fontFamilyRegular,
  width: '100%',
  textAlign: 'center'
}
export const PrimaryButtonDownScaledStyle = {
  position: 'relative',
  backgroundColor: Constants.BUTTON_PRIMARY_DOWN,
  width: BUTTON_WIDTH_1,
  height: scale(BUTTON_HEIGHT),
  alignItems: 'center',
  justifyContent: 'space-around',
  borderRadius: scale(BUTTON_BORDER_RADIUS)
}

export const TextOnlyButtonUpScaledStyle = {
  backgroundColor: Constants.TRANSPARENT,
  padding: scale(10)
}

export const TextOnlyButtonTextUpScaledStyle = {
  color: Constants.SECONDARY,
  fontSize: scale(Constants.FONTS.defaultButtonTextSize),
  fontFamily: Constants.FONTS.fontFamilyRegular,
  width: '100%',
  textAlign: 'center'
}

export const TextOnlyButtonDownScaledStyle = {
  backgroundColor: Constants.TRANSPARENT,
  padding: scale(10)
}

export const TextOnlyButtonTextDownScaledStyle = {
  color: Constants.PRIMARY,
  fontSize: scale(Constants.FONTS.defaultButtonTextSize),
  fontFamily: Constants.FONTS.fontFamilyRegular,
  width: '100%',
  textAlign: 'center'
}
