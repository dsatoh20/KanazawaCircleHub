import { Autocomplete, TextField, Container, Link, Typography, InputAdornment } from "@mui/material";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

interface SearchBoxProps {
    items: Circle[];
};
export default function SearchBox({items}: SearchBoxProps) {
    const [inputValue, setInputValue] = useState<string>('');
    const circleNames = items.map((item) => item.circleName);
    function CircleExists(circleName: string) {
        return circleNames.includes(circleName);
    };
    return (
        <>

        <Autocomplete
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
            }}
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={items.map((option) => option.circleName)}
            renderInput={(params) => (
            <TextField
                {...params}
                label="サークルをさがす"
                slotProps={{
                input: {
                    ...params.InputProps,
                    type: 'search',
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    )
                },
                }}
            />
            )}
        />
        {CircleExists(inputValue) ?
        <Container maxWidth="sm" sx={{ marginTop: 2, marginBottom: 2 }}>
            <Link href={`/circle?circleName=${inputValue}`}>{inputValue}</Link>
        </Container>
        : inputValue !== "" ? 
        <Container maxWidth="sm" sx={{ marginTop: 2, marginBottom: 2 }}>
            <Typography variant="body2">サークルが見つかりません。</Typography>
        </Container>
        :<></>
        }
        </>
    )
}