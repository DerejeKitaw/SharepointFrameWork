#!/bin/bash

echo
echo -e "\e[1;94mInstalling Node dependencies\e[0m"
npm install

## commands to create dev certificate and copy it to the root folder of the project
echo
echo -e "\e[1;94mGenerating dev certificate\e[0m"
gulp trust-dev-cert

DEV_CERT_PATH=~/.gcb-serve-data
DEV_CERT_CER=$DEV_CERT_PATH/gcb-serve.cer
DEV_CERT_PEM=$DEV_CERT_PATH/gcb-serve.pem

if [ -f "$DEV_CERT_CER" ]; then
  cp $DEV_CERT_CER ./spfx-dev-cert.cer
  echo -e "\e[1;92mCopied gcb-serve.cer to spfx-dev-cert.cer\e[0m"
else
  echo -e "\e[1;91mDev certificate .cer file not found\e[0m"
fi

if [ -f "$DEV_CERT_PEM" ]; then
  cp $DEV_CERT_PEM ./spfx-dev-cert.pem
  echo -e "\e[1;92mCopied gcb-serve.pem to spfx-dev-cert.pem\e[0m"
else
  echo -e "\e[1;91mDev certificate .pem file not found\e[0m"
fi

## add *.cer to .gitignore to prevent certificates from being saved in repo
if ! grep -Fxq '*.cer' ./.gitignore; then
  echo "# .CER Certificates" >> .gitignore
  echo "*.cer" >> .gitignore
  echo -e "\e[1;92mAdded *.cer to .gitignore\e[0m"
fi

## add *.pem to .gitignore to prevent certificates from being saved in repo
if ! grep -Fxq '*.pem' ./.gitignore; then
  echo "# .PEM Certificates" >> .gitignore
  echo "*.pem" >> .gitignore
  echo -e "\e[1;92mAdded *.pem to .gitignore\e[0m"
fi

echo
echo -e "\e[1;92mReady!\e[0m"

echo -e "\n\e[1;94m**********\nOptional: if you plan on using gulp serve, don't forget to add the container certificate to your local machine. Please visit https://aka.ms/spfx-devcontainer for more information\n**********\e[0m"
