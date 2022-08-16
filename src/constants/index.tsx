export const HIMBOX_ACCESS_TOKEN = "HIMBOX_ACCESS_TOKEN";
export const HIMBOX_REFRESH_TOKEN = "HIMBOX_REFRESH_TOKEN";
export const HIMBOX_USER_ID = "HIMBOX_USER_ID";
export const HIMBOX_USER_INFO = "HIMBOX_USER_INFO";

export const BASE_URL = 'https://test.himbox.io/api/v1';
export const ENDPOINTS = {
    LOGIN: `/user/login`,
    SIGN_UP: `/user/register`,
    VERIFY_ACCOUNT: `/user/verify-user`,
    RESEND_VERIFY_MAIL: `/user/resend-verify-email`,
    FORGET_PASSWORD: `/user/forgot-password`,
    CONFIRM_FORGET_PASSWORD: `/user/confirm-forgot-password`,
    PROFILE: `/user/profile`,
    UPDATE_INFO: `/user/profile/update-info`,
    UPLOAD_AVATAR: `/user/upload-avatar`,
    NEW_ACCESS_TOKEN: `/user/new-access-token`,
    CHANGE_PASSWORD: `/user/profile/change-password`,
    LOGOUT: `/user/logout`,

    // tfa
    TFA_GENERATION: `/tfa/generate`,
    TFA_ACTIVE: `/tfa/active`,
    TFA_DEACTIVE: `/tfa/deactive`,

    DASHBOARD_INFO: `/dashboard/infos`,
    NETWORK: '/network',

    // package
    ALL_PACKAGES: `/package/list`,
    JOIN_PACKAGE: `/package/participate`,
    MY_PACKAGE: `/package/my-package`,
    HIMBOX_PRICE: `/dashboard/get-prices`,
}

export const PACKAGE_TYPES = {
    TYPE_5: 5,
    TYPE_10: 10,
    TYPE_15: 15,
    TYPE_20: 20,
    TYPE_25: 25,
    TYPE_30: 30,
    TYPE_35: 35,
    TYPE_40: 40,
};

export const PACKAGE_RANKING_TYPES: any = {
    5: 1,
    10: 2,
    15: 3,
    20: 4,
    25: 5,
    30: 6,
    35: 7,
    40: 8,
};

export const RAKING_MODEL = [
    {
        "rank": 1,
        "commission": 5,
        "conditions": {
            "dot": 5000,
            "f1": 0,
            "rank": 0
        }
    },
    {
        "rank": 2,
        "commission": 10,
        "conditions": {
            "dot": 5000,
            "f1": 2,
            "rank": 1
        }
    },
    {
        "rank": 3,
        "commission": 15,
        "conditions": {
            "dot": 5000,
            "f1": 2,
            "rank": 2
        }
    },
    {
        "rank": 4,
        "commission": 20,
        "conditions": {
            "dot": 5000,
            "f1": 2,
            "rank": 3
        }
    },

    {
        "rank": 5,
        "commission": 25,
        "conditions": {
            "dot": 5000,
            "f1": 2,
            "rank": 4
        }
    },
    {
        "rank": 6,
        "commission": 30,
        "conditions": {
            "dot": 5000,
            "f1": 2,
            "rank": 5
        }
    },
    {
        "rank": 7,
        "commission": 35,
        "conditions": {
            "dot": 5000,
            "f1": 2,
            "rank": 6
        }
    }
];

export const ROUTES = {
    LOGIN: '/auth/login',
    SIGN_UP: '/auth/sign-up',
    FORGET_PASSWORD: '/auth/forgot-password',
    NEW_PASSWORD: '/auth/new-password',
    VERIFY: '/auth/verify',
    DASHBOARD: '/dashboard',
    NETWORK: '/network',
    PACKAGE: '/package',
    PROFILE: '/profile'
}

