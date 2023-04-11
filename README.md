# javascript-example

## Can I update window.location.hash without having the web page scroll?
```
history.pushState(null,null,'#hashexample');
https://stackoverflow.com/questions/645202/can-i-update-window-location-hash-without-having-the-web-page-scroll

window.pushState(null, null, '/blogs/news');
```

## sticky header
stick-header.html

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

## Search bar - Go to collection page if search term is equal to collection title
```
<script>
  const desktopSearchForm = document.querySelector('.desktop-search-form'),
        inputElement = desktopSearchForm.querySelector('input[name="q"]');
  inputElement.addEventListener('keyup', () => {
    const resultCollection = window.collectionsList.filter((collection) => collection.title.toLowerCase() == inputElement.value.toLowerCase());
    if(resultCollection.length > 0) {
      desktopSearchForm.action = resultCollection[0].handle
    } else {
      desktopSearchForm.action = '/search'
    }
  });
</script>
```

## fetch 
```
//get method

fetch('/cart.js')
.then(res => res.json())
.then(res => console.log(res,'test'))
.catch(issue => console.log(issue))

// async and await
window.addEventListener('load', async () => {
    const api = await fetch('/cart.js');
    const res = await api.json();
    console.log('res', res);
})

const test = async () => {
    
}
```
