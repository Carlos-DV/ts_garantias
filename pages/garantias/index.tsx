import { Card, Container, Divider, IconButton, Input, InputBase, Paper, TextField, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { FormEvent } from 'react'

const index = () => {

  const handleSubmit = async ( e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('test')
  }
  return (
    <Container>
        <Card
          variant="outlined"
          sx={{padding:'20px',borderRadius:'10px'}}
          className='box-shadow'
        >
            <Typography sx={{textTransform:'capitalize', textAlign:'center', marginTop:'2rem'}}>Garantias</Typography>
            <Paper
              component="form"
              sx={{ display: 'flex', alignItems: 'center', width: 400 }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Buscar Folio"
                inputProps={{ 'aria-label': 'Buscar folio' }}
                fullWidth 
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Paper>

            <form
              onSubmit={handleSubmit}
            >
              <TextField
                variant="outlined"
                label="Search"
                placeholder="Buscar Folio"
                fullWidth
                sx={{marginY:'20px'}} 
                InputProps={{
                  endAdornment: (
                    <IconButton
                      edge="end"
                      aria-label="Buscar Folio"
                      color="primary"
                      sx={{ p: '10px' }}
                    >
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
              />
            </form>
        </Card>
    </Container>
  )
}

export default index