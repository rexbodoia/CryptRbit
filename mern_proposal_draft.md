# CryptoRbit

### CryptoRbit is a project aiming to implement machine learning to classify songs into genres

## Background and Overview

CryptoRbit, a multi-platform MERNN app, performs realtime financial analyses of the global cryptocurrency market to identify arbitrage trading opportunities. Cryptocurrency exchanges have proliferated rapidly accross the globe, and large price discrepancies develop quickly as news, policy, and technology updates emerge, creating ideal trading opportunities. The act of exploiting the pricing inefficiencies will correct the pricing descripancy itself, so traders must be ready to act swiftly in the case with arbitrage strategies. For this reason, these opportunities are often around for a very short time. Arbitrage currency trading requires the availability of real-time pricing quotes and the ability to act fast on opportunities.

Read more: How do I use an arbitrage strategy in forex trading? | Investopedia https://www.investopedia.com/ask/answers/forex/forex-arbritrage.asp#ixzz5PL0dnzqc 
Follow us: Investopedia on FacebookThe Crypto-Rbit platform uses livestreamed exchange data to search for price action descrepancies or potential market moves and present this data in a clean, easy to use format. 


This problem decomposes into several areas of activity:
  * Identify reliable, efficient data source for global exchange activity and tap into its API
  * Implement analysis tools, and visualize results in realtime
  * Build notification tools for users, and potentiallly the ability to make orders in relevant exchanges.

## Functionality & MVP

   - [ ] We will be able to build a cross platform app using React Native that enbales both web and mobile operating systems to access the app
   - [ ] We will build a database in MongoDB and NodeJS/Express Server to function as our back end
   - [ ] We will have a frontend interface that allows users to see relevant news, global currency/cryptocurrency volume metrics and exchange trading hotspots, and automated arbitrage analysis all rendered using JavaScript visualization tools.

#### Bonus Features
   - [ ] User will be able to generate notifications based on user-specified constraints
   - [ ] Integrate available exchange APIS to allow for live or automated order placing and exchange across accounts
   - [ ] Additional data visualization tools 

## Technologies & Technical Challenges
  ##### Backend: MongoDB/Express
  - Set up NoSql database and create schema that permits user account creation and sessions.
  - Generous API call limit of 6000 requests per hour per IP, but need to plan on scale up scenario if user base comes larger that would capitalize on the database cacheing at regular intervals
  - Implement an Express server, create routes as necessary, ensure protected routes are functioning
  ##### Frontend: ReactNative/Node 
  - Model out components, views and pages routes and learn necessary techniques to implement ReactNative HTML-less components and then necessary library to translate to ReactJS for web browser display. Can these both be housed in same project or will they require separate projects?
    -Decide on visualization techniques and ensure available in both ReactNative and ReactJS

#### MVP Collect and organize and analyze data
  + using API calls to CryptoCompare will pull data on relavant targets
  + Data targets will include exchange currency pairs price list (at rate of every 10 secs?), volumes of given currency by fiat currencies, ? 
  + create analysis algorthms that produce desired arbitrage end points: arbitrage calculator
  + additional?

#### MVP Dynamically visualize and display data in realtime based on user constraints
   + write appropiate layer of abstraction that provide flexbility in data collection, storage, cleaning/filtering
   + visualize news feed as clickable links to current/relevant news topics sourced from API (google vs cryptcompare), auto updating for time and for selected coin/exchange
   + visualize exchange pricing pairs and descrepancies in highly relevant and actionable format, allowing for user inputed constraints and live updating
   + visualize global 'heatmap' of exchange volume per coin (or coin) in informative and visually pleasing format with clickable links to more specific information

#### MVP Create cross platform app functioning on mobile and web broswer
  + ##### Frontend Interface ReactJS
    - build out component map in html
    - will need dedicated CSS, but using similar global styles as ReactNative App
  + ##### Frontend Interface ReactNative
    - build out component map in ReactNative components
    - will need dedicated CSS, but using similar global styles as ReactNative App
  + ##### App store desimination and review creation

## Project Flowchart

example images of data UML:
news display wirefram:
arbitrage display wirefram:
global exchange volume heat map wirefram:


## Accomplished over the Weekend (PRIORITY)
 - Identified our Dataset/API and downloaded it, identified key issues for cleaning the data, Make test calls to CryptoCompare APIs
 - Tutorials in Express, ReactNative, and more information about arbitrage and how arbitrage calculators function
 - Completed a MongoDB tutorial and created a skeleton with users creation and session auth
 - Drafted wireframes for visualization components, for both web and mobile app screens
 - Drafted UML for data flow 
 - Explore visualization options and limitations for React Native vs React: https://hswolff.com/blog/react-native-art-and-d3/
 
## Group Members & Work Breakdown

**Whitman Burke**,
**Rex Bodoia**,
**John Lockhart**,

### Day 1
  - create data visualizations
  

### Day 2
  - make over weekend, break up and assign tasks, come together daily to check in and update/problem solve

### Day 3

 - make over weekend, break up and assign tasks, come together daily to check in and update/problem solve


### Day 4
  - make over weekend, break up and assign tasks, come together daily to check in and update/problem solve

### Day 5
  - make over weekend, break up and assign tasks, come together daily to check in and update/problem solve

### Day 6
 - make over weekend, break up and assign tasks, come together daily to check in and update/problem solve