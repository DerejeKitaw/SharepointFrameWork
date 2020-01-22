import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneToggle
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";

import styles from "./HelloWorldWebPart.module.scss";
import * as strings from "HelloWorldWebPartStrings";

export interface IHelloWorldWebPartProps {
  description: string;
  test:string;
  test1:string;
  test2:string;
  test3:boolean;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<
  IHelloWorldWebPartProps
> {
  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.helloWorld}">
    <div class="${styles.container}">
      <div class="${styles.row}">
        <div class="${styles.column}">
          <span class="${styles.title}">Welcome to SharePoint!</span>
  <p class="${
    styles.subTitle
  }">Customize SharePoint experiences using Web Parts.</p>
    <p class="${styles.description}">${escape(this.properties.description)}</p>
      <a href="https://aka.ms/spfx" class="${styles.button}">
        <span class="${styles.label}">Learn more</span>
          </a>
          </div>
          </div>
          </div>
          </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.description
                }),
                PropertyPaneTextField("test", {
                  label: strings.test,
                  multiline: true
                }),
                PropertyPaneCheckbox("test1", {
                  text: strings.test1
                }),
                PropertyPaneDropdown("test2", {
                  label: strings.test2,
                  options: [
                    { key: "1", text: "One" },
                    { key: "2", text: "Two" },
                    { key: "3", text: "Three" },
                    { key: "4", text: "Four" }
                  ]
                }),
                PropertyPaneToggle("test3", {
                  label: strings.test3,
                  onText: "Required",
                  offText: "Not Required"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
