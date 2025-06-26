import { Card, CardContent, Typography, List, ListItem, Chip } from '@mui/material';
import { useSelector } from 'react-redux';
import type { StateType } from '../interfaces/StateType.ts';


interface CategoryListProps {
    category: string
}

export default function CategoryList({ category }: CategoryListProps) {
    
    const categoryItems : Record<string, number> = useSelector((state: StateType) => 
        state.items[category] as Record<string, number>);
    
    return (
        <Card sx={{ 
            minWidth: 200, 
            maxWidth: 220,
            margin: 1,
            direction: 'rtl',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
            <CardContent sx={{ padding: '16px 12px' }}>
                <Typography 
                    variant="h6" 
                    component="div" 
                    sx={{ 
                        color: '#2f855a',
                        fontWeight: 'bold',
                        marginBottom: 2,
                        textAlign: 'center',
                        borderBottom: '2px solid #e2e8f0',
                        paddingBottom: 1,
                        fontSize: '18px'
                    }}
                >
                    {category}
                </Typography>
                
                {Object.keys(categoryItems).length === 0 ? (
                    <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ 
                            textAlign: 'center',
                            fontStyle: 'italic',
                            color: '#666',
                            fontSize: '16px'
                        }}
                    >
                        אין מוצרים בקטגוריה זו
                    </Typography>
                ) : (
                    <List sx={{ padding: 0 }}>
                        {Object.entries(categoryItems).map(([itemName, count]) => (
                            <ListItem 
                                key={itemName}
                                sx={{ 
                                    padding: '8px 0',
                                    borderBottom: '1px solid #f0f0f0',
                                    direction: 'rtl',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    '&:last-child': {
                                        borderBottom: 'none'
                                    }
                                }}
                            >
                                <Typography 
                                    sx={{
                                        fontWeight: '500',
                                        fontSize: '16px',
                                        textAlign: 'right',
                                        flex: 1,
                                        marginLeft: 1
                                    }}
                                >
                                    {itemName}
                                </Typography>
                                <Chip 
                                    label={count} 
                                    size="small"
                                    sx={{
                                        backgroundColor: '#38a169',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        minWidth: '28px',
                                        height: '24px',
                                        fontSize: '12px'
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>
                )}
            </CardContent>
        </Card>
    );
} 