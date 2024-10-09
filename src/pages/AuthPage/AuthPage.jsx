import { Container, Typography, TextField, Button, Link, Box, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';

export const AuthPage = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data)

    return <Box sx={{ minHeight: '100vh', bgcolor: '#2c2c2c' }}>
        <Container component="main" maxWidth="sm">
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <Paper elevation={6} sx={{ padding: 4, bgcolor: '#323338', borderRadius: 2, width: '100%' }}>
                    <Typography component="h1" variant="h5" align="center" color="white" gutterBottom>
                        С возвращением!
                    </Typography>
                    <Typography variant="body1" align="center" color="gray" gutterBottom>
                        Мы так рады видеть вас снова!
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <TextField
                            fullWidth
                            label="Адрес электронной почты или номер телефона"
                            required
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                style: { color: 'gray' },
                                sx: {
                                    '& .MuiFormLabel-asterisk': {
                                        color: 'red', // Задаем цвет звездочки
                                    }
                                }
                            }}
                            InputProps={{ style: { color: 'white', backgroundColor: '#424242' } }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&:hover fieldset': {
                                        borderColor: '#03aafb',
                                    },
                                }
                            }}
                            {...register("email")}
                        />
                        <TextField
                            fullWidth
                            label="Пароль"
                            required
                            type="password"
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                style: { color: 'gray' },
                                sx: {
                                    '& .MuiFormLabel-asterisk': {
                                        color: 'red',
                                    }
                                }
                            }}
                            InputProps={{ style: { color: 'white', backgroundColor: '#424242' } }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&:hover fieldset': {
                                        borderColor: '#03aafb',
                                    },
                                }
                            }}
                            {...register("password")}
                        />
                        <Box textAlign="left" mb={2}>
                            <Link href="#" color="#03aafb" variant="body2" underline="none">
                                Забыли пароль?
                            </Link>
                        </Box>
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: '#5865f2',
                                '&:hover': {
                                    backgroundColor: '#4752c4',
                                },
                                padding: '0.75rem',
                                color: 'white',
                                borderRadius: 1,
                                marginBottom: 2,
                            }}
                        >
                            Вход
                        </Button>
                    </form>
                    <Typography variant="body2" align="center" color="gray" mt={2}>
                        Нужна учётная запись?{' '}
                        <Link href="#" color="#03aafb" underline="none">
                            Зарегистрироваться
                        </Link>
                    </Typography>
                </Paper>
            </Box>
        </Container>
    </Box>
}