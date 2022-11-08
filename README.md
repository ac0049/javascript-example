# javascript-example

## filter and map
```
  <script>
    window.collectionsList = {{ collections | json }};
  </script>
  // search and return if title contains 'harry'
  testmap = window.collectionsList.filter((collection)=>{
      const collectionTitle = collection.title.toLowerCase();
      return collectionTitle.includes('harry');
  })
  // print array values as HTML format
  testmap.map((test) => {
      return `<div>
          ${test.title}
      </div>`
  }).join('')
```

## filter inline
```
const searchKey = $bar.find('input[name="q"]').val();
if (response.resources.results.collections && response.resources.results.collections.length > 0) {
  const sameCollection = response.resources.results.collections.filter(collection => collection.title.toLowerCase() == searchKey.toLowerCase());

  if(sameCollection.length > 0) {
    $bar.find('form').attr('action', sameCollection[0].url);
  }            
}
```
