<div dir="rtl">

## אפליקציית רשימת קניות

פרויקט זה כולל אפליקציה לבניית רשימת קניות, עם ממשק משתמש ב־React ושרת API ב־.NET.

### הרצת הפרויקט

#### צד שרת (.NET Web API)

1. פתח את התיקייה:  
   `backend`

2. התקן את התלויות (אם צריך):

   ```bash
   dotnet restore
   ```

3. גש לתיקייה הבאה:  
   `backend/src`

4. הפעל את הפרויקט:

   ```bash
   dotnet run --project ShoppingManagement.Api
   ```

5. כתובת ברירת מחדל של ה־API:  
   `https://localhost:5010`

#### צד לקוח (React)

1. פתח את התיקייה:  
   `frontend`

2. התקן את התלויות:

   ```bash
   npm install
   ```

3. הרץ את האפליקציה:

   ```bash
   npm run dev
   ```

4. כתובת ברירת מחדל של הקליינט:  
   `http://localhost:5173`

### דרישות מוקדמות

- Node.js 18 ומעלה  
- .NET 7 ומעלה  
- SQL Server (לפי ההגדרות בקובץ `appsettings.json`)

</div>
