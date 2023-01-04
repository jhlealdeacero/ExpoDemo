const headers = {
    'x-api-key':'ED5DDAAA-2074-4426-A2BF-9A962CFD2AF6',
    'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOb21icmVVc3VhcmlvIjoiSk9TRSBIT1JBQ0lPIExPUEVaIExFQUwiLCJDbGFVc3VhcmlvIjoiMTAwMDA5NzYwIiwiQ2xhRW1wcmVzYSI6IjAiLCJOb21icmVQYyI6IjE4OS4yMDMuMTQ4LjgwOjY1MzA1IiwibmJmIjoxNjcyNDE2Mzk4LCJleHAiOjE2NzI0MjM1OTgsImlhdCI6MTY3MjQxNjM5OH0.0Ks9u-VSUhMDnTWWHiv5RGowN2sGjZX2aW_eqwkVnzM',
    
};
function GetToken() {
    return sessionStorage.getItem('Token');
  }
  
  export { headers };