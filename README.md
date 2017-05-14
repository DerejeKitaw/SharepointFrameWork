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