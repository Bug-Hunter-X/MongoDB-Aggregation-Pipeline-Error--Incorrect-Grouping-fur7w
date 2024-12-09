```javascript
// Corrected aggregation pipeline with error handling
db.collection.aggregate([
  {
    $match: { field: 'value' }
  },
  {
    $group: { _id: '$field', count: { $sum: 1 } }
  },
  {
    $sort: { count: -1 }
  },
  {
    $limit: 10}
]).toArray().then(results => {
  if (results.length === 0) {
    console.error('No documents found with the specified field.');
  } else {
    console.log(results);
  }
}).catch(err => {
  console.error('Aggregation pipeline error:', err);
});
```