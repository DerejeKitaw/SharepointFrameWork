declare interface IHellowWorld2Strings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'hellowWorld2Strings' {
  const strings: IHellowWorld2Strings;
  export = strings;
}
