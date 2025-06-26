<div dir="rtl">

## אפליקציית רשימת קניות

פרויקט זה כולל אפליקציה לבניית רשימת קניות, עם ממשק משתמש ב־React ושרת API ב־.NET, הכוללת שמירת נתונים במסד נתונים SQL Server.

---

### הרצת הפרויקט

#### 1. צד שרת (.NET Web API)

1. פתח את התיקייה:  
   `backend`

2. התקן את התלויות (אם צריך):

   ```bash
   dotnet restore
   ```

3. גש לתיקייה:
   `backend/src`

4. ערוך את קובץ `appsettings.json` בפרויקט `ShoppingManagement.Api`, וודא שה־Connection String שלך נראה כך:

   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=(localdb)\\MSSQLLocalDB;Database=ShoppingManagementDb;Trusted_Connection=True;"
   }
   ```

   📝 אם אתה עובד עם SQL Server Express, ייתכן שתצטרך להחליף את `localhost` ב־`localhost\\SQLEXPRESS`.

5. בצע את ה־Migration הראשון ויצור את מסד הנתונים:

   ```bash
    dotnet ef migrations add InitialCreate -p ShoppingManagement.Infrastructure -s ShoppingManagement.Api
    dotnet ef database update -p ShoppingManagement.Infrastructure -s ShoppingManagement.Api
   ```

6. הפעל את השרת:

   ```bash
   dotnet run --project ShoppingManagement.Api
   ```

7. כתובת ברירת מחדל של ה־API:  
   `https://localhost:5010`

---

#### 2. צד לקוח (React)

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

---

### דרישות מוקדמות

- Node.js 18 ומעלה  
- .NET 7 ומעלה  
- SQL Server מותקן מקומית (Express או מלא)
- הכלי `EF Core CLI` להתקנת ה־migrations:

```bash
dotnet tool install --global dotnet-ef
```

</div>
