# SharepointFrameWork
Now after webpack work properly can run 
node bundle.js

# bundel.js contain both index.js and moment.js codes bundles

# install yeoman
npm install -g yo

# install gulp
npm install -gulp

# install yeoman sharepoint generator template
npm install -g @microsoft/generator-sharepoint

# to check if sharepoint framework installed 
md helloworld-webpart
cd hellworld-webpart
yo @microsoft/sharepoint

# befor running check the dev certificate for web pack.
This will help to run https in a local host during development
gulp trust-dev-cert

enter password

gulp serve

# Actual webpart code is in src file
    -> the main file is HelloworldWebPart.ts
    -> HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps>

# gulp clean 
    -> will clean temporary files and help to see current modification

# The following url will take to same layout found with gulp serve
    https://dkitaw.sharepoint.com/_layouts/15/workbench.aspx
    https://yourSharePointCollectionUrl/_layouts/15/workbench.aspx

    -> Here in this url on the actual url you will see your HellowWorld webpart.

# Add dropdown field in the webpart
    ->import PropertyPaneDropdown in HellowWorldWebPart.ts
    ->Create a property called color with value red
    ->Add dropdown property field
        At this point the dropdown field is not visible in the webpart
    ->Add the color propery in the model(IHelloWorldWebPartProps)
    ->insert the dropdown in the webpart

# Make webpart not auto calculate
    -> use disableReactivePropertyChanges to true
        this will make the webpart not to evaluate automaticaly

# How to add validation to our controller
    ->onGetErrorMessage: this.validateDescription.bind(this)
        Note validateDescription not implemented it is returning true now (TODO)

# How do I know the enviroment the webpart is running (localhost or actualSharepoint site)?
    *->import Environment, EnvironmentType
        *${Environment.type} will return 1 for localhosted webpart
        *${Environment.type} will return 2 for sharepointhosted webpart
            *ClassicalSharePoint = 0
            *Local = 1
            *Sharepoint = 2
            *Test = 3

# Show message where the webpart inviroment is
    *
# If your webpart run in sharepoint workbench
    *-> List all lists in your sharepoint

# How to bundle and deploy webpart
    * How to bundle webpart
        - Note if localhost [https://localhost:4321/temp/workbench.html] (gulp serve) is not running sharepoint [https://dkitaw.sharepoint.com/_layouts/15/workbench.aspx] will through error
        *gulp package-solution
            This will create pacage file as described in package-solution.json. For this case the package will be located at 
            "zippedPackage": "solution/hello-world-webpart.sppkg" 
           * the solution package created usin gulp package-solution is for developmnt only because it is not minified
           *If you want to deploy the package in production use
           gulp package-solution -ship

           *To deploy to the sharepoint just drop the package in the app catalog. Note this code is running in local host. If gulp serve stope it will through error in the share point.
           

