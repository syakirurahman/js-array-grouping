// Import stylesheets
import './style.css';

const attendanceData = [
  {
    employee: {
      name: "Ronald Kwandy",
      position: "Full-stack Developer"
    },
    date: new Date("2019-08-01"),
    entry: "08:00",
    out: "17:00"
  },
  {
    employee: {
      name: "Ronald Kwandy",
      position: "Full-stack Developer"
    },
    date: new Date("2019-08-02"),
    entry: "08:30",
    out: "17:30",
  },
  {
    employee: {
      name: "Syakir Rahman",
      position: "Front-end Developer"
    },
    date: new Date("2019-08-01"),
    entry: "08:00",
    out: "17:00"
  },
  {
    employee: {
      name: "Syakir Rahman",
      position: "Front-end Developer"
    },
    date: new Date("2019-08-02"),
    entry: "08:30",
    out: "17:30",
  }
];

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h2>Before Grouped</h2><pre>`+JSON.stringify(attendanceData,null,2)+`</pre>`;

const getEmployeeNames = attendanceData.map(
  function(item,index) {
    return item.employee.name;
  });

let newObject = [];
let newItem;
const groupedNames = getEmployeeNames.filter(
  function(filterItem,filterIndex) {
    return getEmployeeNames.indexOf(filterItem)===filterIndex; 
  });

for(let i = 0; i < groupedNames.length; i++) {
  let newItemDetails = [];
  attendanceData.map(
    function(item,index) {
      if(groupedNames[i]===item.employee.name) {
        newItem = item.employee;
        newItemDetails.push(item);
      }
    }
  );

  newItemDetails = JSON.stringify(newItemDetails);
  newItemDetails = JSON.parse(newItemDetails);
  newItem.details = newItemDetails;
  newObject.push(newItem);

}
  console.log(groupedNames);
  console.log(newObject);

  appDiv.innerHTML += `<h2>Grouped by Plain JS</h2><pre>`+JSON.stringify(newObject,null,2)+`</pre>`;