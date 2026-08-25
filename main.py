from fastapi import FastAPI
import random
import time

app = FastAPI()

# این یک دیتابیس فرضی است (در پروژه اصلی از Redis استفاده کنید)
otp_storage = {}

@app.post("/send-otp")
def send_otp(phone: str):
    # ۱. تولید کد ۶ رقمی تصادفی
    otp = str(random.randint(100000, 999999))
    
    # ۲. ذخیره کد در حافظه موقت با زمان انقضا (مثلاً ۱۲۰ ثانیه)
    otp_storage[phone] = {"code": otp, "expires": time.time() + 120}
    
    # ۳. اینجا باید با استفاده از API پنل پیامکی (مثل کاوه‌نگار) 
    # کد را به شماره کاربر پیامک کنید
    print(f"SMS sent to {phone}: Your code is {otp}")
    
    return {"message": "OTP sent"}

@app.post("/verify-otp")
def verify_otp(phone: str, code: str):
    data = otp_storage.get(phone)
    
    # چک کردن انقضا و صحت کد
    if data and data["code"] == code and time.time() < data["expires"]:
        return {"status": "success", "token": "YOUR_JWT_TOKEN_HERE"}
    
    return {"status": "error", "message": "Invalid or expired code"}
