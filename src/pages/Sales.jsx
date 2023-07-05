import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import DeleteIcon from "@mui/icons-material/Delete"
import useStockCall from "../hooks/useStockCall"
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid"
import { btnStyle } from "../styles/globalStyle"
import SaleModal from "../components/modals/SaleModal"
import EditIcon from "@mui/icons-material/Edit"


//*************************************** */
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
///*********************************** */

const Sales = () => {
  const { getStockData, deleteStockData, getProCatBrand } = useStockCall();
  const { sales } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);

  const [info, setInfo] = useState({
    brand_id: "",
    product_id: "",
    quantity: "",
    price: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    {
      field: "createds",
      headerName: "Date",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "brand",
      headerName: "Brand",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "product",
      headerName: "Product",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price_total",
      headerName: "Amount",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 40,
      headerAlign: "center",
      align: "center",
      renderCell: ({ id, row: { brand_id, product_id, quantity, price } }) => {
        return [
          <GridActionsCellItem
            key={"edit"}
            icon={<EditIcon />}
            label="Edit"
            onClick={() => {
              setOpen(true);
              setInfo({ id, brand_id, product_id, quantity, price });
            }}
            sx={btnStyle}
          />,
          <GridActionsCellItem
            key={"delete"}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => deleteStockData("sales", id)}
            sx={btnStyle}
          />,
        ];
      },
    },
  ];

  useEffect(() => {
    getProCatBrand();
    getStockData("sales");
  }, []); // eslint-disable-line

  ////****************************** */

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  //************************** */
  // eslint-disable-next-line
  const [searchResults, setSearchResults] = useState(sales);

  const handleSearch = (value) => {
    filterData(value);
  };

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setInfo(searchResults);
    else {
      const filteredData = searchResults.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setInfo(filteredData);
    }
  };

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Student List
      </Typography>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="contained"
          onClick={handleOpen}
          style={{
            background: "#FEAF00",
            color: "white",
            fontSize: "14px",
            borderRadius: "4px",
          }}
        >
          ADD NEW STUDENT
        </Button>

        <Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => handleSearch(e.target.value)}
              type="search"
            />
          </Search>
        </Box>
      </div>

      <SaleModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <Box
        sx={{
          width: "100%",
          marginTop: "1rem",
        }}
      >
        <DataGrid
          // autoHeight
          rows={sales}
          columns={columns}
          pageSize={10}
          slots={{
            toolbar: GridToolbar,
          }}
          sx={{
            boxShadow: 4,
          }}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5, page: 0 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
        />
      </Box>
    </div>
  );
}

export default Sales
