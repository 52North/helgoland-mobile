# Helgoland-Mobile

## Description

### Visual Exploration and Analysis of Sensor Web Data on mobile devices

**This lightweight mobile application enables the exploration, analysis and visualization of sensor web data in various fields of use, e.g. hydrology, meteorology, environmental monitoring, traffic management.**

Helgoland-mobile is a lightweight mobile application to explore, analyze and visualize a broad range of sensor data. You can:

* explore stations or mobile sensor platforms in a map,
* select time series by a list selection,
* visualize time series data,
* or create favorites of selected time series.

The application is based on HTML, JavaScript and CSS and can connect to different Sensor Web endpoints (REST-APIs). These Sensor Web REST-APIs provide a thin access layer to sensor data via RESTful Web binding with different output formats.

Features:

* access to SOS instances (supports OGC SOS spec...)
* diagram view of multiple time series, temporal zooming & panning...
* Architectural basis: HTML, JavaScript, CSS

The following main frameworks are used to provide this application:

* [Angular](https://angular.io/)
* [Ionic](https://ionicframework.com/)
* [Cordova](https://cordova.apache.org/)
* [Leaflet](http://leafletjs.com/)
* [momentJs](http://momentjs.com/)
* [flot](http://www.flotcharts.org/)

<!-- ## Quick Start (Configuration)

Download the latest version of [Helgoland](https://github.com/52North/helgoland/releases).

* Deploy the war-file of the client in your favorite web container (e.g. tomcat)
* Deploy as a static web page in a web server (e.g. apache)

Configure your client in the settings.json in the root folder. Check this(link) site for the different configuration parameter in the settings.json. The main parameters are:

* `defaultProvider` - this is the default selected provider, when the user starts the client
* `restApiUrls` - this is a list of all supported providers by the client -->


## License

Helgoland is licensed under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0).

<!-- ## User guide/tutorial -->

<!-- ## Demo
Explore, analyze and visualize sensor web data with our [Helgoland](http://sensorweb.demo.52north.org/client/#/) demo.

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/3830314/15780576/ae8cf458-29a2-11e6-89ef-bc6f1453e38b.png" alt="Helgoland map view" width="75%"/>
  <img src="https://cloud.githubusercontent.com/assets/3830314/15780591/bdb9a4a8-29a2-11e6-9938-1717a0e7bb7a.png" alt="Helgoland diagram view" width="75%"/>
</p> -->

<!-- ## Changelog -->

<!-- ## References -->

## Contact
<!-- <img src="https://avatars1.githubusercontent.com/u/3830314?v=3&s=140" alt="Webpack and Angular 2" width="48" height="48"/> -->

j.schulte@52north.org

<!-- ## Credits -->

## How to contribute

<!-- This is a frontend component of the repository [sensorweb-client-core](https://github.com/52North/sensorweb-client-core).

It comprises:

* the styling files for the client
* the templates to define the html structure
* the images and fonts which are used in this client -->

### Requirements to develop or build the client

* [nodejs](https://nodejs.org) and [npm](https://www.npmjs.com/)
* [webpack](https://webpack.js.org/)
* [ionic](https://ionicframework.com/)
* [cordova](https://cordova.apache.org/)

### Get ready to start

* `git clone` this repository
* run `npm install` to get all dependencies

#### Start the client in the development mode

* `npm start` runs internally `ionic serve`  and starts the client normally on http://localhost:8100 and should also open it in the default browser.

#### Start the client on an android device

* fulfill the requirements to deploy the app to a device (https://ionicframework.com/docs/intro/deploying/)
* `npm run start:android:device` runs the app on a connected android device

#### Build the client for android

* see requirements in the previous section
* `npm run build:android:prod` bundles the app to an apk in the folder `/platforms/android/build/outputs/apk/*.apk`

<!-- * `npm run build` will also generates a war-file in `build`-folder. -->

<!-- #### How to develop

See [here](https://github.com/52North/sensorweb-client-core#how-to-develop) for more informations. -->

<!-- #### Configuration

See [here](https://github.com/52North/sensorweb-client-core#configuration) -->

<!--## Extensions (Backends, etc., z.B. SOS )
## Road Map/development plans (features, focus…)
## Architecture/Design
## JavaDoc
not needed
## XML Schemata
## contributor
see Github...

## Requirements-->

<!-- ## Credits

The development of the 52°North Helgoland client implementation was supported by several organizations and projects. Among other we would like to thank the following organisations and project

| Project/Logo | Description |
| :-------------: | :------------- |
| <a target="_blank" href="http://www.nexosproject.eu/"><img alt="NeXOS - Next generation, Cost-effective, Compact, Multifunctional Web Enabled Ocean Sensor Systems Empowering Marine, Maritime and Fisheries Management" align="middle" width="172" src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/logo_nexos.png" /></a> | The development of this version of the 52&deg;North Helgoland client was supported by the <a target="_blank" href="http://cordis.europa.eu/fp7/home_en.html">European FP7</a> research project <a target="_blank" href="http://www.nexosproject.eu/">NeXOS</a> (co-funded by the European Commission under the grant agreement n&deg;614102) |
| <a target="_blank" href="http://www.fixo3.eu/"><img alt="FixO3 - Fixed-Point Open Ocean Observatories" align="middle" width="172" src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/logo_fixo3.png" /></a> | The development of this version of the 52&deg;North Helgoland client was supported by the <a target="_blank" href="http://cordis.europa.eu/fp7/home_en.html">European FP7</a> research project <a target="_blank" href="http://www.fixo3.eu/">FixO3</a> (co-funded by the European Commission under the grant agreement n&deg;312463) |
| <a target="_blank" href="http://www.odip.org"><img alt="ODIP II - Ocean Data Interoperability Platform" align="middle" width="100" src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/odip-logo.png"/></a> | The development of this version of the 52&deg;North Helgoland client was supported by the <a target="_blank" href="https://ec.europa.eu/programmes/horizon2020/">Horizon 2020</a> research project <a target="_blank" href="http://www.odip.org/">ODIP II</a> (co-funded by the European Commission under the grant agreement n&deg;654310) |
| <a target="_blank" href="https://www.seadatanet.org/About-us/SeaDataCloud/"><img alt="SeaDataCloud" align="middle" width="156" src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/logo_seadatanet.png"/></a> | The development of this version of the 52&deg;North Helgoland client was supported by the <a target="_blank" href="https://ec.europa.eu/programmes/horizon2020/">Horizon 2020</a> research project <a target="_blank" href="https://www.seadatanet.org/About-us/SeaDataCloud/">SeaDataCloud</a> (co-funded by the European Commission under the grant agreement n&deg;730960) |
| <a target="_blank" href="http://www.wupperverband.de"><img alt="Wupperverband" align="middle" width="196" src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/logo_wv.jpg"/></a> | The <a target="_blank" href="http://www.wupperverband.de/">Wupperverband</a> for water, humans and the environment (Germany) |
| <a target="_blank" href="http://www.irceline.be/en"><img alt="Belgian Interregional Environment Agency (IRCEL - CELINE)" align="middle" width="130" src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/logo_irceline_no_text.png"/></a> | The <a href="http://www.irceline.be/en" target="_blank" title="Belgian Interregional Environment Agency (IRCEL - CELINE)">Belgian Interregional Environment Agency (IRCEL - CELINE)</a> is active in the domain of air quality (modelling, forecasts, informing the public on the state of their air quality, e-reporting to the EU under the air quality directives, participating in scientific research on air quality, etc.). IRCEL &mdash; CELINE is a permanent cooperation between three regional environment agencies: <a href="http://www.awac.be/" title="Agence wallonne de l&#39Air et du Climat (AWAC)">Agence wallonne de l'Air et du Climat (AWAC)</a>, <a href="http://www.ibgebim.be/" title="Bruxelles Environnement - Leefmilieu Brussel">Bruxelles Environnement - Leefmilieu Brussel</a> and <a href="http://www.vmm.be/" title="Vlaamse Milieumaatschappij (VMM)">Vlaamse Milieumaatschappij (VMM)</a>. |
| <a target="_blank" href="http://www.geowow.eu/"><img alt="GEOWOW - GEOSS interoperability for Weather, Ocean and Water" align="middle" width="172" src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/logo_geowow.png"/></a> | The development of this version of the 52&deg;North SOS was supported by the <a target="_blank" href="http://cordis.europa.eu/fp7/home_en.html">European FP7</a> research project <a href="http://www.geowow.eu/" title="GEOWOW">GEOWOW</a> (co-funded by the European Commission under the grant agreement n&deg;282915) | -->