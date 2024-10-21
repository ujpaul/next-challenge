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

async function fetchCustomers() {
  const res = await fetch(
    "https://my.api.mockaroo.com/customer-activity?key=2c530ee0"
  );
  if (!res.ok) console.log("Failed to fetch data");
  return res.json();
}

export default function CustomerList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["customers"],
    queryFn: fetchCustomers,
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
  });
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  if (isLoading) return (
    <div className='flex justify-center items-center h-screen'>Loading...</div>
  );
  if (error) return (
    <div className='flex justify-center items-center h-screen'>
      Error: {error.message}
    </div>
  );

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
