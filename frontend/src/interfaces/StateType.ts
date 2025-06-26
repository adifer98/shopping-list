

export interface StateType {
    loading: boolean;
    totalItems: number;
    categories: string[];
    items: Record<string, Record<string, number>>;
    savedSuccessfully: boolean | null;
}
