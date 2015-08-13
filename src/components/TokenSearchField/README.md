# TokenSearchField
The TokenSearchField component converts the query to a row of buttons, that can be removed by the user

### API
The component takes an array of elements, a callback function for removing elements and an optional callback function for change events


```
// elements is an array of query objects with a value and type as minimum
let elements = [
    {
      value: 'harry',
      type: 'text'
    },
    {
      value: 'potter',
      type: 'text'
    },
  ];
  
  // The remove callback is called when a user clicks on a filter element
  <TokenSearchField 
    query={elements} 
    remove={callback} 
    change={callback /*optional callback that can be used fx. by an autocomplete component*/}
  />
```
