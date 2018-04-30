This project was created using [Create React App](https://github.com/facebookincubator/create-react-app) as a baseline.

## To run:

* Clone this repository
* Run `npm install` in the cloned directory
* Run `npm start` to launch the app in the browser

## App usage:

* On the `Refueling Stations` tab of the app, you can create new Refueling Stations by using the form at the top
* On the `Soda Flavors` tab of the app, you can create new Soda Flavors which can be assigned to Refueling Stations
* Both lists (Refueling Stations and Soda Flavors) can be filtered by Soda Flavor name
* To assign a Flavor to a Station:

    1. Go to the `Refueling Stations` tab
    2. Click the `Edit/Pencil` icon button of the Station you wish to edit
    3. Click the `Add/Plus` icon button next to currently unavailable Flavors to make it available at the Station
    4. Click `Done` to return to the `Station` tab

## Notes/Limitations:

* The app uses Redux as a data store
* Component UI provided by Material UI
* Components are separated into Container and Presentation Components
* Neither Refueling Stations nor Soda Flavors may be deleted (nor can Flavors be removed from Stations)
* You can add duplicate Stations or Flavors
* Use on mobile can be a little laggy 