export const MESSAGES = {
    "SOCIAL_INVALID_PROVIDER": "Social provider not supported",
    "SOCIAL_EMAIL_EXISTS": "An account linked with this email already existed, please use another",
    "SOCIAL_DISCORD_EMAIL_DIFFERENT": "This Discord account exists, but email is different",
    "SOCIAL_GOOGLE_EMAIL_DIFFERENT": "An account linked with this Google account already existed, please use another",
    "SOCIAL_DISCORD_LINKED": "Your account is already linked with a Discord account, please unlink first",
    "SOCIAL_GOOGLE_LINKED": "Your account is already linked with a Google account, please unlink first",
    "SOCIAL_FACEBOOK_LINKED": "Your account is already linked with a Facebook account, please unlink first",
    "SOCIAL_DISCORD_LINKED_TO_OTHER_ACCOUNT": "This Discord account is already linked with another account",
    "SOCIAL_GOOGLE_LINKED_TO_OTHER_ACCOUNT": "This Google account is already linked with another account",
    "SOCIAL_FACEBOOK_LINKED_TO_OTHER_ACCOUNT": "This Facebook account is already linked with another account",
    "SOCIAL_STEAMID_LINKED": "Your account is already linked to a Steam account, please unlink first",
    "SOCIAL_STEAMID_LINKED_TO_OTHER_ACCOUNT": "This Steam account is already linked with another account",
    "SOCIAL_STEAM_INVALID_REQUEST": "Invalid Steam OpenID request",
    "SOCIAL_GOOGLE_INVALID_REQUEST": "Invalid Google OAuth request",
    "SOCIAL_FACEBOOK_INVALID_REQUEST": "Invalid Facebook OAuth request",
    "SOCIAL_FACEBOK_USER_NOT_FOUND": "No Facebook user found",
    "SOCIAL_STEAM_PLAYER_NOT_FOUND": "No player with given ID found",
    "PASSWORD_INCORRECT": "Your password is incorrect",
    "USER_IS_NOT_EXIST": "This user does not exist",
    "NOT_FORBIDDEN": "You don't have permission to perform this action",
    "PERMISSION_DENIED": "Permission denied",
    "BLOCKED": "Your account was blocked! Please contact Admin for more information",
    "WAITING_VERIFICATION": "User account must be verified.",
    "EMAIL_INVALID": "Your email is invalid.",
    "EMAIL_IN_USE": "Email is in use",
    "USERNAME_IN_USE": "Username is in use",
    "CONFIRM_PASSWORD_INVALID": "Confirm password is incorrect",
    "USER_VERIFIED": "User account has been verified",
    "RESEND_VERIFY_EMAIL_OK": "Verification number resent successfully! Please check your email!",
    "VERIFICATION_NUMBER_EXPIRED": "The verification number is expired",
    "VERIFICATION_NUMBER_INCORRECT": "The verification number is incorrect",
    "WALLET_HAS_BEEN_UPDATED_BEFORE": "Your wallet has been updated before",
    "WALLET_IS_EXISTED": "Wallet already existed",
    "GAME_NOT_EXIST": "Game not exists",
    "GAME_MODE_NOT_EXIST": "Game mode not exists",
    "GAME_MODE_IS_EXIST": "Game mode already existed",
    "USER_PROFILES_NOT_FOUND": "Your profiles are not found",
    "USER_PROFILE_IS_EXIST": "This profile already exists",
    "GAME_IS_EXISTED": "Game already existed",
    "USER_GAMES_NOT_FOUND": "Games are not found",
    "MODE_GAME_IS_EXISTED": "This mode already existed in this game",
    "MODE_GAME_NOT_EXIST": "Game mode not exists",
    "TOURNAMENT_IS_EXIST": "Tournament already existed",
    "TOURNAMENT_IS_NOT_EXIST": "Tournament not exists",
    "TIME_SETTING_INVALID": "Time setting invalid",
    "TEAM_IS_EXISTED": "Team already exists",
    "TEAM_TAG_IS_EXISTED": "Team Tag already exists",
    "TEAM_NOT_FOUND": "Team not found",
    "NOT_TEAM_CAPTAIN": "You are not the captain of this team",
    "NOT_IN_TEAM": "You are not a member of this team",
    "NOT_TEAM_MEMBER": "This user is not a member of this team",
    "BRACKET_START_DATE_INCORRECT": "Can not be sooner than Tournament start date",
    "BRACKET_NOT_EXIST": "Apply team from bracket: Bracket does not exist",
    "TOP_TEAM_INCORRECT": "Can not exceed the maximum team of this bracket",
    "PRIZEPOOL AVALIABLE NOT ENOUGH": "The prizepool is not available for this setting",
    "SINGLE_ELIMITION_NOT_EXIST": "Single Elimination mode does not exist",
    "NOT_FOUND_CURRENCY": "Currency not found ",
    "PRIZEPOOL 4 BRACKET NOT ENOUGH": "The prizepool is not enough for this setting",
    "YOU_ARE_NOT_ORGANIZER_OF_TOURNAMENT": "No permission. You are not organizer of this tournament",
    "BRACKET_IS_NOT_EXIST": "Bracket does not exist",
    "BRACKET_FINISHED": "Bracket has finished",
    "BRACKET_STATUS_INCORRECT": "The status of Bracket is incorrect",
    "YOU_ARE_NOT_ORGANIZER_OF_BRACKET": "No permission. You are not organizer of this tournament",
    "TOURNAMENT_LIVESTREAM_IS_NOT_EXIST": "Tournament Livestream does not exist",
    "INVALID_STREAM_LINK": "Invalid stream link or platform not supported",
    "INVALID_STREAM_LINK2": "Invalid stream link or platform not supported",
    "STREAM_LINK_IS_REQUIRED": "Stream link is required",
    "TEAM_IS_NOT_EXIST": "Team does not exist",
    "TEAM_HAS_BEEN_JOINED": "This team has joined",
    "TEAM_NOT_JOIN_BRACKET": "This team has not joined the bracket",
    "TEAM_IS_NOT_SEEDING_TEAM": "This team is not seeded",
    "TEAM_ALREADY_REG_THIS_TOURNAMENT": "This team has already registered in this tournament",
    "TEAM_HAS_NOT_REG_THIS_TOURNAMENT": "This team has not registered in this tournament",
    "ONLY_CAPTAIN_CAN_WITHDRAW": "Only the captain can withdraw the team registration",
    "ROUND_IS_NOT_EXIST": "Round does not exist",
    "BRACKET_IS_ONGOING_OR_COMPLETED": "Bracket cannot be reset. It is ongoing or completed.",
    "MATCH_IS_NOT_EXIST": "Match does not exist",
    "MATCH_IS_NOT_EXIST_OR_COMPLETED": "Match does not exist or is finished",
    "ONLY_CHANGE_TEAM_IN_ROUND_1": "You can only change teams in Round 1",
    "TEAM_INVALID": "Invalid Team",
    "MATCH_INVALID": "Invalid Match",
    "WINNER_TEAM_INVALID": "Invalid winning team",
    "MATCH_IS_FINISHED": "Match is finished",
    "TEAM_LIMIT_EXCEEDED": "Can not exceed limit number of team",
    "TEAM_PER_GROUP_INCORRECT": "Number of team per group is not correct",
    "GROUP_IS_NOT_EXIST": "Group does not exist",
    "TEAM_QUALIFY_INCORRECT": "Team qualify is not correct",
    "NUMBER_GROUP_INCORRECT": "Number of group is not correct",
    "GAME_PER_ROUND_INCORRECT": "The input value must be multiples of default value",
    "SCORE_OF_TEAM_INVALID": "Score input is belong to a team outside of this match",
    "STAGE_IS_NOT_EXIST": "Stage does not exist",
    "BRACKET_IS_IN_OTHER_STAGE": "This bracket is belong to another stage",
    "USER_IS_NOT_ACTIVE": "This account is not verified. You can not change password",
    "REQUEST_EXISTED": "There is a duplicated request under processing",
    "LADDER_IS_NOT_EXSIT": "Ladder does not exist",
    "LADDER_TIME_INCORRECT": "Ladder time is not correct",
    "GUILD_IS_REQUIRED": "A Guild is required to proceed",
    "GAME_IS_NOT_EXIST": "Game does not exist",
    "GUILD_IS_NOT_EXIST": "Guild does not exist",
    "YOU_ARE_NOT_LADDER_OWNER": "You need ladder owner permission to proceed",
    "CREATE_MAX_1_GUILD": "You reached maximum guild allowed on this account",
    "GUILD_NAME_EXISTED": "Guild name is already existed",
    "INVALID_GUILD": "Invalid Guild",
    "NOT_GUILD_OWNER": "You need guild owner permission to proceed",
    "USER_GAME_PROFILE_IS_NOT_EXIST": "User game profile doest not exist",
    "USER_GAME_PROFILE_HAS_BEEN_JOINED_TO_LADDER_BEFORE": "The user profile has already joined this ladder",
    "USER_GAME_PROFILE_IS_NOT_JOIN_INTO_LADDER": "The user profile has not yet joined this ladder",
    "PLAYER_IS_NOT_EXSIT": "Player does not exist",
    "ADDRESS_INVALID": "The address is invalid",
    "GAME_NOT_ALLOW_BRACKET_TYPE": "The game is not allowed for this stage/bracket format",
    "TIERS_INVALID": "Tier is invalid",
    "LADDER_FULL_SLOT": "The ladder is full",
    "LADDER_OUT_OF_DATE": "The ladder has ended",
    "USERNAME_FORMAT_INVALID": "Username can only contain lower/uppercase letters, numbers, and periods (.)",
    "PASSWORD_FORMAT_INVALID": "Must have at least 8 characters and contain letters, numbers, and symbols.",
    "LENGTH_NAME_INVALID": "Name length is invalid",
    "NAME_MUST_NOT_CONTAIN_SPECIAL_CHARACTOR": "Name must not contains special characters",
    "TOURNAMENT_NOT_YET_SETTING_OPERATION_TIME": "Tournament operating time is not set",
    "PLAYER_NAME_NOT_EXIST": "Player is not existed in steam pubg",
    "TIME_REGISTRATION_SOONER_OPERATION": "Time registration must sooner start time operation",
    "REGISTRATION_FEE_INVALID": "Registration fee setting is invalid",
    "TEAM_APPROVED_GREATER_ROSTER_SIZE": "Number team approved is greater than limit for this tournament",
    "USER_GAME_PROFILE_VERIFIED": "User game profile is verified",
    "USER_GAME_PROFILE_VERIFING": "User game profile is verifying",
    "TOTAL_PRIZEPOOL_NOT_EQUAL_1": "Total prizepool allocated is not equal 100 percent",
    "CURRENCY_NOT_SET_FOR_TOURNAMENT": "Currency is not set for this tournament",
    "DONATE_TRANSACTION_HASH_DUPLICATE": "This donate transaction has been duplicated",
    "SETTING_NOT_MATCH_AMOUNT_ALLOCATED": "Stage prize settings is not equal allocated amount",
    "TOTAL_SETTING_NOT_ENOUGH": "Total prize settings is not equal 100 percent allocated",
    "USER_GAME_PROFILE_NOT_VERIFICATION": "User game profile is not verified",
    "USER_MUST_BE_ADD_WALLET_TO_CREATE_TOUR": "User must connect wallet before creating tournament",
    "CANT_CREATE_TOUR_CONTRACT": "Can not create tournament contract",
    "TOUR_CONTRACT_ADDRESS_DO_NOT_CHANGE": "Tournament contract address is not changed",
    "TOURNAMENT_NOT_YET_FINISH": "Tournament is not yet finished",
    "SIZE_TEAM_GREATER_MAX_ROSTER_SIZE": "Size of selected team is greater than max roster allowed",
    "SIZE_TEAM_SMALLER_MIN_ROSTER_SIZE": "Size of selected team is smaller than min roster allowed",
    "GUILD_NOT_EXISTED": "Guild is not existed or you are not guild master",
    "USER_NOT_IN_THIS_GUILD": "Selected user is not a member of guild",
    "USER_NOT_GUILD_MASTER_OF_THIS_GUILD": "User is not guild master",
    "USER_NOT_JOINED_ANY_GUILD": "User is not yet joined any guilds",
    "NO_PERMISSION_NOT_OWNER": "You need owner permission to proceed",
    "USER_JOINED_IN_GUILD": "Selected user has joined another guild",
    "USER_WAS_SENDED_A_JOIN_REQUEST": "Join request has been sent to this user",
    "USER_NOT_IN_GUILD_CANT_LEAVE": "User is not a member of guild",
    "MEMBER_IS_NOT_EXIST": "Member does not exist",
    "GUILD_MEMBER_NOT_EXIST": "Guild member does not exist",
    "GUILD_MEMBER_STATUS_INCORRECT": "Guild member status is incorrect",
    "SWISS_IS_NOT_EXIST": "Swiss format does not exist",
    "REQUIRE_SETTING_SOONER_START_TIME_REGISTRATION": "Setting need to be sooner than the start time of registration",
    "USER_IS_NOT_GUILD_MEMBER": "User is not a guild member",
    "USER_IS_NOT_GUILD_MASTER": "User is not a guild master",
    "EXIST_MATCH_NOT_YET_COMPLETED": "Match is not yet completed",
    "USER_GAME_PROFILE_NOT_USE_IN_THIS_LADDER": "This profile is not being used in this ladder",
    "IMAGE_OVER_MAX_SIZE": "Image size is exceed limit",
    "TOURNAMENT_TX_UPDATED_BEFORE": "Tournament transaction is already updated",
    "TOURNAMENT_CONTRACT_NOT_EXIST": "Tournament contract does not exist",
    "TOURNAMENT_STATUS_UPDATED_BEFORE": "Tournament status is already updated",
    "TOURNAMENT_CONTRACT_UPDATED_BEFORE": "Tournament contract is already updated",
    "USER_GAME_PROFILE_JOIN_LADDER_ONGOING": "Player is trying to join an ongoing ladder",
    "USER_GAME_PROFILE_JOIN_TOURNAMENT_ONGOING": "Player is trying to join an ongoing tournament",
    "CAN_NOT_GEN_GREATER_MAX_ROUND_OF_BRACKET": "Can not generate round greater than max round limit of bracket",
    "NEED_ADD_FINAL_WINNERS": "The final winners has to be set before finish tournament",
    "NO_STAGE_IN_TOUR": "The stage is not belong to this tournament",
    "FINAL_WINNERS_INCORRECT": "The final winners is not correct",
    "MESSAGE_CANNOT_BE_EMPTY": "Message can not be empty",
    "MESSAGE_CANNOT_BE_LONGER_THAN_300": "Message can not have more than 300 characters",
    "BRACKET_GENERATED": "Bracket has been generated",
    "GAME_DONT_HAVE_LADDER": "This game does not have any available ladder",
    "USER_ONLY_USE_1_PROFILE_TO_JOIN_LADDER": "You can use only one game profile to join ladder",
    "USER_HAS_BEEN_ADDED_WALLET": "User wallet has been connected",
    "TOKEN_REGIST_NOT_IN_LIST_CURRENCIES": "The token you try to regist is not in list of allowed currencies",
    "TEAM_APPROVED_GREATER_MAX_TEAMS": "Number of approved team is greater than maximum allowed",
    "NUMBER_OF_SCORES_MUST_SMALLER_NUMBER_GAME_OF_MATCH": "Number of scores input is not valid",
    "TEAMS_OF_BRACKET_NOT_ENOUGH_NUMBER_TEAM_QUALIFY": "Total of teams in brackets is not match with number of team qualified",
    "DO_NOT_EMPTY_TEAM_IN_MATCH": "A team is left empty in match",
    "NO_ENABLE_3RD_4TH": "The number of team per bracket must be greater than 3 for 3rd/4th match setting",
    "ROUND_COMPLETED_NO_UPDATE_PO_FOR_ROUND": "Game per match can not be updated once round is completed",
    "TEAM_PLAYED_IN_THE_OTHER_BRACKET": "This team is played in another bracket",
    "LADDER_STATS_IS_NOT_EXSIT": "Ladder stats does not exist",
    "MEMBER_NOT_FOUND": "Member is not found",
    "USER_NOT_FILL_WALLET": "User wallet is not connected",
    "OVERALL_STAT_OF_THIS_USER_IS_NOT_EXIST": "Overall stats of this user does not exist",
    "USER_JOINED_LADDER_WITH_OTHER_PROFILE": "User has already joined this ladder with another profile",
    "ROUND_COMPLETED_NO_UPDATE_SCORES": "Game result can not be updated once round is completed",
    "TOURNAMENT_NOT_ALLOW_REGISTER": "Register is not allowed for this tournament",
    "USER_ALREADY_HAS_OG_ROLE": "User already have organizer permission",
    "USER_ALREADY_HAS_GM_ROLE": "User already have guidl master permission",
    "CREATE_REQUEST_FAILED": "Failed to create request",
    "CREATE_SPONSOR_FAILED": "Failed to create sponsor",
    "NUMBER_PROGRESSING_MUST_SMALLER_TEAM_PER_GROUP": "Number of team progressing must be smaller than team per group",
    "STAGE_IS_NOT_EMPTY": "The stage is not empty",
    "MAX_TEAMS_INCORRECT": "Maximum number of team is not valid",
    "START_DATE_MUST_AFTER_TOURNAMENT_START_DATE": "Start date have to be set after tournament start date",
    "TOURNAMENT_HAS_NOT_SETTING_OPERATING_START_TIME": "Tournament start time is not yet been set",
    "START_DATE_MUST_BEFORE_TOURNAMENT_END_DATE": "Start date have to be set before tournament end date",
    "EXISTING_MATCH_NOT_COMPLETED": "Existed match is not yet completed",
    "ROUND_FINISHED": "Round has been finshed",
    "TEAM_IS_NOT_IN_MATCH": "Selected team is not in match",
    "TOURNAMENT_IS_NOT_STANDBY": "Tournament settings can only be edited before publish tournament",
    "TOURNAMENT_IS_NOT_PUBLISH": "Tournament is not yet published",
    "TOURNAMENT_IS_NOT_UPCOMING": "Tournament status is not upcoming",
    "TOURNAMENT_IS_NOT_ONGOING": "Tournament status is not ongoing",
    "BRACKET_NOT_ALLOW_SEEDING": "Seeding is not yet allowed for this bracket",
    "MATCH_NOT_ALLOW_UPDATE_SCORE": "Match score is not yet allowed to be updated",
    "TOURNAMENT_HAS_BEEN_REFUNDED": "Tournament fee has been refund",
    "TOURNAMENT_NOT_ALLOW_REFUND": "Tournament fee is not allowed for refund",
    "REPORT_DOES_NOT_EXIST": "Report does not exist",
    "NUMBER_TO_QUALIFY_INVALID": "Number of qualify team is invalid",
    "NOT_ENOUGH_TEAM_FOR_GEN_NEXT_ROUND": "Number of team is not enough to generate next round",
    "LIMIT_MUST_BE_LOWER_OR_EQUAL_THAN_100": "Input must be lower than or equal to 100",
    "TOKEN_IS_NOT_EXIST": "Token does not exist",
    "YOU_ARE_NOT_ORGANIZER_OF_SPONSOR": "You need to be organizer or sponsor to proceed",
    "TOURNAMENT__MUST_BE_CREATE_STAGE_BEFORE_PUBLISH": "Tournament's stage(s) need to be create before publish",
    "INVITE_REQUEST_HAS_SENT": "Invite request has been sent",
    "INVITE_REQUEST_DOES_NOT_EXIST": "Invite request does not exist or has been removed",
    "INVITE_REQUEST_HAS_BEEN_PROCESSED": "Invite request has been processed",
    "INVITE_REQUEST_HAS_EXPIRED": "Invite request has been expired",
    "INVITEE_GAMEACCOUNT_REQUIRED": "User need a game account to be invited",
    "INVITEE_ALREADY_A_MEMBER": "User is already a member",
    "JOIN_GUILD_REQUEST_NOT_EXIST": "Join request does not exist",
    "ONLY_JOIN_2_GUILD": "User is allowed to join only 2 guilds",
    "INPUT_NAME_REQUIRED": "Name can not be empty",
    "CREATE_TOUR_REQUIRED": "Input is not valid",
    "MATCH_INCORRECT": "Match is not correct",
    "CREATE_TEAM_REQUIRED_FIELD": "Input is required to create team",
    "SINGLE_ELIMINATION__MAX_TEAMS_MIN_2": "Minimum team required is 2",
    "BRACKET__DUPLICATE_TEAM_INPUT": "Team input is duplicated for bracket",
    "MATCH__TIME_FOR_MATCH_INCORRECT": "Match time is not correct",
    "MATCH__NOT_EXIST": "Match does not exist",
    "STAGE__TIME_NOT_SETUP": "Stage time can not be blank",
    "TOURNAMENT__NOT_CREATE_ANY_STAGE": "Stage(s) is not yet being created",
    "SPONSOR_NAME_CANNOT_BE_EMPTY": "Sponsor name can not be blank",
    "SPONSOR_URL_CANNOT_BE_EMPTY": "Sponsor url can not be blank",
    "PROMOTING_NAME_CANNOT_BE_EMPTY": "Promotion name can not be blank",
    "SPONSOR_NOT_EXIST": "Sponsor does not exist",
    "TOTAL_DISTRIBUTE_PRIZE_GREATER_1": "Total prize distributed by setting is greater than 100 percent",
    "NUMBER_OF_TEAM_DISTRIBUTE_GREATER_NUMBER_TEAM_SETTING": "Number of rewarded team is greater than number of team in stage setting",
    "USER_REFUND_IS_NOT_EXIST": "Can not refund. User does not exist",
    "USER_CLAIM_IS_NOT_EXIST": "User claim does not exist",
    "BATTLE_ROYAL__TEAMS_IN_MATCH_INCORRECT": "Number of teams in match must be greater than or equal to the number of teams in round",
    "TOURNAMENT__MUST_BE_SETTING_DISTRIBUTION_BEFORE_PUBLISH": "Prize distribution setting has to be set before publish tournament",
    "BATTLE_ROYAL__TEAMS_IN_GAME_MUST_BE_GREATER_THAN_TEAMS_PER_GROUP": "The number of teams in game must be greater than the number of teams per group",
    "YOU_ARE_NOT_OPERATOR_OF_TOURNAMENT": "You need operator permission to proceed",
    "YOU_ARE_NOT_SUPPORTER_OF_TOURNAMENT": "You need supporter/operator permission to proceed",
    "FIELDS_REQUIRED": "FIELDS_REQUIRED",
    "BATTLE_ROYAL__POINT_DISTRIBUTE_INCORRECT": "BATTLE_ROYAL__POINT_DISTRIBUTE_INCORRECT",
    "TOURNAMENT__MUST_BE_SETTING_QUALIFY_FOR_STAGE_BEFORE_PUBLISH": "Qualify setting of stages has to be set before publish tournament",
    "BRACKET__CANT_UPDATE_SCORE_AGAIN_BEFORE_NEXT_STAGE_STARTED": "BRACKET__CANT_UPDATE_SCORE_AGAIN_BEFORE_NEXT_STAGE_STARTED",
    "TOTAL_TEAMS_QUALIFY_GREATER_TOTAL_TEAMS": "Total teams qualify must be smaller total teams of stage",
    "NUMBER_TO_DISQUALIFY_INVALID": "Number to disqualify invalid",
    "BRACKET__MAX_GROUP_IS_8": "Maximum Groups allowed: 8",
    "REFERRER_NOT_FOUND": "Referrer not exist",
    "UNKNOWN_ERROR": "Oops! Something wrong happened",
    "VERIFY_GUIDE": 'Enter the verification code we sent you in the email. (Please check in Spam, Promotion or Important part for sure)',
    "REGISTER_SUCCESS": 'Register successfully!',
    "OTP_LENGTH_ERROR": 'Verification code must have length of 6',
    "OTP_RESEND_OK": 'Resend verification code successfully',
    "RESET_PWD_SUCCESS": 'Reset password successfully!',
    "ENTER_PACKAGE_SUCCESS": 'Enter package successfully!',
    "ENTER_PACKAGE_FAIL": 'Enter package failed!',
    "REQUIRED_MESSAGE": 'Cannot leave this blank.'
};