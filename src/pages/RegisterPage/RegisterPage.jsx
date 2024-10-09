import { Box, Button, Container, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

export const RegisterPage = () => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1); // 1-31
    const months = [
        { value: 1, label: 'Январь' },
        { value: 2, label: 'Февраль' },
        { value: 3, label: 'Март' },
        { value: 4, label: 'Апрель' },
        { value: 5, label: 'Май' },
        { value: 6, label: 'Июнь' },
        { value: 7, label: 'Июль' },
        { value: 8, label: 'Август' },
        { value: 9, label: 'Сентябрь' },
        { value: 10, label: 'Октябрь' },
        { value: 11, label: 'Ноябрь' },
        { value: 12, label: 'Декабрь' },
    ];
    const years = Array.from({ length: 175 }, (_, i) => 2024 - i);

    return (
        <Box sx={{ bgcolor: '#2c2f33', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container component="main" maxWidth="sm">
                <Box sx={{ bgcolor: '#323338', padding: 4, borderRadius: 2, boxShadow: 3 }}>
                    <Typography variant="h5" color="white" textAlign="center" gutterBottom>
                        Создать учётную запись
                    </Typography>
                    <form>
                        <Box mb={2} mt={5}>
                            <TextField
                                fullWidth
                                label="E-mail"
                                required
                                variant="outlined"
                                InputLabelProps={{ style: { color: 'gray' } }}
                                InputProps={{ style: { backgroundColor: '#424242', color: 'white' } }}
                                sx={{
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
                        </Box>
                        {/* <Box mb={2}>
                            <TextField
                                fullWidth
                                label="Отображаемое имя"
                                variant="outlined"
                                required
                                InputLabelProps={{ style: { color: 'gray' } }}
                                InputProps={{ style: { backgroundColor: '#424242', color: 'white' } }}
                                sx={{
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
                        </Box> */}
                        <Box mb={2}>
                            <TextField
                                fullWidth
                                label="Имя пользователя"
                                required
                                variant="outlined"
                                InputLabelProps={{ style: { color: 'gray' } }}
                                InputProps={{ style: { backgroundColor: '#424242', color: 'white' } }}
                                sx={{
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
                        </Box>
                        <Box mb={2}>
                            <TextField
                                fullWidth
                                label="Пароль"
                                required
                                type="password"
                                variant="outlined"
                                InputLabelProps={{ style: { color: 'gray' } }}
                                InputProps={{ style: { backgroundColor: '#424242', color: 'white' } }}
                                sx={{
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
                        </Box>
                        <Box mb={2}>
                            <InputLabel required sx={{ color: 'gray', '& .MuiFormLabel-asterisk': { color: 'red', } }}>
                                Дата рождения
                            </InputLabel>
                            <Box display="flex" justifyContent="space-between">
                                <FormControl fullWidth sx={{ mr: 1 }}>
                                    <Select defaultValue="" sx={{ bgcolor: '#424242', color: 'white' }} required placeholder='День'>
                                        <MenuItem value="" disabled>День</MenuItem>
                                        {days.map(day => (
                                            <MenuItem key={day} value={day}>{day}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth sx={{ mx: 1 }}>
                                    <Select defaultValue="" sx={{ bgcolor: '#424242', color: 'white' }} required>
                                        <MenuItem value="" disabled>Месяц</MenuItem>
                                        {months.map(month => (
                                            <MenuItem key={month.value} value={month.value}>{month.label}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth sx={{ ml: 1 }}>
                                    <Select defaultValue="" sx={{ bgcolor: '#424242', color: 'white' }} required>
                                        <MenuItem value="" disabled>Год</MenuItem>
                                        {years.map(year => (
                                            <MenuItem key={year} value={year}>{year}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ bgcolor: '#5865f2', color: 'white', padding: '0.75rem', borderRadius: 1 }}
                        >
                            Продолжить
                        </Button>
                    </form>
                    <Typography variant="body2" color="#03aafb" textAlign="left" mt={2}>
                        Уже зарегистрированы?
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};
