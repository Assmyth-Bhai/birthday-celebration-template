# ��� Birthday Countdown Website

Beautiful birthday website with countdown, photo gallery, and celebration effects!

---

## ��� Quick Start

```bash
npm install
npm run dev
```
Open `http://localhost:5173`

---

## ✏️ Customize

### 1. Birthday Date ⏰

**File:** `src/components/Countdown.jsx` (Line 21)

```javascript
const targetDate = new Date("2026-01-14T00:00:00");
```

**Format Explanation:**
```
"YYYY-MM-DDTHH:MM:SS"
 ↓    ↓  ↓  ↓  ↓  ↓
 Year Mo Day Hr Min Sec
```

- **YYYY** = 4-digit year (2025, 2026, etc.)
- **MM** = 2-digit month (01=Jan, 02=Feb, ... 12=Dec)
- **DD** = 2-digit day (01 to 31)
- **T** = Separator (keep this!)
- **HH:MM:SS** = Time in 24-hour format

**Time Examples:**
| What you want | Use this |
|---------------|----------|
| Midnight (12:00 AM) | `00:00:00` |
| 9:00 AM | `09:00:00` |
| Noon (12:00 PM) | `12:00:00` |
| 3:30 PM | `15:30:00` |
| 11:59 PM | `23:59:00` |

**Real Examples:**
```javascript
// January 15, 2026 at midnight
const targetDate = new Date("2026-01-15T00:00:00");

// June 10, 2025 at 3:30 PM
const targetDate = new Date("2025-06-10T15:30:00");

// December 25, 2025 at noon
const targetDate = new Date("2025-12-25T12:00:00");
```

**⚠️ Common Mistakes:**
- ❌ `2025-1-5` → ✅ `2025-01-05` (always 2 digits)
- ❌ `2025/12/25` → ✅ `2025-12-25` (use dashes, not slashes)
- ❌ Missing T → ✅ Must have `T` between date and time

---

### 2. Names & Message

**File:** `src/components/MessageCard.jsx` (Lines 17-28)

```javascript
const recipientName = "Maha";
const senderName = "Prayag";
const message = `Your message here...`;
```

---

### 3. Photos

Add 6 photos to `public/images/` named: `pic1.jpg` to `pic6.jpg`

---

### 4. Music (Optional)

Replace `public/music.mp3` with your song

---

## ��� Test Your Changes

### Using the Test Button

There's a special **"��� Test Celebration"** button on the countdown page that lets you skip the timer instantly!

**What it does:**
- ✅ Skips countdown timer
- ✅ Shows birthday celebration page immediately
- ✅ Lets you preview everything (confetti, message, gallery, music)
- ✅ Perfect for testing before the big day!

**How to use:**
1. Save your changes (date, names, message, photos)
2. Make sure `npm run dev` is running
3. Look at the countdown page
4. Click the **"��� Test Celebration"** button below the timer
5. Boom! ��� You'll see the full celebration instantly

**Why use it:**
- Test your message for typos
- Check if all 6 photos load correctly
- Verify music plays
- See confetti and animations
- Make sure everything looks perfect

---

### Remove Test Button Before Going Live

**IMPORTANT:** Delete the test button before sharing the website with her!

**File:** `src/components/Countdown.jsx`  
**Lines to delete:** 95-101

**Look for this code and DELETE it:**
```javascript
{/* ⚠️ TEST BUTTON - delete it from here⚠️ */}
<button
  className="test-button"
  onClick={onBirthdayReached}
  title="Skip countdown and see celebration"
>
  ��� Test Celebration
</button>
{/* ⚠️ END TEST BUTTON - DELETE UP TO HERE ⚠️ */}
```

**How to delete:**
1. Open `src/components/Countdown.jsx`
2. Find lines 95-101 (they have the warning comments)
3. Select all these lines
4. Press Delete
5. Save the file

**Why remove it:**
- She might accidentally click it
- Ruins the surprise of waiting for the countdown
- Makes the site look more professional

---

### Clear Browser Storage (If Countdown Gets Stuck)

After testing with the test button, the countdown might stay on the celebration page even after refreshing. Here's how to reset it:

**Step-by-step instructions:**

1. **Open Developer Tools:**
   - Press `F12` on your keyboard
   - OR right-click anywhere on the page → click "Inspect"

2. **Go to Storage Area:**
   - Click the **"Application"** tab (Chrome/Edge)
   - OR click **"Storage"** tab (Firefox)

3. **Find Local Storage:**
   - In the left sidebar, look for "Local Storage"
   - Click the ▶ arrow to expand it
   - Click on `http://localhost:5173`

4. **Delete the Data:**
   - You'll see a row with key: `birthdayReached`
   - Right-click on it
   - Click "Delete"

5. **Refresh the Page:**
   - Press `Ctrl + R` (or `Cmd + R` on Mac)
   - The countdown should appear again!

**Visual Guide:**
```
Developer Tools (F12)
    ↓
Application/Storage Tab
    ↓
Local Storage → http://localhost:5173
    ↓
Right-click "birthdayReached" → Delete
    ↓
Refresh page (Ctrl + R)
```
<img width="1919" height="868" alt="image" src="https://github.com/user-attachments/assets/f0e3e12d-0b69-4a15-a571-7577594e0b5d" />

**When to do this:**
- After clicking the test button and wanting to see the countdown again
- If the celebration page won't go back to countdown
- When testing multiple times during development

---

## ��� Deploy

**Before going live:** Delete test button from `Countdown.jsx` (lines 95-101)

### Vercel
1. Push to GitHub
2. [vercel.com](https://vercel.com) → Import → Deploy

### Netlify
1. `npm run build`
2. [netlify.com](https://netlify.com) → Drag `dist` folder

---

## ��� Issues?

- **Photos not showing?** Check names (`pic1.jpg`) and location (`public/images/`)
- **Music not playing?** Named `music.mp3` in `public/` folder, MP3 format only
- **Countdown stuck?** See "Clear Browser Storage" section above

---

**Made with ❤️**
