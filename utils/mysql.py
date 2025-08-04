import pymysql

conn = pymysql.connect(
        host='Tachinya529.mysql.pythonanywhere-services.com',
        user='Tachinya529',
        password='chiki529',
        database='Tachinya529$schedule'
    )

cursor = conn.cursor()
cursor.execute("SHOW TABLES;")

cursor.close()
conn.close()