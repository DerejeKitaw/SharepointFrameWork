import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-property-pane";
import * as jQuery from "jquery";
import "jqueryui";
import { SPComponentLoader } from "@microsoft/sp-loader";
import MyAccordionTemplate from "./MyAccordionTemplate";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";

import styles from "./JQueryWebPart.module.scss";
import * as strings from "JQueryWebPartStrings";

export interface IJQueryWebPartProps {
  description: string;
}

export default class JQueryWebPart extends BaseClientSideWebPart<
  IJQueryWebPartProps
> {
  public constructor() {
    super();

    SPComponentLoader.loadCss(
      "//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css"
    );
  }
  public render(): void {
    this.domElement.innerHTML = MyAccordionTemplate.templateHtml;
    const accordionOptions: JQueryUI.AccordionOptions = {
      animate: true,
      collapsible: false,
      icons: {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
      }
    };
    jQuery(".accordion", this.domElement).accordion(accordionOptions);
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
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
