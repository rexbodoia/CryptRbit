# CryptRbit

### CryptRbit is a project aiming to display analysis on live cryptocurrency data

## Background and Overview

CryptRbit, a multi-platform MERN app, performs real-time financial analyses of the global cryptocurrency market to identify arbitrage trading opportunities. Cryptocurrency exchanges have proliferated rapidly across the globe, and large price discrepancies develop quickly as news, policy, and technology updates emerge, creating ideal trading opportunities. The act of exploiting the pricing inefficiencies will correct the pricing discrepancy itself, so traders must be ready to act swiftly in the case with arbitrage strategies. For this reason, these opportunities are often around for a very short time. Arbitrage currency trading requires the availability of real-time pricing quotes and the ability to act fast on opportunities, so having a live updating arbitrage calculator that pools data from across the global exchange space will be the goal of this app.


This problem decomposes into several areas of activity:
 * Identify reliable, efficient data source for global exchange activity and tap into its API in real-time manner
 * Implement analysis tools, and visualize results in real-time using a library for visually appealing product
 * Build notification tools for users, and potentially the ability to make orders in relevant exchanges.

## Functionality & MVP

  - [ ] We will be able to build a cross platform app using React Native that enables both web and mobile operating systems to access the app
  - [ ] We will build a database in MongoDB and NodeJS/Express Server to function as our back end
  - [ ] We will have a frontend interface that allows users to see relevant news, global currency/cryptocurrency volume metrics and exchange trading hotspots, and automated arbitrage analysis all rendered using JavaScript visualization tools.

#### Bonus Features
  - [ ] User will be able to generate notifications based on user-specified constraints
  - [ ] Integrate available exchange APIS to allow for live or automated order placing and exchange across accounts
  - [ ] Additional data visualization tools

## Technologies & Technical Challenges
 ##### Backend: MongoDB/Express
 - Set up NoSql database and create schema that permits user account creation and sessions.
 - Generous API call limit of 6000 requests per hour per IP, but need to plan on scale up scenario if user base comes larger that would capitalize on the database caching at regular intervals
 - Implement an Express server, create routes as necessary, ensure protected routes are functioning
 ##### Frontend: React-Native/Node
 - Model out components, views and pages routes and learn necessary techniques to implement React-Native HTML-less components and then necessary library to translate to ReactJS for web browser display. Can these both be housed in same project or will they require separate projects?
   -Decide on visualization techniques and ensure available in both React-Native and ReactJS

#### Frontend: React
- Very similar to React-Native codebase but with the html and css necessary to run in the browser. Backend and routes will be identical but there will be some slight design differences. 
- Ultimately much of the code will be duplicated and the necessary adjustments will be made.

#### MVP Collect and organize and analyze data
 + using API calls to CryptoCompare will pull data on relevant targets
 + Data targets will include exchange currency pairs price list (at rate of every 10 secs?), volumes of given currency by fiat currencies, ?
 + create analysis algorithms that produce desired arbitrage end points: arbitrage calculator
 + additional?

#### MVP Dynamically visualize and display data in realtime based on user constraints
  + write appropriate layer of abstraction that provide flexibility in data collection, storage, cleaning/filtering
  + visualize news feed as clickable links to current/relevant news topics sourced from API (google vs cryptocompare), auto updating for time and for selected coin/exchange
  + visualize exchange pricing pairs and discrepancies in highly relevant and actionable format, allowing for user inputed constraints and live updating
  + visualize global 'heatmap' of exchange volume per coin (or coin) in informative and visually pleasing format with clickable links to more specific information

#### MVP Create cross platform app functioning on mobile and web browser
 + ##### Frontend Interface ReactJS
   - build out component map in html
   - will need dedicated CSS, but using similar global styles as React-Native App
 + ##### Frontend Interface React-Native
   - build out component map in React-Native components
   - will need dedicated CSS, but using similar global styles as React-Native App
 + ##### App store dissemination and review creation

## Project Flowchart

example images of data UML:
news display wireframe:
arbitrage display wireframe:
global exchange volume heat map wireframe:


## Accomplished over the Weekend (PRIORITY)
- Identified our Dataset/API and downloaded it, identified key issues for cleaning the data, Make test calls to CryptoCompare APIs
- Tutorials in Express, React-Native, and more information about arbitrage and how arbitrage calculators function
- Completed a MongoDB tutorial and created a skeleton with users creation and session auth
- Drafted wireframes for visualization components, for both web and mobile app screens
- Drafted UML for data flow
- Explore visualization options and limitations for React Native vs React: https://hswolff.com/blog/react-native-art-and-d3/
## Group Members & Work Breakdown

**Whitman Burke**,
**Rex Bodoia**,
**John Lockhart**,

### Day 1/2
 - create backend routes, API calls, and data analysis methods (Whitman/Rex/John to divide evenly)

### Day 3

- make over weekend, break up and assign tasks, come together daily to check in and update/problem solve


### Day 4
 - make over weekend, break up and assign tasks, come together daily to check in and update/problem solve

### Day 5
 - make over weekend, break up and assign tasks, come together daily to check in and update/problem solve

### Day 6
- make over weekend, break up and assign tasks, come together daily to check in and update/problem solve

