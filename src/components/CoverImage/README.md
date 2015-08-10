# CoverImage

Retrieves and displays a coverimage based on given `pids` also one of the following sizes should be defined:
 `detail_42`,`detail_117`, `detail_207`, `detail_500`, `thumbnail` or `detail`

If nothing is found nothing will be displayed unless a fallback image is defined in `noCoverUrl`.

## Dependencies
The CoverImage depends on the dbc-node-serviceprovider is part of the parent project, as the CoverImage component dispatches events related to the dbc-node-serviceprovider.

## Properties
The CoverImage component has the following properties:  
`pids` - array of strings  
`prefSize` - string  
`noCoverUrl` - string  

## Example

```javascript
import {CoverImage} from 'dbc-react-components';

...

render() {
  return (
     <CoverImage   
        pids={['pid', 'pid', 'pid']}  
        prefSize={'detail_500'}  
        noCoverUrl={'path/to/fallback/image'}   
     />
   );
}
```
