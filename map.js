let contacts = new Map();
contacts.set('Jessie', {phone: '222-222-2222', address: "adfads"});
contacts.has('Jessie'); // true
contacts.get('Hilary'); // undefined
contacts.size;
contacts.delete('Jessie');
console.log(contacts.size);