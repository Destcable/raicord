import { Box, Button, Dialog, TextField, Typography } from '@mui/material';

export const CreateServerDialog = ({
    open,
    onClose
}) => {
    return (
        <Dialog onClose={onClose} open={open}>
            <Box sx={{ bgcolor: '#2c2f33', padding: 4, boxShadow: 3 }}>
                <Typography variant="h6" color="white" textAlign="center" gutterBottom>
                    Персонализируйте свой сервер
                </Typography>
                <Typography variant="body2" color="gray" textAlign="center" mb={2}>
                    Персонализируйте свой новый сервер, выбрав ему название и значок.
                </Typography>
                <form>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <Button
                            fullWidth
                            variant="contained"
                            component="label"
                            sx={{ bgcolor: '#5865f2', color: 'white', padding: '0.75rem', borderRadius: 1 }}
                        >
                            Загрузить значок
                            <input type="file" hidden />
                        </Button>
                    </Box>
                    <TextField
                        fullWidth
                        label="Название сервера"
                        variant="outlined"
                        required
                        InputLabelProps={{ style: { color: 'gray' } }}
                        InputProps={{ style: { backgroundColor: '#424242', color: 'white' } }}
                        sx={{
                            mb: 2,
                            '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                    borderColor: '#03aafb',
                                },
                            },
                            '& .MuiFormLabel-asterisk': {
                                color: 'red',
                            }
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ bgcolor: '#5865f2', color: 'white', padding: '0.75rem', borderRadius: 1 }}
                    >
                        Создать
                    </Button>
                </form>
            </Box>
        </Dialog>
    )
}