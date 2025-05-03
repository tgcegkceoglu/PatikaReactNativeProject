export type User = {
  userName: string;
  userSurname: string;
  userAge: string;
  userMail: string;
  userHometown: string;
};

export type RootStackParamList = {
  WelcomeScreen: undefined;
  MemberSignScreen: undefined;
  MemberResultScreen: {user: User};
};
