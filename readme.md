# Overview

This repository contains a very simple bare bones smk app, as well as 
the code to set up a simple node https web server that can be used to
support development

# Setup

## Prerequisites

### Get Node and npm

For windows recommend chocolatey, other options available here:
https://nodejs.org/en/download/package-manager/

# Clone / build / Copy SMK - (Temporary)

*This step will soon be replaced by the SMK Command line build tool.*

```
mkdir <smk source dir>
git clone https://github.com/bcgov/smk .
npm install
npm run build
```

This bundles up the smk functionality into the dist folder.  Grab the contents 
of the dist folder and copy to 'scripts' folder for your project

# Clone this repo

```
git clone https://github.com/guylafleur/smk 
```

# Install dependencies

```
cd <project folder>
npm install
```

## Copy SMK

*These steps will soon be replaced with an SMK command line tool that will 
set this up for us.*

If you haven't already copy the contents of `dist` folder from the SMK build repository
to a scripts directory.

# Configure a development web server

Its handy to have dev web server, These steps identify how you can setup an https web 
server for development using node

## Create security certificates

### Install openssl

Run the following commands, The second step will ask a bunch of questions, most of 
them you can just click through with defaults.  These steps require openssl command
line tool.  I'm using Windows Subsystem for Linux with Ubuntu which makes this an 
easy install using:

```
sudo apt-get install openssl
```

For windows easiest install is with chocolately, open a cmd with admin permissions and 
run:

```
choco install openssl -y
```

### Create certificates
```
openssl genrsa -out key.pem 2048
openssl req -new -key key.pem -out client.csr
openssl x509 -req -in client.csr -signkey key.pem -out cert.pem
```

### Create a script to start the Web Server

Copy the following script to the root of your repo `serve.js`:


# run server.
The script to run the server already exists in this repo, it is also 
available here: https://gist.github.com/franTarkenton/604dbe2fc666637fa19d4e75513bbdae#file-serve-js

``` node serve.js ```

# verify all is well

navigate to https://localhost:3000, click on advanced and ignore the security exception, 
you should see a simple web map.
