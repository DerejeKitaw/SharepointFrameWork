declare interface IHellowWorld2Strings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  UserNameFieldLable:string;
}

declare module 'hellowWorld2Strings' {
  const strings: IHellowWorld2Strings;
  export = strings;
}
