"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Pagination,
} from "@mui/material";

// async function fetchCustomers() {
//   const res = await fetch(
//     "https://my.api.mockaroo.com/customer-activity?key=2c530ee0"
//   );
//   if (!res.ok) console.log("Failed to fetch data");
//   return res.json();
// }

export default function CustomerList() {
//   const { data, error, isLoading } = useQuery({
//     queryKey: ["customers"],
//     queryFn: fetchCustomers,
//     staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
//   });
const data = [{
  "id": 1,
  "name": "Garner",
  "email": "gwaulker0@businessweek.com",
  "signupDate": "2024-09-11",
  "lastActivity": "Napkin - Dinner, White"
}, {
  "id": 2,
  "name": "Marylou",
  "email": "mcoyle1@slideshare.net",
  "signupDate": "2024-04-18",
  "lastActivity": "Ham - Virginia"
},  {
  "id": 86,
  "name": "Shermy",
  "email": "sstaterfield2d@domainmarket.com",
  "signupDate": "2024-02-10",
  "lastActivity": "Shiratamako - Rice Flour"
}, {
  "id": 87,
  "name": "Barny",
  "email": "bbrade2e@ucoz.ru",
  "signupDate": "2024-05-14",
  "lastActivity": "Cookies Almond Hazelnut"
}, {
  "id": 88,
  "name": "Polly",
  "email": "pantognoni2f@yale.edu",
  "signupDate": "2024-06-02",
  "lastActivity": "Chicken - Whole Fryers"
}, {
  "id": 89,
  "name": "Frederich",
  "email": "fcutler2g@apple.com",
  "signupDate": "2024-04-01",
  "lastActivity": "Wine - Soave Folonari"
}, {
  "id": 90,
  "name": "Madeline",
  "email": "mglanders2h@netvibes.com",
  "signupDate": "2024-03-13",
  "lastActivity": "Bar Special K"
}, {
  "id": 91,
  "name": "Bear",
  "email": "bholwell2i@google.pl",
  "signupDate": "2024-05-03",
  "lastActivity": "Bread - White Epi Baguette"
}, {
  "id": 92,
  "name": "Joly",
  "email": "jboggon2j@spotify.com",
  "signupDate": "2024-10-10",
  "lastActivity": "Beef Cheek Fresh"
}, {
  "id": 93,
  "name": "Anitra",
  "email": "adomenici2k@networksolutions.com",
  "signupDate": "2024-04-22",
  "lastActivity": "Samosa - Veg"
}, {
  "id": 94,
  "name": "Deena",
  "email": "dgosker2l@arizona.edu",
  "signupDate": "2024-01-19",
  "lastActivity": "Pepper - Julienne, Frozen"
}, {
  "id": 95,
  "name": "Ava",
  "email": "abuye2m@slideshare.net",
  "signupDate": "2024-01-09",
  "lastActivity": "Milk - Chocolate 250 Ml"
}, {
  "id": 96,
  "name": "Selma",
  "email": "ssterrick2n@instagram.com",
  "signupDate": "2024-01-22",
  "lastActivity": "Chicken - Livers"
}, {
  "id": 97,
  "name": "Agathe",
  "email": "ateggart2o@bloglines.com",
  "signupDate": "2024-07-11",
  "lastActivity": "Lettuce - Arugula"
}, {
  "id": 98,
  "name": "Melosa",
  "email": "mofielly2p@google.com.au",
  "signupDate": "2024-04-09",
  "lastActivity": "Wine - Vouvray Cuvee Domaine"
}, {
  "id": 99,
  "name": "Berty",
  "email": "bsylvaine2q@mapquest.com",
  "signupDate": "2024-07-27",
  "lastActivity": "Red Cod Fillets - 225g"
}, {
  "id": 100,
  "name": "Jaymie",
  "email": "jscutchings2r@wiley.com",
  "signupDate": "2024-06-19",
  "lastActivity": "Horseradish Root"
}];
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error loading data</div>;

  const filteredData = data.filter(
    (customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>CRM Customer List</h1>
      <TextField
        label='Search by name or email'
        variant='outlined'
        fullWidth
        margin='normal'
        onChange={(e) => setSearch(e.target.value)}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Signup Date</TableCell>
            <TableCell>Last Activity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData
            .slice((page - 1) * rowsPerPage, page * rowsPerPage)
            .map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.signupDate}</TableCell>
                <TableCell>{customer.lastActivity}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Pagination
        count={Math.ceil(filteredData.length / rowsPerPage)}
        page={page}
        onChange={handleChangePage}
        color='primary'
      />
    </div>
  );
}
