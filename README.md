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
