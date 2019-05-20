# A sample web project using TypeScript + Express + Docker + Nginx Reverse Proxy

## Table of Contents

1. [Requirements](#requirements)
2. [Setup](#setup)
3. [Run](#run)
5. [Build](#build)

## Requirements

 - Node.js (v.10.x)
 - Docker

## Setup

First of all install dependencies.

```
npm install
```

## Run

```
npm run dev
```

### Run as prod

```
npm run prod
```

## Build

```
npm run build
```

### Build docker

```
npm run build
docker-compose up -d
```


### Uninstall docker images

```
docker-compose down --rmi all
```

