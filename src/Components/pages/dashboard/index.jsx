import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { getData } from '../../../api/api'

import SearchIcon from '@mui/icons-material/Search'
import Loader from '../../Loader'
import snackbar from '../../SnackBar'

const useStyle = makeStyles({
  root: {
    width: '50%',
    margin: 'auto',
  },
  textField: {
    width: '100%',
    margin: '20px 0px 40px 0px !important',
  },
  product: {
    justifyContent: 'space-between',
    padding: '20px 10px',
  },
  searchIcon: {
    cursor: 'pointer',
  },
})

const Dashboard = () => {
  const [brandName, setBrandName] = useState('iphone')
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const styles = useStyle()

  useEffect(() => {
    onSearch()
  }, [])

  let count = 0
  const onSearch = () => {
    count++
    setIsLoading(true)
    getData(brandName)
      .then((data) => {
        console.log({ data })
        if (count > 5) {
          snackbar("sorry we did't found any match", 'error')
          setIsLoading(false)
          return
        }
        if (!data?.data?.result?.length) {
          onSearch()
          return
        }
        count = 0
        setProducts(data?.data?.result)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
      })
  }
  const brands = ['amazon', 'flipkart']

  // const filterProduct = (product) => {
  //   const splited = 'iphone 11 64GB'.split()
    
  // }

  return (
    <>
      <Box className={styles.root}>
        <TextField
          className={styles.textField}
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment
                className={styles.searchIcon}
                position="start"
                onClick={onSearch}
              >
                <Button color="primary">
                  <SearchIcon />
                </Button>
              </InputAdornment>
            ),
          }}
        />
        {products.map((brand, index) => (
          <>
            <strong>
              <p>{brands[index]}</p>
            </strong>
            {brand.map((product, index) => (
              <Grid container className={styles.product} key={index}>
                <Grid item lg="9">
                  <Typography>{product.Title}</Typography>
                </Grid>
                <Grid item lg="1">
                  <Typography display="flex">
                    &#x20b9;{product.price}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </>
        ))}
      </Box>
      <Loader isOpen={isLoading} />
    </>
  )
}

export default Dashboard
