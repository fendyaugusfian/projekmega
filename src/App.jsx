import { useState, useEffect, useRef } from "react";

if (typeof window !== 'undefined') window.__sourceTSX = "import { useState, useEffect, useRef } from \"react\";\n\nconst defaultTasks = [\"Layout Furni & Mood Board\",\"Revisi\",\"3d Model & Render\",\"Revisi\",\"Gambar\",\"Revisi\",\"3d Animation\",\"Revisi\"];\nconst statusOptions = [\"Ongoing\",\"Completed\",\"Cancelled\",\"Incompleted\"];\nconst defaultJobTypeOptions = [\"3D Modelling\",\"3D Modelling + Gamker\",\"Gambar Kerja (AutoCAD)\",\"Gambar Kerja (LayOut)\",\"Interior Design\",\"Interior Design + Gamker\"];\nconst defaultDesignOptions = [\"Bar\",\"Office\",\"Residential\",\"Restaurant\",\"Store\"];\nconst platformOptions = [\"Upwork\",\"Fiverr\",\"Freelance\"];\nconst clientTypeOptions = [\"Owner\",\"Consultant\",\"Contractor\",\"Developer\"];\n\nconst STATUS_CFG = {\n  Ongoing:     { bg:\"#fff8ed\", text:\"#b45309\", dot:\"#f59e0b\" },\n  Completed:   { bg:\"#f0fdf4\", text:\"#166534\", dot:\"#22c55e\" },\n  Cancelled:   { bg:\"#fef2f2\", text:\"#991b1b\", dot:\"#ef4444\" },\n  Incompleted: { bg:\"#eff6ff\", text:\"#1d4ed8\", dot:\"#3b82f6\" },\n};\n\nconst seedData = [{\"id\":1700000001,\"projectName\":\"Apartemen Menteng Luxury\",\"address\":\"Singapore\",\"platform\":\"Upwork\",\"clientName\":\"James Whitfield\",\"clientType\":\"Owner\",\"area\":\"120\",\"priceRp\":\"18.000.000\",\"priceUSD\":\"1200\",\"style\":\"Modern\",\"hours\":\"80\",\"startDate\":\"2024-01-10\",\"endDate\":\"2024-03-15\",\"status\":\"Completed\",\"jobType\":\"Interior Design\",\"design\":\"Residential\",\"jobPerHour\":\"\",\"invitation\":true,\"team\":false,\"hourlyJob\":false,\"fee\":[],\"paymentStatus\":[{\"name\":\"DP 50%\",\"lunas\":true},{\"name\":\"Pelunasan\",\"lunas\":true}],\"payment\":[],\"notes\":\"Client minta revisi 2x.\",\"grossPrice\":\"20.000.000\",\"tasks\":[{\"id\":0,\"name\":\"Layout Furni & Mood Board\",\"done\":true,\"visible\":true,\"deadline\":\"2024-01-25\"},{\"id\":1,\"name\":\"Revisi\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":2,\"name\":\"3d Model & Render\",\"done\":true,\"visible\":true,\"deadline\":\"2024-02-20\"},{\"id\":3,\"name\":\"Revisi\",\"done\":true,\"visible\":false,\"deadline\":\"\"},{\"id\":4,\"name\":\"Gambar\",\"done\":true,\"visible\":true,\"deadline\":\"2024-03-10\"},{\"id\":5,\"name\":\"Revisi\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":6,\"name\":\"3d Animation\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":7,\"name\":\"Revisi\",\"done\":false,\"visible\":false,\"deadline\":\"\"}]},{\"id\":1700000002,\"projectName\":\"Villa Bali Tropic Retreat\",\"address\":\"Australia\",\"platform\":\"Upwork\",\"clientName\":\"Sarah Mitchell\",\"clientType\":\"Developer\",\"area\":\"250\",\"priceRp\":\"32.000.000\",\"priceUSD\":\"2100\",\"style\":\"Tropical Modern\",\"hours\":\"150\",\"startDate\":\"2024-02-05\",\"endDate\":\"2024-05-20\",\"status\":\"Completed\",\"jobType\":\"3D Modelling\",\"design\":\"Residential\",\"jobPerHour\":\"\",\"invitation\":false,\"team\":false,\"hourlyJob\":false,\"fee\":[],\"paymentStatus\":[{\"name\":\"DP 30%\",\"lunas\":true},{\"name\":\"Progress 40%\",\"lunas\":true},{\"name\":\"Pelunasan\",\"lunas\":true}],\"payment\":[],\"notes\":\"\",\"grossPrice\":\"35.000.000\",\"tasks\":[{\"id\":0,\"name\":\"Layout Furni & Mood Board\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":1,\"name\":\"Revisi\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":2,\"name\":\"3d Model & Render\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":3,\"name\":\"Revisi\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":4,\"name\":\"Gambar\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":5,\"name\":\"Revisi\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":6,\"name\":\"3d Animation\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":7,\"name\":\"Revisi\",\"done\":false,\"visible\":false,\"deadline\":\"\"}]},{\"id\":1700000003,\"projectName\":\"Kafe Botanic Garden BSD\",\"address\":\"Jakarta\",\"platform\":\"Freelance\",\"clientName\":\"Putri Handayani\",\"clientType\":\"Owner\",\"area\":\"85\",\"priceRp\":\"12.000.000\",\"priceUSD\":\"\",\"style\":\"Industrial Botanic\",\"hours\":\"60\",\"startDate\":\"2024-03-01\",\"endDate\":\"2024-04-30\",\"status\":\"Completed\",\"jobType\":\"Interior Design + Gamker\",\"design\":\"Restaurant\",\"jobPerHour\":\"\",\"invitation\":false,\"team\":false,\"hourlyJob\":false,\"fee\":[],\"paymentStatus\":[{\"name\":\"DP 50%\",\"lunas\":true},{\"name\":\"Pelunasan\",\"lunas\":true}],\"payment\":[],\"notes\":\"Konsep hijau dan kayu.\",\"grossPrice\":\"13.500.000\",\"tasks\":[{\"id\":0,\"name\":\"Layout Furni & Mood Board\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":1,\"name\":\"Revisi\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":2,\"name\":\"3d Model & Render\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":3,\"name\":\"Revisi\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":4,\"name\":\"Gambar\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":5,\"name\":\"Revisi\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":6,\"name\":\"3d Animation\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":7,\"name\":\"Revisi\",\"done\":false,\"visible\":false,\"deadline\":\"\"}]},{\"id\":1700000004,\"projectName\":\"Office Startup Tech Jaksel\",\"address\":\"Indonesia\",\"platform\":\"Fiverr\",\"clientName\":\"Ahmad Kurniawan\",\"clientType\":\"Contractor\",\"area\":\"200\",\"priceRp\":\"28.000.000\",\"priceUSD\":\"\",\"style\":\"Modern Minimalist\",\"hours\":\"120\",\"startDate\":\"2024-04-10\",\"endDate\":\"2024-07-15\",\"status\":\"Completed\",\"jobType\":\"Gambar Kerja (AutoCAD)\",\"design\":\"Office\",\"jobPerHour\":\"\",\"invitation\":false,\"team\":false,\"hourlyJob\":false,\"fee\":[],\"paymentStatus\":[{\"name\":\"DP 40%\",\"lunas\":true},{\"name\":\"Progress\",\"lunas\":true},{\"name\":\"Pelunasan\",\"lunas\":true}],\"payment\":[],\"notes\":\"\",\"grossPrice\":\"30.000.000\",\"tasks\":[{\"id\":0,\"name\":\"Layout Furni & Mood Board\",\"done\":true,\"visible\":false,\"deadline\":\"\"},{\"id\":1,\"name\":\"Revisi\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":2,\"name\":\"3d Model & Render\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":3,\"name\":\"Revisi\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":4,\"name\":\"Gambar\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":5,\"name\":\"Revisi\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":6,\"name\":\"3d Animation\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":7,\"name\":\"Revisi\",\"done\":false,\"visible\":false,\"deadline\":\"\"}]},{\"id\":1700000005,\"projectName\":\"Penthouse SCBD High-End\",\"address\":\"United Arab Emirates\",\"platform\":\"Upwork\",\"clientName\":\"Mohammed Al-Rashid\",\"clientType\":\"Owner\",\"area\":\"180\",\"priceRp\":\"45.000.000\",\"priceUSD\":\"3000\",\"style\":\"Contemporary Luxury\",\"hours\":\"200\",\"startDate\":\"2024-05-15\",\"endDate\":\"2024-09-30\",\"status\":\"Completed\",\"jobType\":\"Interior Design\",\"design\":\"Residential\",\"jobPerHour\":\"\",\"invitation\":true,\"team\":false,\"hourlyJob\":false,\"fee\":[],\"paymentStatus\":[{\"name\":\"DP 50%\",\"lunas\":true},{\"name\":\"Milestone 2\",\"lunas\":true},{\"name\":\"Pelunasan\",\"lunas\":true}],\"payment\":[],\"notes\":\"Full luxury materials.\",\"grossPrice\":\"50.000.000\",\"tasks\":[{\"id\":0,\"name\":\"Layout Furni & Mood Board\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":1,\"name\":\"Revisi\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":2,\"name\":\"3d Model & Render\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":3,\"name\":\"Revisi\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":4,\"name\":\"Gambar\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":5,\"name\":\"Revisi\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":6,\"name\":\"3d Animation\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":7,\"name\":\"Revisi\",\"done\":false,\"visible\":false,\"deadline\":\"\"}]},{\"id\":1700000006,\"projectName\":\"Resto Japanese Fusion Surabaya\",\"address\":\"Indonesia\",\"platform\":\"Freelance\",\"clientName\":\"Dewi Santoso\",\"clientType\":\"Owner\",\"area\":\"95\",\"priceRp\":\"14.000.000\",\"priceUSD\":\"\",\"style\":\"Japanese Wabi-sabi\",\"hours\":\"70\",\"startDate\":\"2024-07-01\",\"endDate\":\"2024-08-31\",\"status\":\"Completed\",\"jobType\":\"3D Modelling\",\"design\":\"Restaurant\",\"jobPerHour\":\"\",\"invitation\":false,\"team\":false,\"hourlyJob\":false,\"fee\":[],\"paymentStatus\":[{\"name\":\"DP 50%\",\"lunas\":true},{\"name\":\"Pelunasan\",\"lunas\":true}],\"payment\":[],\"notes\":\"\",\"grossPrice\":\"15.000.000\",\"tasks\":[{\"id\":0,\"name\":\"Layout Furni & Mood Board\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":1,\"name\":\"Revisi\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":2,\"name\":\"3d Model & Render\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":3,\"name\":\"Revisi\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":4,\"name\":\"Gambar\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":5,\"name\":\"Revisi\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":6,\"name\":\"3d Animation\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":7,\"name\":\"Revisi\",\"done\":false,\"visible\":false,\"deadline\":\"\"}]},{\"id\":1700000007,\"projectName\":\"Rumah Minimalis Bandung\",\"address\":\"United States\",\"platform\":\"Upwork\",\"clientName\":\"Kevin Anderson\",\"clientType\":\"Consultant\",\"area\":\"140\",\"priceRp\":\"22.000.000\",\"priceUSD\":\"1450\",\"style\":\"Scandinavian\",\"hours\":\"100\",\"startDate\":\"2024-08-05\",\"endDate\":\"2024-11-20\",\"status\":\"Completed\",\"jobType\":\"Interior Design\",\"design\":\"Residential\",\"jobPerHour\":\"\",\"invitation\":true,\"team\":false,\"hourlyJob\":false,\"fee\":[],\"paymentStatus\":[{\"name\":\"DP 50%\",\"lunas\":true},{\"name\":\"Pelunasan\",\"lunas\":false}],\"payment\":[],\"notes\":\"Ada pelunasan belum lunas.\",\"grossPrice\":\"24.000.000\",\"tasks\":[{\"id\":0,\"name\":\"Layout Furni & Mood Board\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":1,\"name\":\"Revisi\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":2,\"name\":\"3d Model & Render\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":3,\"name\":\"Revisi\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":4,\"name\":\"Gambar\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":5,\"name\":\"Revisi\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":6,\"name\":\"3d Animation\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":7,\"name\":\"Revisi\",\"done\":false,\"visible\":false,\"deadline\":\"\"}]},{\"id\":1700000008,\"projectName\":\"Showroom Mobil BSD City\",\"address\":\"Indonesia\",\"platform\":\"Freelance\",\"clientName\":\"PT Sentosa Mobilindo\",\"clientType\":\"Developer\",\"area\":\"300\",\"priceRp\":\"38.000.000\",\"priceUSD\":\"\",\"style\":\"Modern Commercial\",\"hours\":\"160\",\"startDate\":\"2024-09-10\",\"endDate\":\"2025-01-15\",\"status\":\"Completed\",\"jobType\":\"3D Modelling + Gamker\",\"design\":\"Store\",\"jobPerHour\":\"\",\"invitation\":false,\"team\":false,\"hourlyJob\":false,\"fee\":[],\"paymentStatus\":[{\"name\":\"DP 30%\",\"lunas\":true},{\"name\":\"Progress 40%\",\"lunas\":true},{\"name\":\"Pelunasan\",\"lunas\":true}],\"payment\":[],\"notes\":\"\",\"grossPrice\":\"42.000.000\",\"tasks\":[{\"id\":0,\"name\":\"Layout Furni & Mood Board\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":1,\"name\":\"Revisi\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":2,\"name\":\"3d Model & Render\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":3,\"name\":\"Revisi\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":4,\"name\":\"Gambar\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":5,\"name\":\"Revisi\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":6,\"name\":\"3d Animation\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":7,\"name\":\"Revisi\",\"done\":false,\"visible\":false,\"deadline\":\"\"}]},{\"id\":1700000009,\"projectName\":\"Bar & Lounge Seminyak\",\"address\":\"Australia\",\"platform\":\"Upwork\",\"clientName\":\"David Chen\",\"clientType\":\"Developer\",\"area\":\"110\",\"priceRp\":\"19.500.000\",\"priceUSD\":\"1300\",\"style\":\"Bohemian Tropical\",\"hours\":\"90\",\"startDate\":\"2025-01-20\",\"endDate\":\"\",\"status\":\"Ongoing\",\"jobType\":\"Interior Design\",\"design\":\"Bar\",\"jobPerHour\":\"\",\"invitation\":true,\"team\":false,\"hourlyJob\":false,\"fee\":[],\"paymentStatus\":[{\"name\":\"DP 50%\",\"lunas\":true},{\"name\":\"Pelunasan\",\"lunas\":false}],\"payment\":[],\"notes\":\"Masih progress render final.\",\"grossPrice\":\"22.000.000\",\"tasks\":[{\"id\":0,\"name\":\"Layout Furni & Mood Board\",\"done\":true,\"visible\":true,\"deadline\":\"2025-02-05\"},{\"id\":1,\"name\":\"Revisi\",\"done\":true,\"visible\":true,\"deadline\":\"\"},{\"id\":2,\"name\":\"3d Model & Render\",\"done\":false,\"visible\":true,\"deadline\":\"2025-04-01\"},{\"id\":3,\"name\":\"Revisi\",\"done\":false,\"visible\":true,\"deadline\":\"\"},{\"id\":4,\"name\":\"Gambar\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":5,\"name\":\"Revisi\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":6,\"name\":\"3d Animation\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":7,\"name\":\"Revisi\",\"done\":false,\"visible\":false,\"deadline\":\"\"}]},{\"id\":1700000010,\"projectName\":\"Klinik Estetik Menteng\",\"address\":\"Indonesia\",\"platform\":\"Freelance\",\"clientName\":\"dr. Nadia Permata\",\"clientType\":\"Owner\",\"area\":\"75\",\"priceRp\":\"10.500.000\",\"priceUSD\":\"\",\"style\":\"Clean Medical\",\"hours\":\"55\",\"startDate\":\"2025-02-10\",\"endDate\":\"\",\"status\":\"Ongoing\",\"jobType\":\"Interior Design + Gamker\",\"design\":\"Office\",\"jobPerHour\":\"\",\"invitation\":false,\"team\":false,\"hourlyJob\":false,\"fee\":[],\"paymentStatus\":[{\"name\":\"DP 50%\",\"lunas\":true},{\"name\":\"Pelunasan\",\"lunas\":false}],\"payment\":[],\"notes\":\"\",\"grossPrice\":\"12.000.000\",\"tasks\":[{\"id\":0,\"name\":\"Layout Furni & Mood Board\",\"done\":true,\"visible\":true,\"deadline\":\"2025-02-25\"},{\"id\":1,\"name\":\"Revisi\",\"done\":false,\"visible\":true,\"deadline\":\"\"},{\"id\":2,\"name\":\"3d Model & Render\",\"done\":false,\"visible\":true,\"deadline\":\"2025-03-15\"},{\"id\":3,\"name\":\"Revisi\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":4,\"name\":\"Gambar\",\"done\":false,\"visible\":true,\"deadline\":\"2025-04-10\"},{\"id\":5,\"name\":\"Revisi\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":6,\"name\":\"3d Animation\",\"done\":false,\"visible\":false,\"deadline\":\"\"},{\"id\":7,\"name\":\"Revisi\",\"done\":false,\"visible\":false,\"deadline\":\"\"}]}];\nconst seedExpenses = [{\"id\":2700000001,\"date\":\"2024-01-05\",\"desc\":\"Adobe Creative Cloud\",\"category\":\"Software\",\"amount\":\"660.000\",\"notes\":\"Annual plan\"},{\"id\":2700000002,\"date\":\"2024-02-10\",\"desc\":\"Sketchup Pro License\",\"category\":\"Software\",\"amount\":\"1.200.000\",\"notes\":\"\"},{\"id\":2700000003,\"date\":\"2024-03-15\",\"desc\":\"Mouse & Keyboard ergonomis\",\"category\":\"Tools\",\"amount\":\"850.000\",\"notes\":\"Logitech MX\"},{\"id\":2700000004,\"date\":\"2024-05-20\",\"desc\":\"Fee asisten render\",\"category\":\"Fee Tim\",\"amount\":\"2.000.000\",\"notes\":\"Proyek Villa Bali\"},{\"id\":2700000005,\"date\":\"2024-07-01\",\"desc\":\"V-Ray renderer license\",\"category\":\"Software\",\"amount\":\"1.500.000\",\"notes\":\"\"},{\"id\":2700000006,\"date\":\"2024-08-05\",\"desc\":\"Hard disk eksternal 4TB\",\"category\":\"Tools\",\"amount\":\"1.100.000\",\"notes\":\"Backup proyek\"},{\"id\":2700000007,\"date\":\"2024-09-20\",\"desc\":\"Fee asisten gambar\",\"category\":\"Fee Tim\",\"amount\":\"1.800.000\",\"notes\":\"Proyek Showroom BSD\"},{\"id\":2700000008,\"date\":\"2024-11-01\",\"desc\":\"Instagram Ads\",\"category\":\"Marketing\",\"amount\":\"500.000\",\"notes\":\"Boost portfolio\"},{\"id\":2700000009,\"date\":\"2025-01-10\",\"desc\":\"Upgrade RAM 32GB\",\"category\":\"Tools\",\"amount\":\"1.350.000\",\"notes\":\"\"},{\"id\":2700000010,\"date\":\"2025-02-05\",\"desc\":\"Domain & hosting portfolio\",\"category\":\"Infra\",\"amount\":\"300.000\",\"notes\":\"Renewal tahunan\"}];\nconst seedClientMeta = {};\nconst seedExpenseCats = null;\nconst seedAccent = \"\";\nconst seedTarget = null;\nconst seedAreaRanges = null;\nconst seedDurasiRanges = null;\n\nfunction emptyProject() {\n  return { id:Date.now(), projectName:\"\", address:\"\", platform:\"Upwork\", clientName:\"\", clientType:\"Owner\", area:\"\", priceRp:\"\", priceUSD:\"\", style:\"\", hours:\"\", startDate:\"\", endDate:\"\", status:\"Ongoing\", jobType:\"3D Modelling\", design:\"Residential\", jobPerHour:\"\", invitation:false, team:false, hourlyJob:false, fee:[], paymentStatus:[], payment:[], notes:\"\", grossPrice:\"\", tasks:defaultTasks.map((t,i)=>({id:i,name:t,done:false,visible:false,deadline:\"\"})) };\n}\n\nfunction formatRp(val) {\n  if (!val) return \"\";\n  return val.toString().replace(/\\D/g,\"\").replace(/\\B(?=(\\d{3})+(?!\\d))/g,\".\");\n}\n\nfunction normalizeFeeArr(arr) {\n  if (!Array.isArray(arr)) return [];\n  return arr.map(f => typeof f===\"object\" ? f : {name:f,lunas:false});\n}\n\nfunction parseNominal(str) {\n  // Normalize: remove spaces, lowercase\n  let s = str.replace(/\\s/g,\"\").toLowerCase();\n  // Strip \"rp\" prefix if any\n  s = s.replace(/^rp\\\\.?/,\"\");\n  // Handle multipliers: jt/juta, rb/ribu, m/miliar\n  let mul = 1;\n  if (/jt$|juta$/.test(s)) { mul=1000000; s=s.replace(/jt$|juta$/,\"\"); }\n  else if (/rb$|ribu$/.test(s)) { mul=1000; s=s.replace(/rb$|ribu$/,\"\"); }\n  else if (/m$|miliar$/.test(s)) { mul=1000000000; s=s.replace(/m$|miliar$/,\"\"); }\n  // Remove thousand separators (dots used as separator)\n  s = s.replace(/\\./g,\"\").replace(/,/g,\".\");\n  const num = parseFloat(s);\n  if (isNaN(num)) return null;\n  return Math.round(num * mul);\n}\n\nfunction formatNominal(n) {\n  return n.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g,\".\");\n}\n\nfunction projectNum(proj, allProjects) {\n  const year = (proj.startDate||\"\").slice(0,4);\n  if (!year) return String(proj.id);\n  const yy = year.slice(2);\n  const sameYear = [...allProjects]\n    .filter(p=>(p.startDate||\"\").startsWith(year))\n    .sort((a,b)=>(a.startDate||\"\").localeCompare(b.startDate||\"\")||a.id-b.id);\n  const idx = sameYear.findIndex(p=>p.id===proj.id);\n  return `${yy}.${idx+1}`;\n}\n\nasync function formatFeeWithAI(input) {\n  // Parse \"Nama [Rp] nominal[unit]\" locally\n  // Strategy: last token that looks like a number is the nominal, rest is name\n  const parts = input.trim().split(/\\s+/);\n  for (let i = parts.length - 1; i >= 1; i--) {\n    const nominalStr = parts.slice(i).join(\" \");\n    const n = parseNominal(nominalStr);\n    if (n !== null) {\n      const name = parts.slice(0, i).join(\" \");\n      return `${name} Rp ${formatNominal(n)}`;\n    }\n  }\n  return input;\n}\n\nasync function formatRpWithAI(input) {\n  const n = parseNominal(input.trim());\n  if (n !== null) return formatNominal(n);\n  return input;\n}\n\nconst dropStyle = {border:\"0.5px solid var(--color-border-secondary)\",borderRadius:6,padding:\"6px 10px\",fontSize:13,cursor:\"pointer\",display:\"flex\",justifyContent:\"space-between\",alignItems:\"center\",background:\"var(--color-background-primary)\"};\nconst menuBox = {position:\"absolute\",top:\"100%\",left:0,right:0,zIndex:999,background:\"#fff\",border:\"1px solid #ddd\",borderRadius:8,marginTop:4,boxShadow:\"0 4px 20px rgba(0,0,0,0.15)\",overflow:\"hidden\"};\n\nfunction useOutsideClose(open, cb) {\n  const ref = useRef(null);\n  useEffect(()=>{\n    if (!open) return;\n    const h = e => { if(ref.current&&!ref.current.contains(e.target)) cb(); };\n    document.addEventListener(\"mousedown\",h);\n    return ()=>document.removeEventListener(\"mousedown\",h);\n  },[open]);\n  return ref;\n}\n\nfunction StatusBadge({status}) {\n  const c = STATUS_CFG[status]||STATUS_CFG[\"Ongoing\"];\n  return <span style={{display:\"inline-flex\",alignItems:\"center\",gap:5,background:c.bg,color:c.text,borderRadius:20,padding:\"3px 10px\",fontSize:11,fontWeight:500}}><span style={{width:6,height:6,borderRadius:\"50%\",background:c.dot,display:\"inline-block\"}}/>{status}</span>;\n}\n\nfunction PlatformIcon({platform,size=14}) {\n  if (platform===\"Upwork\") return <svg width={size} height={size} viewBox=\"0 0 24 24\" fill=\"#14a800\"><path d=\"M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703 0 1.489-1.211 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z\"/></svg>;\n  if (platform===\"Fiverr\") return <img src=\"data:image/png;base64,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\" width={size} height={size} style={{objectFit:\"contain\",display:\"inline-block\"}} alt=\"Fiverr\"/>;\n  return <svg width={size} height={size} viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#ff6b35\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\"/><path d=\"M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2\"/></svg>;\n}\n\nfunction PlatformBadge({platform}) {\n  return <span style={{background:\"var(--color-background-secondary)\",borderRadius:6,padding:\"3px 6px\",display:\"inline-flex\",alignItems:\"center\"}}><PlatformIcon platform={platform} size={13}/></span>;\n}\n\nfunction Chip({label,value}) {\n  if (!value) return null;\n  return <div style={{display:\"flex\",flexDirection:\"column\",gap:2}}><span style={{fontSize:10,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",letterSpacing:\"0.05em\",fontWeight:500}}>{label}</span><span style={{fontSize:13,color:\"var(--color-text-primary)\"}}>{value}</span></div>;\n}\n\nfunction Divider() { return <div style={{height:\"0.5px\",background:\"var(--color-border-tertiary)\",margin:\"12px 0\"}}/>; }\n\nfunction CheckBox({done}) {\n  return <span style={{display:\"inline-flex\",alignItems:\"center\",justifyContent:\"center\",width:16,height:16,border:`1.5px solid ${done?\"#22c55e\":\"var(--color-border-secondary)\"}`,borderRadius:4,background:done?\"#22c55e\":\"transparent\",flexShrink:0}}>{done&&<svg viewBox=\"0 0 12 12\" width=\"9\" height=\"9\"><polyline points=\"1.5,6 4.5,9 10.5,3\" stroke=\"white\" strokeWidth=\"2\" fill=\"none\" strokeLinecap=\"round\" strokeLinejoin=\"round\"/></svg>}</span>;\n}\n\nfunction ConfirmModal({message,onConfirm,onCancel}) {\n  return <div style={{position:\"fixed\",inset:0,background:\"rgba(0,0,0,0.35)\",zIndex:9999,display:\"flex\",alignItems:\"center\",justifyContent:\"center\"}} onClick={onCancel}><div onClick={e=>e.stopPropagation()} style={{background:\"#fff\",borderRadius:14,padding:\"24px 28px\",minWidth:280,maxWidth:360,boxShadow:\"0 8px 32px rgba(0,0,0,0.18)\"}}><div style={{fontWeight:500,fontSize:15,marginBottom:8,color:\"var(--color-text-primary)\"}}>Konfirmasi</div><div style={{fontSize:13,color:\"var(--color-text-secondary)\",marginBottom:20}}>{message}</div><div style={{display:\"flex\",gap:8,justifyContent:\"flex-end\"}}><button onClick={onCancel} style={{fontSize:13,padding:\"6px 16px\"}}>Batal</button><button onClick={onConfirm} style={{fontSize:13,padding:\"6px 16px\",background:\"#fef2f2\",color:\"#991b1b\",borderColor:\"#fca5a5\",borderRadius:6}}>Hapus</button></div></div></div>;\n}\n\nfunction Field({label,children}) {\n  return <div style={{marginBottom:10}}><label style={{fontSize:12,color:\"var(--color-text-secondary)\",display:\"block\",marginBottom:3}}>{label}</label>{children}</div>;\n}\n\nfunction RpInput({label,value,onChange}) {\n  const [loading,setLoading] = useState(false);\n  const inp = {width:\"100%\",boxSizing:\"border-box\"};\n  const handle = async()=>{\n    if (!value.trim()) return;\n    const clean = value.replace(/\\./g,\"\");\n    if (/^\\d+$/.test(clean)) { onChange(formatRp(clean)); return; }\n    setLoading(true); const f=await formatRpWithAI(value.trim()); setLoading(false); onChange(f);\n  };\n  return <Field label={loading?`${label} (memformat...)`:label}><input style={{...inp,opacity:loading?0.6:1}} value={value} onChange={e=>onChange(e.target.value)} onBlur={handle} onKeyDown={e=>{if(e.key===\"Enter\"){e.preventDefault();handle();}}} placeholder=\"Contoh: 5jt, 2.5jt, 500rb\"/></Field>;\n}\n\nfunction EditPencil({onClick}) {\n  return <button onClick={onClick} style={{padding:\"4px 6px\",border:\"none\",background:\"transparent\",cursor:\"pointer\",color:\"#888\"}}><svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"/><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"/></svg></button>;\n}\n\nfunction DeleteX({onClick}) {\n  return <button onClick={onClick} style={{padding:\"4px 6px\",border:\"none\",background:\"transparent\",cursor:\"pointer\",color:\"#f87171\"}}><svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"/><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"/></svg></button>;\n}\n\nfunction InlineEdit({name,onRename,onClose}) {\n  const [val,setVal] = useState(name);\n  const commit = ()=>{ if(val.trim()) onRename(val.trim()); onClose(); };\n  return <div onClick={e=>e.stopPropagation()} style={{display:\"flex\",alignItems:\"center\",gap:4}}><input autoFocus value={val} onChange={e=>setVal(e.target.value)} onKeyDown={e=>{if(e.key===\"Enter\")commit();if(e.key===\"Escape\")onClose();}} style={{width:80,fontSize:12,border:\"1px solid #93c5fd\",borderRadius:4,padding:\"2px 4px\",outline:\"none\"}}/><button onClick={commit} style={{fontSize:10,padding:\"2px 6px\",color:\"#1d4ed8\",border:\"1px solid #93c5fd\",borderRadius:4,background:\"#eff6ff\"}}>OK</button></div>;\n}\n\nfunction EditableOption({label,selected,onSelect,onDelete,onRename}) {\n  const [editing,setEditing] = useState(false);\n  const [val,setVal] = useState(label);\n  const commit = ()=>{ if(val.trim()) onRename(val.trim()); setEditing(false); };\n  if (editing) return <div style={{display:\"flex\",alignItems:\"center\",gap:6,padding:\"4px 8px\",background:\"#f0f7ff\"}}><input autoFocus value={val} onChange={e=>setVal(e.target.value)} onKeyDown={e=>{if(e.key===\"Enter\")commit();if(e.key===\"Escape\")setEditing(false);}} style={{flex:1,fontSize:13,border:\"1px solid #93c5fd\",borderRadius:4,padding:\"3px 6px\",outline:\"none\"}}/><button onClick={commit} style={{fontSize:11,padding:\"2px 8px\",color:\"#1d4ed8\",border:\"1px solid #93c5fd\",borderRadius:4,background:\"#eff6ff\"}}>OK</button><button onClick={()=>setEditing(false)} style={{fontSize:11,padding:\"2px 6px\",color:\"#888\",border:\"none\",background:\"transparent\"}}>✕</button></div>;\n  return <div style={{display:\"flex\",alignItems:\"center\",padding:\"0 4px 0 12px\",background:selected?\"#eff6ff\":\"#fff\"}} onMouseEnter={e=>{if(!selected)e.currentTarget.style.background=\"#f5f5f5\";}} onMouseLeave={e=>{if(!selected)e.currentTarget.style.background=selected?\"#eff6ff\":\"#fff\";}}><span onClick={onSelect} style={{flex:1,fontSize:13,color:selected?\"#1d4ed8\":\"#222\",padding:\"7px 0\",cursor:\"pointer\"}}>{label}</span><EditPencil onClick={e=>{e.stopPropagation();setEditing(true);setVal(label);}}/><DeleteX onClick={e=>{e.stopPropagation();onDelete();}}/></div>;\n}\n\nfunction CustomSelect({id,value,onChange,options,openId,setOpenId}) {\n  const open = openId===id;\n  const ref = useOutsideClose(open,()=>setOpenId(null));\n  return <div ref={ref} style={{position:\"relative\"}}><div onClick={()=>setOpenId(open?null:id)} style={dropStyle}><span>{value}</span><span style={{fontSize:10,color:\"var(--color-text-secondary)\"}}>▾</span></div>{open&&<div style={menuBox}>{options.map(o=><div key={o} onClick={()=>{onChange(o);setOpenId(null);}} style={{padding:\"7px 12px\",fontSize:13,cursor:\"pointer\",background:value===o?\"#eff6ff\":\"#fff\",color:value===o?\"#1d4ed8\":\"#222\"}} onMouseEnter={e=>{if(value!==o)e.currentTarget.style.background=\"#f5f5f5\";}} onMouseLeave={e=>{if(value!==o)e.currentTarget.style.background=\"#fff\";}}>{o}</div>)}</div>}</div>;\n}\n\nfunction SearchableSelect({id,value,onChange,openId,setOpenId,storageKey,defaultOptions,placeholder}) {\n  const [options,setOptions] = useState(()=>{try{const s=window[storageKey];return s?JSON.parse(s):[...defaultOptions];}catch(e){return [...defaultOptions];}});\n  const [search,setSearch] = useState(\"\");\n  const open = openId===id;\n  const ref = useOutsideClose(open,()=>setOpenId(null));\n  useEffect(()=>{window[storageKey]=JSON.stringify(options);},[options]);\n  const filtered = [...options].sort((a,b)=>a.localeCompare(b)).filter(o=>o.toLowerCase().includes(search.toLowerCase()));\n  const canAdd = search.trim()!==\"\"&&!options.some(o=>o.toLowerCase()===search.trim().toLowerCase());\n  const select = val=>{onChange(val);setOpenId(null);setSearch(\"\");};\n  const addNew = ()=>{const v=search.trim();setOptions(prev=>[...prev,v]);select(v);};\n  return <div ref={ref} style={{position:\"relative\"}}><div onClick={()=>setOpenId(open?null:id)} style={dropStyle}><span style={{color:value?\"inherit\":\"#aaa\"}}>{value||placeholder}</span><span style={{fontSize:10,color:\"var(--color-text-secondary)\"}}>▾</span></div>{open&&<div style={menuBox}><div style={{padding:\"6px 8px\",borderBottom:\"1px solid #eee\",background:\"#fff\"}}><input autoFocus value={search} onChange={e=>setSearch(e.target.value)} placeholder=\"Cari atau tambah baru...\" style={{width:\"100%\",boxSizing:\"border-box\",fontSize:12,border:\"none\",outline:\"none\",background:\"transparent\",color:\"#222\"}}/></div><div style={{maxHeight:180,overflowY:\"auto\"}}>{filtered.map(o=><EditableOption key={o} label={o} selected={value===o} onSelect={()=>select(o)} onDelete={()=>{setOptions(prev=>prev.filter(x=>x!==o));if(value===o)onChange(\"\");}} onRename={n=>{setOptions(prev=>prev.map(x=>x===o?n:x));if(value===o)onChange(n);}}/>)}{canAdd&&<div onClick={addNew} style={{padding:\"7px 12px\",fontSize:13,cursor:\"pointer\",color:\"#1d4ed8\",borderTop:\"1px solid #eee\",display:\"flex\",alignItems:\"center\",gap:6}}><span style={{fontSize:16}}>+</span> Tambah \"{search.trim()}\"</div>}{filtered.length===0&&!canAdd&&<div style={{padding:\"10px 12px\",fontSize:12,color:\"#888\"}}>Tidak ditemukan</div>}</div></div>}</div>;\n}\n\nfunction FeeAddInput({onAdd}) {\n  const [val,setVal] = useState(\"\"); const [loading,setLoading] = useState(false); const [status,setStatus] = useState(\"\");\n  const handle = async()=>{if(!val.trim())return;setLoading(true);setStatus(\"Memformat...\");const f=await formatFeeWithAI(val.trim());setStatus(\"\");setLoading(false);onAdd(f);setVal(\"\");};\n  return <div style={{borderTop:\"1px solid #eee\",background:\"#fff\"}}><div style={{display:\"flex\",gap:6,padding:\"6px 8px\"}}><input value={val} onChange={e=>setVal(e.target.value)} onKeyDown={e=>{if(e.key===\"Enter\")handle();}} placeholder=\"Contoh: Anne 5jt\" style={{flex:1,fontSize:12,border:\"1px solid #ddd\",borderRadius:4,padding:\"4px 8px\",outline:\"none\"}}/><button onClick={handle} disabled={loading} style={{fontSize:12,padding:\"4px 10px\",color:\"#1d4ed8\",border:\"1px solid #93c5fd\",borderRadius:4,background:\"#eff6ff\",whiteSpace:\"nowrap\",cursor:\"pointer\",opacity:loading?0.6:1}}>{loading?\"...\":\"+ Tambah\"}</button></div>{status&&<div style={{fontSize:11,color:\"#888\",padding:\"0 8px 6px\"}}>{status}</div>}</div>;\n}\n\nfunction FeeSelect({id,value,onChange,openId,setOpenId}) {\n  const items = normalizeFeeArr(value);\n  const selectedNames = items.map(f=>f.name);\n  const options = items.map(f=>f.name);\n  const open = openId===id;\n  const ref = useOutsideClose(open,()=>setOpenId(null));\n  const [editingName, setEditingName] = useState(null);\n  const toggleLunas = name=>onChange(items.map(f=>f.name===name?{...f,lunas:!f.lunas}:f));\n  const addNew = fmt=>{if(!selectedNames.includes(fmt))onChange([...items,{name:fmt,lunas:false}]);};\n  const removeOption = name=>{onChange(items.filter(f=>f.name!==name));};\n  const renameOption = (oldName,newName)=>{onChange(items.map(f=>f.name===oldName?{...f,name:newName}:f));};\n  return <div ref={ref} style={{position:\"relative\"}}><div onClick={()=>setOpenId(open?null:id)} style={{...dropStyle,flexWrap:\"wrap\",gap:4,minHeight:36}}>{items.length===0?<span style={{color:\"#aaa\",fontSize:13}}>Pilih fee...</span>:items.map(f=><span key={f.name} style={{background:f.lunas?\"#f0fdf4\":\"#eff6ff\",color:f.lunas?\"#166534\":\"#1d4ed8\",borderRadius:12,padding:\"2px 8px\",fontSize:12,display:\"inline-flex\",alignItems:\"center\",gap:4,textDecoration:f.lunas?\"line-through\":\"none\"}}>{f.name}<span onClick={e=>{e.stopPropagation();removeOption(f.name);}} style={{cursor:\"pointer\",fontSize:14,lineHeight:1}}>×</span></span>)}<span style={{marginLeft:\"auto\",fontSize:10,color:\"var(--color-text-secondary)\",flexShrink:0}}>▾</span></div>{open&&<div style={menuBox}><div style={{maxHeight:180,overflowY:\"auto\"}}>{options.length===0&&<div style={{padding:\"10px 12px\",fontSize:12,color:\"#888\"}}>Belum ada fee. Tambah lewat form di bawah.</div>}{options.map(o=>{const isLunas=items.find(f=>f.name===o)?.lunas||false;return <div key={o} style={{display:\"flex\",alignItems:\"center\",padding:\"0 8px 0 12px\",background:\"#fff\"}} onMouseEnter={e=>e.currentTarget.style.background=\"#f5f5f5\"} onMouseLeave={e=>e.currentTarget.style.background=\"#fff\"}>{editingName===o?<InlineEdit name={o} onRename={n=>renameOption(o,n)} onClose={()=>setEditingName(null)}/>:<><span style={{flex:1,fontSize:13,color:\"#222\",padding:\"7px 0\"}}>{o}</span><div onClick={e=>e.stopPropagation()} style={{display:\"flex\",alignItems:\"center\",gap:4,marginRight:4}}><input type=\"checkbox\" id={`lunas-${o}`} checked={isLunas} onChange={()=>toggleLunas(o)} style={{cursor:\"pointer\"}}/><label htmlFor={`lunas-${o}`} style={{fontSize:11,color:\"#166534\",cursor:\"pointer\",whiteSpace:\"nowrap\"}}>Lunas</label></div><EditPencil onClick={e=>{e.stopPropagation();setEditingName(o);}}/><DeleteX onClick={e=>{e.stopPropagation();removeOption(o);}}/></>}</div>;})}</div><FeeAddInput onAdd={addNew}/></div>}</div>;\n}\n\nfunction MilestoneSelect({id,value,onChange,openId,setOpenId,storageKey}) {\n  const items = normalizeFeeArr(value);\n  const selectedNames = items.map(f=>f.name);\n  const [options,setOptions] = useState(()=>{try{const s=window[storageKey];return s?JSON.parse(s):[\"Milestone 1\",\"Milestone 2\",\"Milestone 3\"];}catch(e){return [\"Milestone 1\",\"Milestone 2\",\"Milestone 3\"];}});\n  const [editingName,setEditingName] = useState(null);\n  const open = openId===id;\n  const ref = useOutsideClose(open,()=>setOpenId(null));\n  useEffect(()=>{window[storageKey]=JSON.stringify(options);},[options]);\n  const toggleItem = name=>{if(selectedNames.includes(name))onChange(items.filter(f=>f.name!==name));else onChange([...items,{name,lunas:false}]);};\n  const toggleLunas = name=>onChange(items.map(f=>f.name===name?{...f,lunas:!f.lunas}:f));\n  const addNext = ()=>{const next=`Milestone ${options.length+1}`;setOptions(prev=>[...prev,next]);};\n  const removeOption = name=>{setOptions(prev=>prev.filter(x=>x!==name));onChange(items.filter(f=>f.name!==name));};\n  const renameOption = (old,nw)=>{setOptions(prev=>prev.map(x=>x===old?nw:x));onChange(items.map(f=>f.name===old?{...f,name:nw}:f));};\n  return <div ref={ref} style={{position:\"relative\"}}><div onClick={()=>setOpenId(open?null:id)} style={{...dropStyle,flexWrap:\"wrap\",gap:4,minHeight:36}}>{items.length===0?<span style={{color:\"#aaa\",fontSize:13}}>Pilih milestone...</span>:items.map(f=><span key={f.name} style={{background:f.lunas?\"#f0fdf4\":\"#eff6ff\",color:f.lunas?\"#166534\":\"#1d4ed8\",borderRadius:12,padding:\"2px 8px\",fontSize:12,display:\"inline-flex\",alignItems:\"center\",gap:4,textDecoration:f.lunas?\"line-through\":\"none\"}}>{f.name}<span onClick={e=>{e.stopPropagation();toggleItem(f.name);}} style={{cursor:\"pointer\",fontSize:14,lineHeight:1}}>×</span></span>)}<span style={{marginLeft:\"auto\",fontSize:10,color:\"var(--color-text-secondary)\",flexShrink:0}}>▾</span></div>{open&&<div style={menuBox}><div style={{maxHeight:200,overflowY:\"auto\"}}>{options.map(o=>{const checked=selectedNames.includes(o);const isLunas=items.find(f=>f.name===o)?.lunas||false;return <div key={o} style={{display:\"flex\",alignItems:\"center\",padding:\"0 8px 0 12px\",background:checked?\"#eff6ff\":\"#fff\"}} onMouseEnter={e=>{if(!checked)e.currentTarget.style.background=\"#f5f5f5\";}} onMouseLeave={e=>{if(!checked)e.currentTarget.style.background=\"#fff\";}}>{editingName===o?<InlineEdit name={o} onRename={n=>renameOption(o,n)} onClose={()=>setEditingName(null)}/>:<><span onClick={()=>toggleItem(o)} style={{flex:1,fontSize:13,color:checked?\"#1d4ed8\":\"#222\",padding:\"7px 0\",cursor:\"pointer\",display:\"flex\",alignItems:\"center\",gap:8}}><span style={{display:\"inline-flex\",alignItems:\"center\",justifyContent:\"center\",width:15,height:15,border:`1.5px solid ${checked?\"#1d4ed8\":\"#ccc\"}`,borderRadius:3,background:checked?\"#1d4ed8\":\"#fff\",flexShrink:0}}>{checked&&<svg viewBox=\"0 0 12 12\" width=\"9\" height=\"9\"><polyline points=\"1.5,6 4.5,9 10.5,3\" stroke=\"white\" strokeWidth=\"2\" fill=\"none\" strokeLinecap=\"round\" strokeLinejoin=\"round\"/></svg>}</span>{o}</span>{checked&&<div onClick={e=>e.stopPropagation()} style={{display:\"flex\",alignItems:\"center\",gap:4,marginRight:4}}><input type=\"checkbox\" id={`ms-${id}-${o}`} checked={isLunas} onChange={()=>toggleLunas(o)} style={{cursor:\"pointer\"}}/><label htmlFor={`ms-${id}-${o}`} style={{fontSize:11,color:\"#166534\",cursor:\"pointer\",whiteSpace:\"nowrap\"}}>Lunas</label></div>}<EditPencil onClick={e=>{e.stopPropagation();setEditingName(o);}}/><DeleteX onClick={e=>{e.stopPropagation();removeOption(o);}}/></>}</div>;})}</div><div style={{borderTop:\"1px solid #eee\",padding:\"6px 8px\"}}><button onClick={addNext} style={{fontSize:12,padding:\"4px 12px\",color:\"#1d4ed8\",border:\"1px solid #93c5fd\",borderRadius:6,background:\"#eff6ff\",cursor:\"pointer\",width:\"100%\"}}>+ Tambah Milestone {options.length+1}</button></div></div>}</div>;\n}\n\nfunction AnalysisTable({columns,rows}) {\n  const maxVal = Math.max(...rows.map(r=>r.count),0);\n  return <div style={{border:\"0.5px solid var(--color-border-tertiary)\",borderRadius:12,overflow:\"hidden\",marginBottom:16}}><table style={{width:\"100%\",borderCollapse:\"collapse\"}}><thead><tr style={{background:\"var(--color-background-secondary)\"}}>{columns.map((c,i)=><th key={i} style={{padding:\"10px 16px\",fontSize:11,fontWeight:500,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",letterSpacing:\"0.05em\",textAlign:i===0?\"left\":\"center\",borderBottom:\"0.5px solid var(--color-border-tertiary)\"}}>{c}</th>)}<th style={{padding:\"10px 16px\",borderBottom:\"0.5px solid var(--color-border-tertiary)\",width:60}}></th></tr></thead><tbody>{rows.map((row,i)=>{const isTop=row.count>0&&row.count===maxVal;return <tr key={i} style={{borderBottom:\"0.5px solid var(--color-border-tertiary)\",background:isTop?\"#f0fdf4\":\"transparent\"}} onMouseEnter={e=>{if(!isTop)e.currentTarget.style.background=\"var(--color-background-secondary)\";}} onMouseLeave={e=>{e.currentTarget.style.background=isTop?\"#f0fdf4\":\"transparent\";}}><td style={{padding:\"10px 16px\",fontSize:13,color:isTop?\"#166534\":\"var(--color-text-primary)\",fontWeight:isTop?500:400}}>{row.label}</td><td style={{padding:\"10px 16px\",fontSize:13,color:isTop?\"#166534\":\"var(--color-text-primary)\",textAlign:\"center\",fontWeight:isTop?500:400}}>{row.count}{isTop&&<span style={{marginLeft:6,fontSize:10,background:\"#22c55e\",color:\"#fff\",borderRadius:10,padding:\"1px 7px\"}}>terbanyak</span>}</td><td style={{padding:\"10px 16px\",textAlign:\"center\"}}><button onClick={row.onDelete} style={{fontSize:11,padding:\"2px 8px\",color:\"var(--color-text-danger)\",borderColor:\"var(--color-border-danger)\",borderRadius:6}}>Hapus</button></td></tr>;})}</tbody></table></div>;\n}\n\nconst DEFAULT_AREA_RANGES = [[1,50],[51,100],[101,150],[151,200],[201,250],[251,300]];\nconst DEFAULT_DURASI_RANGES = [[0,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12]];\n\nfunction loadAreaRanges() { try { const s=window._areaRanges; if(s)return JSON.parse(s); } catch(e){} return seedAreaRanges ? [...seedAreaRanges] : [...DEFAULT_AREA_RANGES]; }\nfunction saveAreaRanges(r) { window._areaRanges=JSON.stringify(r); }\nfunction loadDurasiRanges() { try { const s=window._durasiRanges; if(s)return JSON.parse(s); } catch(e){} return seedDurasiRanges ? [...seedDurasiRanges] : [...DEFAULT_DURASI_RANGES]; }\nfunction saveDurasiRanges(r) { window._durasiRanges=JSON.stringify(r); }\n\nfunction AreaTab({projects}) {\n  const [ranges,setRanges] = useState(loadAreaRanges);\n  const [adding,setAdding] = useState(false);\n  const [newMin,setNewMin] = useState(\"\"); const [newMax,setNewMax] = useState(\"\");\n  const updateRanges = r => { setRanges(r); saveAreaRanges(r); };\n  const getCount=(mn,mx)=>projects.filter(p=>{const a=parseFloat((p.area||\"\").replace(/[^0-9.]/g,\"\"));return !isNaN(a)&&a>=mn&&a<=mx;}).length;\n  const addRange=()=>{const mn=parseInt(newMin),mx=parseInt(newMax);if(!isNaN(mn)&&!isNaN(mx)&&mn<mx){updateRanges([...ranges,[mn,mx]].sort((a,b)=>a[0]-b[0]));setNewMin(\"\");setNewMax(\"\");setAdding(false);}};\n  return <div><AnalysisTable columns={[\"Area (m²)\",\"Total Proyek\"]} rows={ranges.map(([mn,mx],i)=>({label:`${mn} – ${mx}`,count:getCount(mn,mx),onDelete:()=>updateRanges(ranges.filter((_,j)=>j!==i))}))} />{adding?<div style={{display:\"flex\",alignItems:\"center\",gap:8,flexWrap:\"wrap\"}}><span style={{fontSize:13,color:\"var(--color-text-secondary)\"}}>Min</span><input value={newMin} onChange={e=>setNewMin(e.target.value)} placeholder=\"301\" style={{width:80,fontSize:13,padding:\"5px 8px\",border:\"0.5px solid var(--color-border-secondary)\",borderRadius:6}}/><span style={{fontSize:13,color:\"var(--color-text-secondary)\"}}>– Max</span><input value={newMax} onChange={e=>setNewMax(e.target.value)} placeholder=\"350\" style={{width:80,fontSize:13,padding:\"5px 8px\",border:\"0.5px solid var(--color-border-secondary)\",borderRadius:6}} onKeyDown={e=>{if(e.key===\"Enter\")addRange();}}/><button onClick={addRange} style={{fontSize:13,padding:\"5px 14px\",background:\"#111\",color:\"#fff\",borderColor:\"#111\",borderRadius:6}}>Tambah</button><button onClick={()=>{setAdding(false);setNewMin(\"\");setNewMax(\"\");}} style={{fontSize:13,padding:\"5px 14px\",borderRadius:6}}>Batal</button></div>:<button onClick={()=>setAdding(true)} style={{fontSize:13,padding:\"6px 16px\"}}>+ Tambah Range Area</button>}</div>;\n}\n\nfunction DurasiTab({projects}) {\n  const [ranges,setRanges] = useState(loadDurasiRanges);\n  const [adding,setAdding] = useState(false); const [newMax,setNewMax] = useState(\"\");\n  const updateRanges = r => { setRanges(r); saveDurasiRanges(r); };\n  const getDays=p=>{if(!p.startDate||!p.endDate)return null;const d=(new Date(p.endDate)-new Date(p.startDate))/(1000*60*60*24);return isNaN(d)?null:Math.round(d);};\n  const getCount=(mnM,mxM)=>projects.filter(p=>{const d=getDays(p);if(d===null)return false;const months=Math.round(d/30);return months>=mnM&&months<=mxM;}).length;\n  const label=([mnM,mxM])=>mnM===0?`≤ ${mxM} bulan`:mnM===mxM?`${mnM} bulan`:`${mnM} – ${mxM} bulan`;\n  const addRange=()=>{const mx=parseInt(newMax);if(!isNaN(mx)&&mx>0){const last=ranges.length>0?ranges[ranges.length-1][1]:0;updateRanges([...ranges,[last+1,mx]]);setNewMax(\"\");setAdding(false);}};\n  return <div><AnalysisTable columns={[\"Durasi\",\"Total Proyek\"]} rows={ranges.map((r,i)=>({label:label(r),count:getCount(r[0],r[1]),onDelete:()=>updateRanges(ranges.filter((_,j)=>j!==i))}))} />{adding?<div style={{display:\"flex\",alignItems:\"center\",gap:8,flexWrap:\"wrap\"}}><span style={{fontSize:13,color:\"var(--color-text-secondary)\"}}>Maks (bulan)</span><input value={newMax} onChange={e=>setNewMax(e.target.value)} placeholder=\"12\" style={{width:90,fontSize:13,padding:\"5px 8px\",border:\"0.5px solid var(--color-border-secondary)\",borderRadius:6}} onKeyDown={e=>{if(e.key===\"Enter\")addRange();}}/><button onClick={addRange} style={{fontSize:13,padding:\"5px 14px\",background:\"#111\",color:\"#fff\",borderColor:\"#111\",borderRadius:6}}>Tambah</button><button onClick={()=>{setAdding(false);setNewMax(\"\");}} style={{fontSize:13,padding:\"5px 14px\",borderRadius:6}}>Batal</button></div>:<button onClick={()=>setAdding(true)} style={{fontSize:13,padding:\"6px 16px\"}}>+ Tambah Range Durasi</button>}</div>;\n}\nfunction JumlahTab({projects}) {\n  const upworkProjects = projects.filter(p=>p.platform===\"Upwork\");\n  const totalUpwork = upworkProjects.length;\n  const totalInvitation = upworkProjects.filter(p=>p.invitation).length;\n  const totalNonInvitation = totalUpwork - totalInvitation;\n\n  return <div>\n    {/* Summary stats */}\n    <div style={{display:\"flex\",gap:12,marginBottom:20,flexWrap:\"wrap\"}}>\n      <div style={{flex:1,minWidth:120,background:\"#f0fdf4\",border:\"1.5px solid #86efac\",borderRadius:10,padding:\"14px 18px\"}}>\n        <div style={{fontSize:11,color:\"#166534\",fontWeight:600,textTransform:\"uppercase\",letterSpacing:\"0.05em\",marginBottom:4}}>Total Proyek Upwork</div>\n        <div style={{fontSize:28,fontWeight:700,color:\"#15803d\"}}>{totalUpwork}</div>\n      </div>\n      <div style={{flex:1,minWidth:120,background:\"#eff6ff\",border:\"1.5px solid #93c5fd\",borderRadius:10,padding:\"14px 18px\"}}>\n        <div style={{fontSize:11,color:\"#1d4ed8\",fontWeight:600,textTransform:\"uppercase\",letterSpacing:\"0.05em\",marginBottom:4}}>Invitation</div>\n        <div style={{fontSize:28,fontWeight:700,color:\"#1d4ed8\"}}>{totalInvitation}</div>\n        <div style={{fontSize:11,color:\"#3b82f6\",marginTop:2}}>{totalUpwork>0?Math.round(totalInvitation/totalUpwork*100):0}% dari total</div>\n      </div>\n      <div style={{flex:1,minWidth:120,background:\"#fff8ed\",border:\"1.5px solid #fcd34d\",borderRadius:10,padding:\"14px 18px\"}}>\n        <div style={{fontSize:11,color:\"#b45309\",fontWeight:600,textTransform:\"uppercase\",letterSpacing:\"0.05em\",marginBottom:4}}>Non-Invitation</div>\n        <div style={{fontSize:28,fontWeight:700,color:\"#b45309\"}}>{totalNonInvitation}</div>\n        <div style={{fontSize:11,color:\"#d97706\",marginTop:2}}>{totalUpwork>0?Math.round(totalNonInvitation/totalUpwork*100):0}% dari total</div>\n      </div>\n    </div>\n\n    {/* Project list */}\n    {upworkProjects.length===0\n      ? <div style={{fontSize:13,color:\"var(--color-text-secondary)\",textAlign:\"center\",padding:\"1rem 0\"}}>Belum ada proyek Upwork.</div>\n      : <div style={{border:\"0.5px solid var(--color-border-tertiary)\",borderRadius:10,overflow:\"hidden\"}}>\n          <table style={{width:\"100%\",borderCollapse:\"collapse\",fontSize:13}}>\n            <thead>\n              <tr style={{background:\"var(--color-background-secondary)\",borderBottom:\"0.5px solid var(--color-border-tertiary)\"}}>\n                <th style={{padding:\"9px 12px\",textAlign:\"left\",fontWeight:600,fontSize:11,textTransform:\"uppercase\",letterSpacing:\"0.05em\",color:\"var(--color-text-secondary)\"}}>Proyek</th>\n                <th style={{padding:\"9px 12px\",textAlign:\"left\",fontWeight:600,fontSize:11,textTransform:\"uppercase\",letterSpacing:\"0.05em\",color:\"var(--color-text-secondary)\"}}>Client</th>\n                <th style={{padding:\"9px 12px\",textAlign:\"center\",fontWeight:600,fontSize:11,textTransform:\"uppercase\",letterSpacing:\"0.05em\",color:\"var(--color-text-secondary)\"}}>Invitation</th>\n                <th style={{padding:\"9px 12px\",textAlign:\"left\",fontWeight:600,fontSize:11,textTransform:\"uppercase\",letterSpacing:\"0.05em\",color:\"var(--color-text-secondary)\"}}>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              {[...upworkProjects].reverse().map((p,i)=>{\n                const cfg = STATUS_CFG[p.status]||STATUS_CFG[\"Ongoing\"];\n                return <tr key={p.id} style={{borderBottom:\"0.5px solid var(--color-border-tertiary)\",background:i%2===0?\"transparent\":\"var(--color-background-secondary)\"}}>\n                  <td style={{padding:\"9px 12px\",color:\"var(--color-text-primary)\",fontWeight:500}}>{p.projectName||\"—\"}</td>\n                  <td style={{padding:\"9px 12px\",color:\"var(--color-text-secondary)\"}}>{p.clientName||\"—\"}</td>\n                  <td style={{padding:\"9px 12px\",textAlign:\"center\"}}>\n                    {p.invitation\n                      ? <span style={{background:\"#eff6ff\",color:\"#1d4ed8\",borderRadius:20,padding:\"2px 10px\",fontSize:11,fontWeight:500}}>✓ Invitation</span>\n                      : <span style={{color:\"var(--color-text-secondary)\",fontSize:11}}>—</span>}\n                  </td>\n                  <td style={{padding:\"9px 12px\"}}>\n                    <span style={{background:cfg.bg,color:cfg.text,borderRadius:20,padding:\"2px 10px\",fontSize:11,fontWeight:500,display:\"inline-flex\",alignItems:\"center\",gap:4}}>\n                      <span style={{width:5,height:5,borderRadius:\"50%\",background:cfg.dot,display:\"inline-block\"}}/>\n                      {p.status}\n                    </span>\n                  </td>\n                </tr>;\n              })}\n            </tbody>\n          </table>\n        </div>\n    }\n  </div>;\n}\n\nconst tabBtn = (active) => ({padding:\"8px 16px\",fontSize:13,cursor:\"pointer\",border:\"none\",background:\"transparent\",color:active?\"var(--color-text-primary)\":\"var(--color-text-secondary)\",fontWeight:active?600:400,borderBottom:active?\"2px solid #111\":\"2px solid transparent\",marginBottom:\"-1px\"});\n\nconst PLATFORM_COLORS = {Upwork:\"#14a800\",Fiverr:\"#1dbf73\",Freelance:\"#ff6b35\"};\n\nfunction PlatformStackedBar({projects}) {\n  const total = projects.length;\n  const counts = platformOptions.reduce((acc,p)=>({...acc,[p]:projects.filter(x=>x.platform===p).length}),{});\n  if (total===0) return <div style={{color:\"var(--color-text-secondary)\",fontSize:13,padding:\"2rem 0\",textAlign:\"center\"}}>Tidak ada data.</div>;\n  const TEXT_COLORS = {Upwork:\"#173404\",Fiverr:\"#04342C\",Freelance:\"#412402\"};\n  return <div style={{display:\"flex\",flexDirection:\"column\",gap:14}}>\n    {platformOptions.map(p=>{\n      const pct = total>0 ? Math.round(counts[p]/total*100) : 0;\n      const barPct = Math.max(pct, counts[p]>0?2:0);\n      return <div key={p}>\n        <div style={{display:\"flex\",justifyContent:\"space-between\",fontSize:12,color:\"var(--color-text-secondary)\",marginBottom:6}}>\n          <span style={{display:\"flex\",alignItems:\"center\",gap:6}}>\n            <span style={{width:10,height:10,borderRadius:2,background:PLATFORM_COLORS[p],display:\"inline-block\",flexShrink:0}}/>\n            {p}\n          </span>\n          <span style={{fontWeight:500,color:\"var(--color-text-primary)\"}}>{counts[p]} proyek · {pct}%</span>\n        </div>\n        <div style={{height:28,background:\"#f4f4f4\",borderRadius:6,overflow:\"hidden\"}}>\n          <div style={{width:`${barPct}%`,height:\"100%\",background:PLATFORM_COLORS[p],borderRadius:6,display:\"flex\",alignItems:\"center\",paddingLeft:counts[p]>0?10:0,transition:\"width 0.4s ease\",minWidth:counts[p]>0?4:0}}>\n            {pct>=10&&<span style={{fontSize:12,fontWeight:500,color:TEXT_COLORS[p],whiteSpace:\"nowrap\"}}>{pct}%</span>}\n          </div>\n        </div>\n      </div>;\n    })}\n    <div style={{fontSize:12,color:\"var(--color-text-secondary)\",marginTop:2}}>Total: {total} proyek</div>\n  </div>;\n}\n\nfunction parseRp(v) { if(!v) return 0; return parseFloat(v.replace(/\\./g,\"\").replace(\",\",\".\"))||0; }\n\nfunction fmtRp(n) { return n>=1000000?`${(n/1000000).toFixed(1)}jt`:n>=1000?`${(n/1000).toFixed(0)}rb`:n.toString(); }\nfunction fmtUsd(n) { return `$${n.toLocaleString()}`; }\n\nfunction PlatformIncomeBar({projects}) {\n  const [mode, setMode] = useState(\"rp\");\n\n  const data = platformOptions.map(p=>{\n    const ps = projects.filter(x=>x.platform===p);\n    const rp = ps.reduce((s,x)=>s+parseRp(x.priceRp),0);\n    const gross = ps.reduce((s,x)=>s+parseRp(x.grossPrice),0);\n    const usd = ps.reduce((s,x)=>s+(parseFloat(x.priceUSD)||0),0);\n    return {p, rp, gross, usd};\n  }).filter(d=>d.rp||d.gross||d.usd);\n\n  if (data.length===0) return <div style={{color:\"var(--color-text-secondary)\",fontSize:13,padding:\"1rem 0\",textAlign:\"center\"}}>Tidak ada data income.</div>;\n\n  const hasUsd = data.some(d=>d.usd>0);\n  const maxRp = Math.max(...data.map(d=>d.gross||d.rp),1);\n  const maxUsd = Math.max(...data.map(d=>d.usd),1);\n\n  const btnBase = {fontSize:11,padding:\"3px 10px\",borderRadius:20,cursor:\"pointer\",border:\"0.5px solid\",transition:\"all 0.15s\"};\n  const btnActive = {...btnBase,background:\"var(--color-text-primary)\",color:\"var(--color-background-primary)\",borderColor:\"var(--color-text-primary)\"};\n  const btnInactive = {...btnBase,background:\"transparent\",color:\"var(--color-text-secondary)\",borderColor:\"var(--color-border-secondary)\"};\n\n  return <div>\n    <div style={{display:\"flex\",alignItems:\"center\",justifyContent:\"space-between\",marginBottom:12}}>\n      <span style={{fontSize:11,fontWeight:500,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",letterSpacing:\"0.06em\"}}>Total Income</span>\n      {hasUsd&&<div style={{display:\"flex\",gap:4}}>\n        <button style={mode===\"rp\"?btnActive:btnInactive} onClick={()=>setMode(\"rp\")}>Rp</button>\n        <button style={mode===\"usd\"?btnActive:btnInactive} onClick={()=>setMode(\"usd\")}>USD</button>\n      </div>}\n    </div>\n\n    <div style={{display:\"flex\",flexDirection:\"column\",gap:8,marginBottom:14}}>\n      {data.map(d=>{\n        const isRp = mode===\"rp\";\n        const gross = isRp ? (d.gross||d.rp) : 0;\n        const val   = isRp ? d.rp : d.usd;\n        const max   = isRp ? maxRp : maxUsd;\n        const barPct = Math.round(val/max*100);\n        const grossPct = isRp && gross ? Math.round(gross/max*100) : 0;\n        if (!val && !gross) return null;\n        const label = isRp ? `Rp ${fmtRp(gross||val)}` : `$${d.usd.toLocaleString()}`;\n        const nettLabel = isRp && gross && gross!==val ? `nett ${fmtRp(val)}` : null;\n        return <div key={d.p} style={{display:\"flex\",alignItems:\"center\",gap:10}}>\n          <span style={{display:\"flex\",alignItems:\"center\",gap:5,fontSize:12,color:\"var(--color-text-secondary)\",whiteSpace:\"nowrap\",minWidth:68}}>\n            <span style={{width:8,height:8,borderRadius:2,background:PLATFORM_COLORS[d.p],display:\"inline-block\",flexShrink:0}}/>\n            {d.p}\n          </span>\n          <div style={{flex:1,height:18,background:\"#f4f4f4\",borderRadius:4,overflow:\"hidden\",position:\"relative\"}}>\n            {isRp&&grossPct>barPct&&<div style={{position:\"absolute\",height:\"100%\",width:`${grossPct}%`,background:PLATFORM_COLORS[d.p],borderRadius:4,opacity:0.25}}/>}\n            <div style={{position:\"absolute\",height:\"100%\",width:`${barPct}%`,background:PLATFORM_COLORS[d.p],borderRadius:4}}/>\n          </div>\n          <div style={{textAlign:\"right\",whiteSpace:\"nowrap\",minWidth:70}}>\n            <span style={{fontSize:13,fontWeight:500,color:\"var(--color-text-primary)\"}}>{label}</span>\n            {nettLabel&&<div style={{fontSize:10,color:\"var(--color-text-secondary)\"}}>nett {nettLabel}</div>}\n          </div>\n        </div>;\n      })}\n    </div>\n    {mode===\"rp\"&&(()=>{\n      const totalGross = data.reduce((s,d)=>s+(d.gross||d.rp),0);\n      const totalNett  = data.reduce((s,d)=>s+d.rp,0);\n      return <div style={{display:\"grid\",gridTemplateColumns:\"1fr 1fr\",gap:8}}>\n        <div style={{background:\"#f4f4f4\",borderRadius:8,padding:\"10px 14px\"}}>\n          <div style={{fontSize:11,color:\"#888\",marginBottom:4}}>Total Gross</div>\n          <div style={{fontSize:18,fontWeight:500,color:\"#222\"}}>Rp {fmtRp(totalGross)}</div>\n        </div>\n        <div style={{background:\"#f4f4f4\",borderRadius:8,padding:\"10px 14px\"}}>\n          <div style={{fontSize:11,color:\"#888\",marginBottom:4}}>Total Nett</div>\n          <div style={{fontSize:18,fontWeight:500,color:\"#222\"}}>Rp {fmtRp(totalNett)}</div>\n        </div>\n      </div>;\n    })()}\n    {mode===\"usd\"&&(()=>{\n      const totalUsd = data.reduce((s,d)=>s+d.usd,0);\n      return <div style={{background:\"#f4f4f4\",borderRadius:8,padding:\"10px 14px\"}}>\n        <div style={{fontSize:11,color:\"#888\",marginBottom:4}}>Total USD</div>\n        <div style={{fontSize:18,fontWeight:500,color:\"#222\"}}>${totalUsd.toLocaleString()}</div>\n      </div>;\n    })()}\n  </div>;\n}\n\nconst CLIENT_TYPE_CFG = {\n  \"Owner\":          {color:\"#378ADD\", bg:\"#eff6ff\", text:\"#1d4ed8\"},\n  \"Business Owner\": {color:\"#378ADD\", bg:\"#eff6ff\", text:\"#1d4ed8\"},\n  \"Developer\":      {color:\"#1D9E75\", bg:\"#f0fdf4\", text:\"#166534\"},\n  \"Consultant\":     {color:\"#EF9F27\", bg:\"#fef3c7\", text:\"#92400e\"},\n  \"Contractor\":     {color:\"#D85A30\", bg:\"#faece7\", text:\"#993c1d\"},\n};\nfunction getTypeColor(t) {\n  if (!t) return {color:\"#888780\",bg:\"var(--color-background-secondary)\",text:\"var(--color-text-secondary)\"};\n  if (CLIENT_TYPE_CFG[t]) return CLIENT_TYPE_CFG[t];\n  const PALETTES = [\n    {color:\"#7F77DD\",bg:\"#EEEDFE\",text:\"#3C3489\"},\n    {color:\"#D4537E\",bg:\"#FBEAF0\",text:\"#72243E\"},\n    {color:\"#639922\",bg:\"#EAF3DE\",text:\"#27500A\"},\n    {color:\"#BA7517\",bg:\"#FAEEDA\",text:\"#633806\"},\n    {color:\"#0F6E56\",bg:\"#E1F5EE\",text:\"#085041\"},\n    {color:\"#993556\",bg:\"#FBEAF0\",text:\"#4B1528\"},\n    {color:\"#185FA5\",bg:\"#E6F1FB\",text:\"#042C53\"},\n  ];\n  let hash = 0;\n  for (let i = 0; i < t.length; i++) hash = (hash * 31 + t.charCodeAt(i)) >>> 0;\n  return PALETTES[hash % PALETTES.length];\n}\n\nfunction ClientOrderList({projects}) {\n  const [view, setView] = useState(\"nama\");\n  const [expanded, setExpanded] = useState(null);\n  const donutRef = useRef(null);\n  const donutChart = useRef(null);\n\n  const clients = Object.entries(\n    projects.reduce((acc,p)=>{\n      const name = p.clientName||\"(Tanpa Nama)\";\n      if (!acc[name]) acc[name]={name,clientType:p.clientType||\"\",count:0,totalGrossRp:0,totalNettRp:0,totalUSD:0,proyek:[]};\n      acc[name].count++;\n      acc[name].totalGrossRp += parseRp(p.grossPrice);\n      acc[name].totalNettRp  += parseRp(p.priceRp);\n      acc[name].totalUSD     += parseFloat(p.priceUSD)||0;\n      if (!acc[name].clientType && p.clientType) acc[name].clientType = p.clientType;\n      acc[name].proyek.push(p);\n      return acc;\n    },{})\n  ).map(([,v])=>v).sort((a,b)=>b.count-a.count || (b.totalGrossRp+b.totalUSD*16000)-(a.totalGrossRp+a.totalUSD*16000));\n\n  const byType = Object.entries(\n    projects.reduce((acc,p)=>{\n      const t = p.clientType||\"(Tanpa Tipe)\";\n      if (!acc[t]) acc[t]={type:t,count:0,totalNettRp:0,totalGrossRp:0};\n      acc[t].count++;\n      acc[t].totalNettRp  += parseRp(p.priceRp);\n      acc[t].totalGrossRp += parseRp(p.grossPrice);\n      return acc;\n    },{})\n  ).map(([,v])=>v).sort((a,b)=>b.count-a.count);\n\n  useEffect(()=>{\n    if (view!==\"tipe\"||!donutRef.current) return;\n    if (donutChart.current){donutChart.current.destroy();donutChart.current=null;}\n    const init = ()=>{\n      if (!window.Chart) return;\n      donutChart.current = new window.Chart(donutRef.current,{\n        type:\"doughnut\",\n        data:{\n          labels: byType.map(t=>t.type),\n          datasets:[{ data:byType.map(t=>t.count), backgroundColor:byType.map(t=>getTypeColor(t.type).color), borderWidth:2, borderColor:\"#fff\", hoverOffset:4 }]\n        },\n        options:{ responsive:true, maintainAspectRatio:false, cutout:\"68%\", plugins:{legend:{display:false}, tooltip:{callbacks:{label:ctx=>`${ctx.label}: ${ctx.parsed}x`}}} }\n      });\n    };\n    if (window.Chart) init();\n    else { const s=document.createElement(\"script\"); s.src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js\"; s.onload=init; document.head.appendChild(s); }\n    return ()=>{ if(donutChart.current){donutChart.current.destroy();donutChart.current=null;} };\n  },[view, JSON.stringify(byType)]);\n\n  if (clients.length===0) return <div style={{fontSize:13,color:\"var(--color-text-secondary)\",textAlign:\"center\",padding:\"1rem 0\"}}>Tidak ada data.</div>;\n\n  const anyUSD = clients.some(c=>c.totalUSD>0);\n  const colW = {gross:90, nett:90, usd:70, count:36};\n  const labelSt = {fontSize:10,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",letterSpacing:\"0.05em\",fontWeight:500};\n  const pillBtn = (active) => ({fontSize:12,padding:\"4px 14px\",borderRadius:20,border:\"0.5px solid\",cursor:\"pointer\",transition:\"all 0.15s\",background:active?\"#111\":\"transparent\",color:active?\"#fff\":\"var(--color-text-secondary)\",borderColor:active?\"#111\":\"var(--color-border-secondary)\"});\n\n  return <div style={{display:\"flex\",flexDirection:\"column\",gap:10}}>\n    {/* Toggle */}\n    <div style={{display:\"flex\",gap:6}}>\n      <button onClick={()=>setView(\"nama\")} style={pillBtn(view===\"nama\")}>Per Nama</button>\n      <button onClick={()=>setView(\"tipe\")} style={pillBtn(view===\"tipe\")}>Per Tipe</button>\n    </div>\n\n    {/* VIEW: PER NAMA */}\n    {view===\"nama\"&&<div style={{display:\"flex\",flexDirection:\"column\",gap:6}}>\n      <div style={{display:\"flex\",alignItems:\"center\",gap:10,padding:\"0 12px 4px\",borderBottom:\"0.5px solid var(--color-border-tertiary)\"}}>\n        <span style={{width:20,flexShrink:0}}/>\n        <span style={{flex:1}}/>\n        <span style={{...labelSt,width:colW.gross,textAlign:\"right\"}}>Gross</span>\n        <span style={{...labelSt,width:colW.nett,textAlign:\"right\"}}>Nett</span>\n        {anyUSD&&<span style={{...labelSt,width:colW.usd,textAlign:\"right\"}}>USD</span>}\n        <span style={{width:colW.count}}/>\n      </div>\n      {clients.map((c,i)=>{\n        const isOpen = expanded===c.name;\n        const typeCfg = getTypeColor(c.clientType);\n        return <div key={c.name} style={{borderRadius:8,overflow:\"hidden\",border:\"0.5px solid transparent\",transition:\"border-color 0.2s\",...(isOpen?{border:\"0.5px solid var(--color-border-secondary)\"}:{})}}>\n          <div onClick={()=>setExpanded(isOpen?null:c.name)}\n            style={{display:\"flex\",alignItems:\"center\",gap:10,padding:\"8px 12px\",background:isOpen?\"#dbeafe\":\"var(--color-background-secondary)\",cursor:\"pointer\",transition:\"background 0.15s\"}}\n            onMouseEnter={e=>{e.currentTarget.style.background=\"#e0e7ff\";}}\n            onMouseLeave={e=>{e.currentTarget.style.background=isOpen?\"#dbeafe\":\"var(--color-background-secondary)\";}}>\n            <span style={{fontSize:11,fontWeight:600,color:\"var(--color-text-secondary)\",width:20,textAlign:\"right\",flexShrink:0}}>#{i+1}</span>\n            <span style={{display:\"flex\",flexDirection:\"column\",gap:2,flex:1,minWidth:0,overflow:\"hidden\"}}>\n              <span style={{fontSize:13,color:isOpen?\"var(--color-text-info)\":\"var(--color-text-primary)\",fontWeight:500,overflow:\"hidden\",textOverflow:\"ellipsis\",whiteSpace:\"nowrap\"}}>{c.name}</span>\n              <span style={{display:\"flex\",alignItems:\"center\",gap:4}}>\n                {c.clientType&&<span style={{fontSize:10,fontWeight:500,borderRadius:20,padding:\"1px 7px\",background:typeCfg.bg,color:typeCfg.text,flexShrink:0}}>{c.clientType}</span>}\n                <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke={isOpen?\"#fff\":\"var(--color-text-secondary)\"} strokeWidth=\"2.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" style={{flexShrink:0,transform:isOpen?\"rotate(180deg)\":\"rotate(0deg)\",transition:\"transform 0.2s\"}}><polyline points=\"6 9 12 15 18 9\"/></svg>\n              </span>\n            </span>\n            <span style={{fontSize:12,fontWeight:600,color:\"var(--color-text-primary)\",width:colW.gross,textAlign:\"right\",whiteSpace:\"nowrap\"}}>{c.totalGrossRp>0?`Rp ${fmtRp(c.totalGrossRp)}`:\"—\"}</span>\n            <span style={{fontSize:12,fontWeight:400,color:\"var(--color-text-secondary)\",width:colW.nett,textAlign:\"right\",whiteSpace:\"nowrap\"}}>{c.totalNettRp>0?`Rp ${fmtRp(c.totalNettRp)}`:\"—\"}</span>\n            {anyUSD&&<span style={{fontSize:12,fontWeight:600,color:\"#047857\",width:colW.usd,textAlign:\"right\",whiteSpace:\"nowrap\"}}>{c.totalUSD>0?`$${c.totalUSD.toLocaleString()}`:\"\"}</span>}\n            <span style={{fontSize:12,fontWeight:500,background:c.count>1?\"#eff6ff\":\"var(--color-background-primary)\",color:c.count>1?\"#1d4ed8\":\"var(--color-text-secondary)\",borderRadius:20,padding:\"2px 8px\",width:colW.count,textAlign:\"center\",flexShrink:0}}>{c.count}x</span>\n          </div>\n          {isOpen&&<div style={{background:\"var(--color-background-primary)\",borderTop:\"0.5px solid var(--color-border-tertiary)\",padding:\"8px 12px 10px\"}}>\n            <div style={{display:\"flex\",flexDirection:\"column\",gap:6,paddingLeft:30}}>\n              {c.proyek.map((p,j)=><div key={p.id} style={{display:\"flex\",alignItems:\"flex-start\",gap:8,padding:\"7px 10px\",borderRadius:6,background:\"var(--color-background-secondary)\"}}>\n                <span style={{fontSize:11,color:\"var(--color-text-secondary)\",flexShrink:0,marginTop:1}}>#{j+1}</span>\n                <div style={{flex:1,minWidth:0}}>\n                  <div style={{fontSize:13,fontWeight:500,color:\"var(--color-text-primary)\",marginBottom:4}}>{p.projectName||\"Untitled\"}</div>\n                  <div style={{display:\"flex\",gap:4,flexWrap:\"wrap\"}}>\n                    {p.design&&<span style={{fontSize:11,background:\"#eff6ff\",color:\"#1d4ed8\",borderRadius:4,padding:\"1px 7px\"}}>{p.design}</span>}\n                    {p.jobType&&<span style={{fontSize:11,background:\"#f0fdf4\",color:\"#166534\",borderRadius:4,padding:\"1px 7px\"}}>{p.jobType}</span>}\n                    {p.status&&<span style={{fontSize:11,background:STATUS_CFG[p.status]?.bg||\"#f5f5f5\",color:STATUS_CFG[p.status]?.text||\"#555\",borderRadius:4,padding:\"1px 7px\"}}>{p.status}</span>}\n                  </div>\n                </div>\n                {(p.grossPrice||p.priceRp||p.priceUSD)&&<div style={{display:\"flex\",flexDirection:\"column\",alignItems:\"flex-end\",gap:1,flexShrink:0}}>\n                  {p.grossPrice&&<span style={{fontSize:11,fontWeight:600,color:\"var(--color-text-primary)\",whiteSpace:\"nowrap\"}}>Rp {p.grossPrice}</span>}\n                  {p.priceRp&&p.grossPrice&&p.priceRp!==p.grossPrice&&<span style={{fontSize:11,color:\"var(--color-text-secondary)\",whiteSpace:\"nowrap\"}}>Nett Rp {p.priceRp}</span>}\n                  {p.priceRp&&!p.grossPrice&&<span style={{fontSize:11,fontWeight:600,color:\"var(--color-text-primary)\",whiteSpace:\"nowrap\"}}>Rp {p.priceRp}</span>}\n                  {p.priceUSD&&<span style={{fontSize:11,fontWeight:600,color:\"#047857\",whiteSpace:\"nowrap\"}}>${p.priceUSD}</span>}\n                </div>}\n              </div>)}\n            </div>\n          </div>}\n        </div>;\n      })}\n    </div>}\n\n    {/* VIEW: PER TIPE */}\n    {view===\"tipe\"&&<div>\n      <div style={{display:\"flex\",gap:20,alignItems:\"center\"}}>\n        <div style={{position:\"relative\",width:130,height:130,flexShrink:0}}>\n          <canvas ref={donutRef}/>\n        </div>\n        <div style={{flex:1,display:\"flex\",flexDirection:\"column\",gap:7}}>\n          {byType.map(t=>{\n            const cfg = getTypeColor(t.type);\n            return <div key={t.type} style={{display:\"flex\",alignItems:\"center\",gap:8,padding:\"8px 12px\",borderRadius:8,background:\"var(--color-background-secondary)\"}}>\n              <span style={{width:10,height:10,borderRadius:2,background:cfg.color,flexShrink:0}}/>\n              <span style={{fontSize:13,fontWeight:500,color:\"var(--color-text-primary)\",flex:1}}>{t.type}</span>\n              <span style={{fontSize:12,color:\"var(--color-text-secondary)\",whiteSpace:\"nowrap\"}}>{t.totalNettRp>0?`Rp ${fmtRp(t.totalNettRp)}`:\"—\"}</span>\n              <span style={{fontSize:12,fontWeight:500,borderRadius:20,padding:\"2px 8px\",background:cfg.bg,color:cfg.text,flexShrink:0}}>{t.count}x</span>\n            </div>;\n          })}\n        </div>\n      </div>\n    </div>}\n  </div>;\n}\n\nfunction ProjectTypeScopeTable({projects}) {\n  if (projects.length===0) return <div style={{fontSize:13,color:\"var(--color-text-secondary)\",textAlign:\"center\",padding:\"1rem 0\"}}>Tidak ada data.</div>;\n  // Group by design+jobType and count\n  const grouped = Object.values(projects.reduce((acc,p)=>{\n    const key = `${p.jobType||\"—\"}__${p.design||\"—\"}`;\n    if (!acc[key]) acc[key]={design:p.design||\"—\",jobType:p.jobType||\"—\",count:0};\n    acc[key].count++;\n    return acc;\n  },{})).sort((a,b)=>a.jobType.localeCompare(b.jobType)||a.design.localeCompare(b.design));\n  return <div style={{overflowX:\"auto\"}}>\n    <table style={{width:\"100%\",borderCollapse:\"collapse\",fontSize:13}}>\n      <thead>\n        <tr style={{borderBottom:\"2px solid #000\"}}>\n          <th style={{padding:\"8px 12px\",textAlign:\"left\",fontWeight:600,fontSize:11,textTransform:\"uppercase\",letterSpacing:\"0.05em\",color:\"var(--color-text-secondary)\"}}>Scope of Work</th>\n          <th style={{padding:\"8px 12px\",textAlign:\"left\",fontWeight:600,fontSize:11,textTransform:\"uppercase\",letterSpacing:\"0.05em\",color:\"var(--color-text-secondary)\"}}>Project Type</th>\n          <th style={{padding:\"8px 12px\",textAlign:\"center\",fontWeight:600,fontSize:11,textTransform:\"uppercase\",letterSpacing:\"0.05em\",color:\"var(--color-text-secondary)\"}}>Count</th>\n        </tr>\n      </thead>\n      <tbody>\n        {grouped.map((row,i)=><tr key={i} style={{borderBottom:\"0.5px solid var(--color-border-tertiary)\",background:i%2===0?\"transparent\":\"var(--color-background-secondary)\"}}>\n          <td style={{padding:\"8px 12px\",color:\"var(--color-text-primary)\"}}>{row.jobType}</td>\n          <td style={{padding:\"8px 12px\",color:\"var(--color-text-primary)\"}}>{row.design}</td>\n          <td style={{padding:\"8px 12px\",textAlign:\"center\"}}><span style={{fontWeight:600,fontSize:13,background:row.count>1?\"#eff6ff\":\"var(--color-background-secondary)\",color:row.count>1?\"#1d4ed8\":\"var(--color-text-secondary)\",borderRadius:20,padding:\"2px 10px\"}}>{row.count}</span></td>\n        </tr>)}\n      </tbody>\n    </table>\n  </div>;\n}\n\nfunction HargaM2Tab({projects}) {\n  const valid = projects.filter(p=>p.area&&parseFloat(p.area)>0&&parseRp(p.grossPrice)>0);\n  const scopes = [\"Semua\",...[...new Set(valid.map(p=>p.jobType).filter(Boolean))]];\n  const [scope, setScope] = useState(\"Semua\");\n\n  const filtered = valid.filter(p=>scope===\"Semua\"||p.jobType===scope);\n\n  if (valid.length===0) return <div style={{fontSize:13,color:\"var(--color-text-secondary)\",textAlign:\"center\",padding:\"1rem 0\"}}>Tidak ada proyek dengan data area & gross.</div>;\n\n  const prices = filtered.map(p=>Math.round(parseRp(p.grossPrice)/parseFloat(p.area)));\n  const avg = prices.length ? Math.round(prices.reduce((s,v)=>s+v,0)/prices.length) : 0;\n  const min = prices.length ? Math.min(...prices) : 0;\n  const max = prices.length ? Math.max(...prices) : 0;\n\n  const btnBase = {fontSize:11,padding:\"4px 12px\",borderRadius:20,border:\"0.5px solid\",cursor:\"pointer\",whiteSpace:\"nowrap\",transition:\"all 0.15s\"};\n  const btnActive = {...btnBase,background:\"#222\",color:\"#fff\",borderColor:\"#222\"};\n  const btnInactive = {...btnBase,background:\"transparent\",color:\"var(--color-text-secondary)\",borderColor:\"var(--color-border-secondary)\"};\n\n  return <div>\n    <div style={{display:\"flex\",gap:6,flexWrap:\"wrap\",marginBottom:16}}>\n      {scopes.map(s=><button key={s} style={scope===s?btnActive:btnInactive} onClick={()=>setScope(s)}>{s}</button>)}\n    </div>\n\n    {filtered.length===0\n      ? <div style={{fontSize:13,color:\"var(--color-text-secondary)\",textAlign:\"center\",padding:\"1rem 0\"}}>Tidak ada proyek dengan scope ini.</div>\n      : <>\n          <div style={{display:\"grid\",gridTemplateColumns:\"repeat(3,1fr)\",gap:8,marginBottom:16}}>\n            {[[\"Rata-rata\",avg],[\"Terendah\",min],[\"Tertinggi\",max]].map(([label,val])=>(\n              <div key={label} style={{background:\"#f4f4f4\",borderRadius:8,padding:\"10px 14px\"}}>\n                <div style={{fontSize:11,color:\"#888\",marginBottom:4}}>{label}</div>\n                <div style={{fontSize:18,fontWeight:500,color:\"#222\"}}>Rp {fmtRp(val)}</div>\n                <div style={{fontSize:10,color:\"#aaa\",marginTop:2}}>per m²</div>\n              </div>\n            ))}\n          </div>\n          <div style={{display:\"flex\",flexDirection:\"column\"}}>\n            {filtered.map((p,i)=>{\n              const priceM2 = Math.round(parseRp(p.grossPrice)/parseFloat(p.area));\n              const isLast = i===filtered.length-1;\n              return <div key={p.id} style={{padding:\"10px 0\",borderBottom:isLast?\"none\":\"0.5px solid var(--color-border-tertiary)\"}}>\n                <div style={{display:\"flex\",justifyContent:\"space-between\",alignItems:\"flex-start\"}}>\n                  <div>\n                    <div style={{fontSize:13,fontWeight:500,color:\"var(--color-text-primary)\",marginBottom:5}}>{p.projectName||\"Untitled\"}</div>\n                    <div style={{display:\"flex\",gap:4,flexWrap:\"wrap\"}}>\n                      {p.jobType&&<span style={{fontSize:11,background:\"#f0fdf4\",color:\"#166534\",borderRadius:4,padding:\"2px 7px\"}}>{p.jobType}</span>}\n                      {p.design&&<span style={{fontSize:11,background:\"#eff6ff\",color:\"#1d4ed8\",borderRadius:4,padding:\"2px 7px\"}}>{p.design}</span>}\n                    </div>\n                  </div>\n                  <div style={{textAlign:\"right\",flexShrink:0,marginLeft:12}}>\n                    <div style={{fontSize:14,fontWeight:500,color:\"var(--color-text-primary)\"}}>Rp {fmtRp(priceM2)}/m²</div>\n                    <div style={{fontSize:11,color:\"var(--color-text-secondary)\",marginTop:2}}>{p.area} m² · Rp {fmtRp(parseRp(p.grossPrice))}</div>\n                  </div>\n                </div>\n              </div>;\n            })}\n          </div>\n        </>\n    }\n  </div>;\n}\n\nfunction IncomeVsExpenses({projects}) {\n  const canvasRef = useRef(null);\n  const chartRef  = useRef(null);\n  const expenses  = loadExpenses();\n\n  const allMonths = [...new Set([\n    ...projects.map(p=>(p.startDate||\"\").slice(0,7)),\n    ...expenses.map(e=>(e.date||\"\").slice(0,7))\n  ].filter(Boolean))].sort();\n\n  const labels    = allMonths.map(m=>{ const [,mo]=m.split(\"-\"); return [\"\",\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"Mei\",\"Jun\",\"Jul\",\"Agu\",\"Sep\",\"Okt\",\"Nov\",\"Des\"][parseInt(mo)]; });\n  const incomeData   = allMonths.map(m=>projects.filter(p=>(p.startDate||\"\").startsWith(m)).reduce((s,p)=>s+parseRp(p.priceRp),0));\n  const expenseData  = allMonths.map(m=>expenses.filter(e=>(e.date||\"\").startsWith(m)).reduce((s,e)=>s+parseRp(e.amount),0));\n\n  useEffect(()=>{\n    if (!canvasRef.current||allMonths.length===0) return;\n    if (chartRef.current){chartRef.current.destroy();chartRef.current=null;}\n    const init = () => {\n      if (!window.Chart) return;\n      chartRef.current = new window.Chart(canvasRef.current,{\n        type:\"line\",\n        data:{ labels, datasets:[\n          { label:\"Income (Nett)\", data:incomeData,  borderColor:\"#22c55e\", backgroundColor:\"rgba(34,197,94,0.10)\", fill:true, tension:0.35, pointRadius:3, pointBackgroundColor:\"#22c55e\", borderWidth:2 },\n          { label:\"Expenses\",     data:expenseData, borderColor:\"#ef4444\", backgroundColor:\"rgba(239,68,68,0.07)\",  fill:true, tension:0.35, pointRadius:3, pointBackgroundColor:\"#ef4444\", borderWidth:2 }\n        ]},\n        options:{\n          responsive:true, maintainAspectRatio:false,\n          layout:{padding:{top:16}},\n          plugins:{\n            legend:{display:false},\n            tooltip:{callbacks:{\n              label: ctx=>`${ctx.dataset.label}: Rp ${fmtRp(ctx.parsed.y)}`,\n              footer: items=>{\n                const inc = items.find(i=>i.datasetIndex===0)?.parsed.y||0;\n                const exp = items.find(i=>i.datasetIndex===1)?.parsed.y||0;\n                return `Profit: Rp ${fmtRp(inc-exp)}`;\n              }\n            }}\n          },\n          scales:{\n            x:{grid:{color:\"rgba(128,128,128,0.08)\"},ticks:{font:{size:11},color:\"#888\"}},\n            y:{grid:{color:\"rgba(128,128,128,0.08)\"},ticks:{font:{size:10},color:\"#888\",callback:v=>v>=1000000?`${(v/1000000).toFixed(0)}jt`:v>=1000?`${Math.round(v/1000)}rb`:`${v}`},min:0}\n          }\n        }\n      });\n    };\n    if (window.Chart) init();\n    else { const s=document.createElement(\"script\"); s.src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js\"; s.onload=init; document.head.appendChild(s); }\n    return ()=>{ if(chartRef.current){chartRef.current.destroy();chartRef.current=null;} };\n  },[JSON.stringify(incomeData),JSON.stringify(expenseData)]);\n\n  if (allMonths.length===0) return <div style={{fontSize:13,color:\"var(--color-text-secondary)\",textAlign:\"center\",padding:\"1rem 0\"}}>Belum ada data income atau expenses.</div>;\n\n  const totalIncome   = incomeData.reduce((s,v)=>s+v,0);\n  const totalExpenses = expenseData.reduce((s,v)=>s+v,0);\n  const totalProfit   = totalIncome - totalExpenses;\n\n  return <div>\n    <div style={{display:\"flex\",gap:14,marginBottom:12,fontSize:12,color:\"var(--color-text-secondary)\",flexWrap:\"wrap\",alignItems:\"center\"}}>\n      <span style={{display:\"flex\",alignItems:\"center\",gap:5}}><span style={{width:10,height:10,borderRadius:2,background:\"#22c55e\",display:\"inline-block\"}}/>Income (Nett)</span>\n      <span style={{display:\"flex\",alignItems:\"center\",gap:5}}><span style={{width:10,height:10,borderRadius:2,background:\"#ef4444\",display:\"inline-block\"}}/>Expenses</span>\n      <span style={{marginLeft:\"auto\",display:\"flex\",gap:16}}>\n        <span>Total income <strong style={{color:\"#22c55e\"}}>Rp {fmtRp(totalIncome)}</strong></span>\n        <span>Total expenses <strong style={{color:\"#ef4444\"}}>Rp {fmtRp(totalExpenses)}</strong></span>\n        <span>Profit <strong style={{color:totalProfit>=0?\"var(--color-text-primary)\":\"#ef4444\"}}>Rp {fmtRp(Math.abs(totalProfit))}{totalProfit<0?\" (minus)\":\"\"}</strong></span>\n      </span>\n    </div>\n    <div style={{position:\"relative\",width:\"100%\",height:200}}>\n      <canvas ref={canvasRef}/>\n    </div>\n  </div>;\n}\n\nfunction loadTargets() {\n  try { const s=window._incomeTargets; if(s)return JSON.parse(s); } catch(e){}\n  // migrate old single-target format\n  try { const s=window._incomeTarget; if(s){const t=JSON.parse(s);if(t&&t.year&&t.amount>0)return {[t.year]:t.amount};} } catch(e){}\n  if(seedTarget&&seedTarget.year&&seedTarget.amount>0) return {[seedTarget.year]:seedTarget.amount};\n  return {};\n}\nfunction saveTargets(t) { window._incomeTargets=JSON.stringify(t); }\nfunction fmtFull(n) { return n.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g,\".\"); }\n\nfunction IncomeTarget({projects, year: propYear}) {\n  const [targets, setTargets] = useState(loadTargets);\n  const [editing, setEditing] = useState(false);\n  const [editYear, setEditYear] = useState(String(new Date().getFullYear()));\n  const [inputVal, setInputVal] = useState(\"\");\n  const [amtLoading, setAmtLoading] = useState(false);\n  const canvasRef = useRef(null);\n  const chartRef  = useRef(null);\n\n  // All years that have projects OR have a target set\n  const projectYears = [...new Set(projects.map(p=>(p.startDate||\"\").slice(0,4)).filter(Boolean))].sort().reverse();\n  const targetYears  = Object.keys(targets).sort().reverse();\n  const allYears = [...new Set([...projectYears, ...targetYears])].sort().reverse();\n  const currentYear  = String(new Date().getFullYear());\n  // if a year is passed from the parent Analysis tab, follow it; else use own state\n  const [ownYear, setOwnYear] = useState(()=>allYears[0]||currentYear);\n  const selYear = propYear || ownYear;\n  const setSelYear = (y) => { if(!propYear) setOwnYear(y); };\n\n  const targetAmt  = targets[selYear]||0;\n  const MONTHS = [\"\",\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"Mei\",\"Jun\",\"Jul\",\"Agu\",\"Sep\",\"Okt\",\"Nov\",\"Des\"];\n\n  // Income per month for selected year (cumulative)\n  const monthlyIncome = Array.from({length:12},(_,i)=>{\n    const mo = String(i+1).padStart(2,\"0\");\n    return projects\n      .filter(p=>(p.startDate||\"\").startsWith(`${selYear}-${mo}`))\n      .reduce((s,p)=>s+parseRp(p.priceRp),0);\n  });\n  const totalNett = monthlyIncome.reduce((s,v)=>s+v,0);\n  const pct = targetAmt>0 ? Math.min(100, Math.round(totalNett/targetAmt*100)) : 0;\n  const remaining = Math.max(0, targetAmt - totalNett);\n\n  // Find which month target was achieved (cumulative sum crosses target)\n  const achievedMonth = (() => {\n    if (!targetAmt) return null;\n    let cum = 0;\n    for (let i=0; i<12; i++) {\n      cum += monthlyIncome[i];\n      if (cum >= targetAmt) return i+1; // 1-indexed month\n    }\n    return null;\n  })();\n\n  // Months left in year (only for current year)\n  const now = new Date();\n  const isCurrentYear = selYear === currentYear;\n  const monthsLeft = isCurrentYear ? 12 - now.getMonth() : 0;\n  const perMonth = monthsLeft>0 && remaining>0 ? Math.round(remaining/monthsLeft) : 0;\n\n  useEffect(()=>{ saveTargets(targets); },[targets]);\n\n  useEffect(()=>{\n    if (!canvasRef.current) return;\n    if (chartRef.current){chartRef.current.destroy();chartRef.current=null;}\n    const init = ()=>{\n      if (!canvasRef.current||!window.Chart) return;\n      chartRef.current = new window.Chart(canvasRef.current,{\n        type:\"doughnut\",\n        data:{ datasets:[{ data:[totalNett, Math.max(0,targetAmt-totalNett)], backgroundColor:[\"#22c55e\",\"#e5e7eb\"], borderWidth:0, hoverOffset:0 }]},\n        options:{ responsive:true, maintainAspectRatio:false, cutout:\"72%\", plugins:{legend:{display:false},tooltip:{enabled:false}} }\n      });\n    };\n    if (window.Chart) init();\n    else { const s=document.createElement(\"script\"); s.src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js\"; s.onload=init; document.head.appendChild(s); }\n    return ()=>{ if(chartRef.current){chartRef.current.destroy();chartRef.current=null;} };\n  },[totalNett, targetAmt]);\n\n  const handleAmtBlur = async () => {\n    if (!inputVal.trim()) return;\n    const n = parseNominal(inputVal.trim());\n    if (n!==null) { setInputVal(fmtFull(n)); return; }\n    setAmtLoading(true);\n    const r = await formatRpWithAI(inputVal.trim());\n    setAmtLoading(false);\n    const n2 = parseNominal(r);\n    setInputVal(n2!==null ? fmtFull(n2) : r);\n  };\n\n  const saveEdit = () => {\n    const n = parseNominal(inputVal.trim()) ?? parseRp(inputVal);\n    const yr = editYear.trim();\n    if (n>0 && yr) {\n      setTargets(prev=>({...prev,[yr]:n}));\n      if (!allYears.includes(yr)) setSelYear(yr);\n    }\n    setEditing(false);\n  };\n\n  const deleteTarget = (yr) => {\n    setTargets(prev=>{ const next={...prev}; delete next[yr]; return next; });\n    if (selYear===yr) setSelYear(allYears.filter(y=>y!==yr)[0]||currentYear);\n  };\n\n  const inpSt = {fontSize:13,padding:\"6px 10px\",border:\"0.5px solid var(--color-border-secondary)\",borderRadius:6,background:\"var(--color-background-primary)\",color:\"var(--color-text-primary)\",outline:\"none\"};\n\n  // Edit form\n  if (editing) return <div style={{display:\"flex\",flexDirection:\"column\",gap:10,maxWidth:360}}>\n    <div style={{fontSize:13,fontWeight:500,marginBottom:2}}>Set Target Income</div>\n    <div style={{display:\"flex\",gap:8}}>\n      <div style={{flex:1}}>\n        <div style={{fontSize:12,color:\"var(--color-text-secondary)\",marginBottom:4}}>Target (Rp)</div>\n        <input value={inputVal} onChange={e=>setInputVal(e.target.value)} onBlur={handleAmtBlur}\n          onKeyDown={e=>{if(e.key===\"Enter\")saveEdit();if(e.key===\"Escape\")setEditing(false);}}\n          placeholder={amtLoading?\"Memformat...\":\"Contoh: 120jt\"} style={{...inpSt,width:\"100%\"}}/>\n      </div>\n      <div style={{width:90}}>\n        <div style={{fontSize:12,color:\"var(--color-text-secondary)\",marginBottom:4}}>Tahun</div>\n        <input value={editYear} onChange={e=>setEditYear(e.target.value)} style={{...inpSt,width:\"100%\"}}/>\n      </div>\n    </div>\n    <div style={{display:\"flex\",gap:8}}>\n      <button onClick={saveEdit} style={{fontSize:13,padding:\"6px 16px\",background:\"#111\",color:\"#fff\",border:\"none\",borderRadius:6,cursor:\"pointer\"}}>Simpan</button>\n      <button onClick={()=>setEditing(false)} style={{fontSize:13,padding:\"6px 14px\"}}>Batal</button>\n    </div>\n  </div>;\n\n  // No targets at all\n  if (allYears.length===0 || (allYears.length===1&&!targets[allYears[0]])) return <div style={{textAlign:\"center\",padding:\"1rem 0\"}}>\n    <div style={{fontSize:13,color:\"var(--color-text-secondary)\",marginBottom:12}}>Belum ada target income yang ditetapkan.</div>\n    <button onClick={()=>{setInputVal(\"\");setEditYear(currentYear);setEditing(true);}} style={{fontSize:13,padding:\"6px 18px\"}}>+ Set Target</button>\n  </div>;\n\n  return <div>\n    {/* Year selector + add button — only shown when not controlled by parent */}\n    {!propYear && <div style={{display:\"flex\",alignItems:\"center\",gap:6,marginBottom:16,flexWrap:\"wrap\"}}>\n      {allYears.map(y=>(\n        <button key={y} onClick={()=>setSelYear(y)} style={{\n          fontSize:12,padding:\"3px 14px\",borderRadius:20,cursor:\"pointer\",border:\"1.5px solid\",\n          background:selYear===y?\"#111\":\"transparent\",\n          color:selYear===y?\"#fff\":\"var(--color-text-secondary)\",\n          borderColor:selYear===y?\"#111\":\"var(--color-border-secondary)\",\n          fontWeight:selYear===y?500:400,transition:\"all 0.15s\"\n        }}>{y}</button>\n      ))}\n      <button onClick={()=>{setInputVal(\"\");setEditYear(selYear);setEditing(true);}} style={{\n        fontSize:12,padding:\"3px 12px\",borderRadius:20,border:\"1.5px dashed var(--color-border-secondary)\",\n        background:\"transparent\",color:\"var(--color-text-secondary)\",cursor:\"pointer\",marginLeft:2\n      }}>+ Tahun baru</button>\n    </div>}\n\n    {/* No target for selected year */}\n    {!targetAmt ? <div style={{textAlign:\"center\",padding:\"1rem 0\"}}>\n      <div style={{fontSize:13,color:\"var(--color-text-secondary)\",marginBottom:10}}>Belum ada target untuk tahun {selYear}.</div>\n      <button onClick={()=>{setInputVal(\"\");setEditYear(selYear);setEditing(true);}} style={{fontSize:13,padding:\"6px 18px\"}}>+ Set Target {selYear}</button>\n    </div> : <div style={{display:\"flex\",alignItems:\"center\",gap:24,flexWrap:\"wrap\"}}>\n      {/* Donut */}\n      <div style={{position:\"relative\",width:140,height:140,flexShrink:0}}>\n        <canvas ref={canvasRef}/>\n        <div style={{position:\"absolute\",inset:0,display:\"flex\",flexDirection:\"column\",alignItems:\"center\",justifyContent:\"center\",pointerEvents:\"none\"}}>\n          <span style={{fontSize:24,fontWeight:500,color:\"var(--color-text-primary)\"}}>{pct}%</span>\n          <span style={{fontSize:11,color:\"var(--color-text-secondary)\"}}>tercapai</span>\n        </div>\n      </div>\n\n      {/* Stats */}\n      <div style={{flex:1,minWidth:200,display:\"flex\",flexDirection:\"column\",gap:8}}>\n        <div style={{display:\"grid\",gridTemplateColumns:\"1fr 1fr\",gap:8}}>\n          <div style={{background:\"var(--color-background-secondary)\",borderRadius:8,padding:\"10px 14px\"}}>\n            <div style={{fontSize:11,color:\"var(--color-text-secondary)\",marginBottom:4}}>Target {selYear}</div>\n            <div style={{fontSize:16,fontWeight:500,color:\"var(--color-text-primary)\"}}>Rp {fmtFull(targetAmt)}</div>\n          </div>\n          <div style={{background:\"var(--color-background-secondary)\",borderRadius:8,padding:\"10px 14px\"}}>\n            <div style={{fontSize:11,color:\"var(--color-text-secondary)\",marginBottom:4}}>Sudah masuk</div>\n            <div style={{fontSize:16,fontWeight:500,color:\"#22c55e\"}}>Rp {fmtFull(totalNett)}</div>\n          </div>\n        </div>\n\n        {/* Achieved or remaining */}\n        {achievedMonth\n          ? <div style={{background:\"#f0fdf4\",border:\"1.5px solid #86efac\",borderRadius:8,padding:\"10px 14px\",display:\"flex\",alignItems:\"center\",gap:8}}>\n              <span style={{fontSize:18}}>🎯</span>\n              <div>\n                <div style={{fontSize:13,fontWeight:500,color:\"#166534\"}}>Target tercapai di bulan {MONTHS[achievedMonth]}!</div>\n                <div style={{fontSize:11,color:\"#16a34a\",marginTop:2}}>Total {selYear}: Rp {fmtFull(totalNett)}</div>\n              </div>\n            </div>\n          : <div style={{background:\"var(--color-background-secondary)\",borderRadius:8,padding:\"10px 14px\"}}>\n              <div style={{fontSize:11,color:\"var(--color-text-secondary)\",marginBottom:4}}>Sisa target</div>\n              <div style={{fontSize:15,fontWeight:500,color:\"var(--color-text-primary)\"}}>Rp {fmtFull(remaining)}</div>\n              {perMonth>0&&<div style={{fontSize:11,color:\"var(--color-text-secondary)\",marginTop:3}}>≈ Rp {fmtFull(perMonth)}/bulan · {monthsLeft} bulan tersisa</div>}\n            </div>\n        }\n\n        {/* Edit / delete actions */}\n        <div style={{display:\"flex\",gap:8,alignItems:\"center\"}}>\n          <button onClick={()=>{setInputVal(fmtFull(targetAmt));setEditYear(selYear);setEditing(true);}} style={{fontSize:12,padding:\"4px 12px\"}}>Ubah target</button>\n          <button onClick={()=>deleteTarget(selYear)} style={{fontSize:12,padding:\"4px 12px\",color:\"var(--color-text-danger)\",borderColor:\"var(--color-border-danger)\"}}>Hapus</button>\n        </div>\n      </div>\n    </div>}\n  </div>;\n}\n\nfunction AnalysisTabContent({projects, allProjects, year, editMode, order, setOrder, isMonth=false}) {\n  const allCards = [\n    {id:\"incomemonthly\",    title:\"Income per Bulan per Platform\",      render:()=><IncomeStackedBar projects={projects}/>,              defaultOpen:true,  excludeMonth:true},\n    {id:\"platform\",         title:\"Total Proyek\",                        render:()=><PlatformStackedBar projects={projects}/>,             defaultOpen:true},\n    {id:\"income\",           title:\"Total Income per Platform\",           render:()=><PlatformIncomeBar projects={projects}/>,              defaultOpen:true},\n    {id:\"incomevsexpenses\", title:\"Income vs Expenses\",                  render:()=><IncomeVsExpenses projects={projects}/>,               defaultOpen:true,  excludeMonth:true},\n    {id:\"incometarget\",    title:\"Target Income\",                        render:()=><IncomeTarget projects={projects} year={year}/>,                    defaultOpen:false, excludeMonth:true},\n    {id:\"monthly\",          title:\"Jumlah Proyek & Total Hours per Bulan\", render:()=><MonthlyComboChart projects={projects} year={year}/>, defaultOpen:false, requireYear:true, excludeMonth:true},\n    {id:\"clients\",     title:\"Client Orders\",                      render:()=><ClientOrderList projects={projects}/>,              defaultOpen:false},\n    {id:\"scopetype\",   title:\"Project Type & Scope of Work\",       render:()=><ProjectTypeScopeTable projects={projects}/>,        defaultOpen:false},\n    {id:\"hargam2\",     title:\"Harga /m²\",                         render:()=><HargaM2Tab projects={projects}/>,                   defaultOpen:false},\n    {id:\"area\",        title:\"Area\",                               render:()=><AreaTab projects={projects}/>,                      defaultOpen:false},\n    {id:\"durasi\",      title:\"Durasi Pengerjaan\",                  render:()=><DurasiTab projects={projects}/>,                    defaultOpen:false},\n  ];\n\n  const [dragging, setDragging] = useState(null);\n  const [dragOver, setDragOver] = useState(null);\n\n  const visible = order\n    .map(id=>allCards.find(c=>c.id===id))\n    .filter(c=>c && (!c.requireYear || year) && (!isMonth || !c.excludeMonth));\n\n  const onDragStart = (e, id) => { setDragging(id); e.dataTransfer.effectAllowed=\"move\"; };\n  const onDragOver  = (e, id) => { e.preventDefault(); e.dataTransfer.dropEffect=\"move\"; if(id!==dragging) setDragOver(id); };\n  const onDrop = (e, targetId) => {\n    e.preventDefault();\n    if (!dragging||dragging===targetId) { setDragging(null); setDragOver(null); return; }\n    const newOrder=[...order];\n    const fromIdx=newOrder.indexOf(dragging), toIdx=newOrder.indexOf(targetId);\n    newOrder.splice(fromIdx,1); newOrder.splice(toIdx,0,dragging);\n    setOrder(newOrder); setDragging(null); setDragOver(null);\n  };\n  const onDragEnd = () => { setDragging(null); setDragOver(null); };\n\n  return <div style={{display:\"flex\",flexDirection:\"column\",gap:12}}>\n    {visible.map(card=>(\n      <div\n        key={card.id}\n        draggable={editMode}\n        onDragStart={editMode?e=>onDragStart(e,card.id):undefined}\n        onDragOver={editMode?e=>onDragOver(e,card.id):undefined}\n        onDrop={editMode?e=>onDrop(e,card.id):undefined}\n        onDragEnd={editMode?onDragEnd:undefined}\n        style={{opacity:dragging===card.id?0.4:1, outline:dragOver===card.id?\"2px dashed #aaa\":\"none\", outlineOffset:2, borderRadius:12, cursor:editMode?\"grab\":\"default\", transition:\"opacity 0.15s\"}}\n      >\n        <CollapsibleCard title={card.title} defaultOpen={card.defaultOpen} dragIcon={editMode?\"⠿\":null}>\n          {card.render()}\n        </CollapsibleCard>\n      </div>\n    ))}\n  </div>;\n}\n\nfunction AllTimeTab({projects, editMode, order, setOrder}) {\n  return <AnalysisTabContent projects={projects} editMode={editMode} order={order} setOrder={setOrder}/>;\n}\n\nconst MONTH_LABELS = [\"\",\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"Mei\",\"Jun\",\"Jul\",\"Agu\",\"Sep\",\"Okt\",\"Nov\",\"Des\"];\n\nfunction MonthlyComboChart({projects, year}) {\n  const canvasRef = useRef(null);\n  const chartRef = useRef(null);\n\n  const months = Array.from({length:12},(_,i)=>i+1);\n  const data = months.map(m=>{\n    const key = `${year}-${String(m).padStart(2,\"0\")}`;\n    const ps = projects.filter(p=>(p.startDate||\"\").startsWith(key));\n    const count = ps.length;\n    const hours = ps.reduce((s,p)=>s+(parseFloat(p.hours)||0),0);\n    return {m, label:MONTH_LABELS[m], count, hours};\n  });\n\n  // Hanya tampilkan bulan yang ada datanya\n  const activeData = data.filter(d=>d.count>0||d.hours>0);\n  const labels = activeData.map(d=>d.label);\n  const countData = activeData.map(d=>d.count);\n  const hoursData = activeData.map(d=>d.hours);\n\n  useEffect(()=>{\n    if (!canvasRef.current) return;\n    // Destroy existing chart\n    if (chartRef.current) { chartRef.current.destroy(); chartRef.current=null; }\n\n    // Dynamically load Chart.js if not present\n    const initChart = () => {\n      if (!window.Chart) return;\n\n      const labelPlugin = {\n        id: \"labelPlugin\",\n        afterDatasetsDraw(chart) {\n          const {ctx} = chart;\n          chart.data.datasets.forEach((ds, i) => {\n            const meta = chart.getDatasetMeta(i);\n            meta.data.forEach((el, j) => {\n              const val = ds.data[j];\n              if (!val) return;\n              const x = el.x;\n              const top = el.y;\n              ctx.save();\n              ctx.font = \"500 10px sans-serif\";\n              ctx.textAlign = \"center\";\n              ctx.textBaseline = \"bottom\";\n              if (ds.yAxisID === \"yHours\") {\n                ctx.fillStyle = \"#b45309\";\n                ctx.fillText(val, x, top - 3);\n              } else {\n                ctx.fillStyle = \"#185FA5\";\n                ctx.fillText(val, x, top - 3);\n              }\n              ctx.restore();\n            });\n          });\n        }\n      };\n\n      chartRef.current = new window.Chart(canvasRef.current, {\n        type: \"bar\",\n        plugins: [labelPlugin],\n        data: {\n          labels,\n          datasets: [\n            {\n              label: \"Jumlah Proyek\",\n              data: countData,\n              backgroundColor: \"#378ADD\",\n              borderRadius: 4,\n              yAxisID: \"yCount\",\n              order: 1,\n              barPercentage: 0.3,\n              categoryPercentage: 0.65,\n            },\n            {\n              label: \"Total Hours\",\n              data: hoursData,\n              backgroundColor: \"#EF9F27\",\n              borderRadius: 4,\n              yAxisID: \"yHours\",\n              order: 2,\n              barPercentage: 0.5,\n              categoryPercentage: 0.65,\n            }\n          ]\n        },\n        options: {\n          responsive: true,\n          maintainAspectRatio: false,\n          layout: { padding: { top: 16 } },\n          plugins: { legend: { display: false } },\n          scales: {\n            x: {\n              grid: { color: \"rgba(128,128,128,0.1)\" },\n              ticks: { font: { size: 11 }, color: \"#888\" }\n            },\n            yCount: {\n              position: \"left\",\n              grid: { color: \"rgba(128,128,128,0.1)\" },\n              ticks: { font: { size: 11 }, color: \"#378ADD\", stepSize: 1, precision: 0 },\n              title: { display: true, text: \"Jumlah Proyek\", font: { size: 11 }, color: \"#378ADD\" },\n              min: 0,\n            },\n            yHours: {\n              position: \"right\",\n              grid: { drawOnChartArea: false },\n              ticks: { font: { size: 11 }, color: \"#EF9F27\" },\n              title: { display: true, text: \"Total Hours\", font: { size: 11 }, color: \"#EF9F27\" },\n              min: 0,\n            }\n          }\n        }\n      });\n    };\n\n    if (window.Chart) {\n      initChart();\n    } else {\n      const script = document.createElement(\"script\");\n      script.src = \"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js\";\n      script.onload = initChart;\n      document.head.appendChild(script);\n    }\n\n    return () => { if (chartRef.current) { chartRef.current.destroy(); chartRef.current=null; } };\n  }, [year, JSON.stringify(activeData)]);\n\n  if (activeData.length===0) return <div style={{fontSize:13,color:\"var(--color-text-secondary)\",textAlign:\"center\",padding:\"2rem 0\"}}>Tidak ada data untuk tahun ini.</div>;\n\n  return <div>\n    <div style={{display:\"flex\",gap:16,marginBottom:12,flexWrap:\"wrap\"}}>\n      <div style={{display:\"flex\",alignItems:\"center\",gap:6,fontSize:12,color:\"var(--color-text-secondary)\"}}><span style={{width:12,height:12,borderRadius:3,background:\"#378ADD\",display:\"inline-block\"}}/> Jumlah Proyek (kiri)</div>\n      <div style={{display:\"flex\",alignItems:\"center\",gap:6,fontSize:12,color:\"var(--color-text-secondary)\"}}><span style={{width:12,height:12,borderRadius:3,background:\"#EF9F27\",display:\"inline-block\"}}/> Total Hours (kanan)</div>\n    </div>\n    <div style={{position:\"relative\",width:\"100%\",height:220}}>\n      <canvas ref={canvasRef}/>\n    </div>\n  </div>;\n}\n\nfunction PerTahunTab({projects, editMode, order, setOrder}) {\n  const years = [...new Set(projects.map(p=>(p.startDate||\"\").slice(0,4)).filter(Boolean))].sort().reverse();\n  const [year,setYear] = useState(years[0]||\"\");\n  const filtered = year ? projects.filter(p=>\n    (p.startDate||\"\").startsWith(year) || (p.endDate||\"\").startsWith(year)\n  ) : [];\n  return <div>\n    <div style={{display:\"flex\",alignItems:\"center\",gap:10,marginBottom:16}}>\n      <span style={{fontWeight:500,fontSize:14}}>Tahun</span>\n      <select value={year} onChange={e=>setYear(e.target.value)} style={{fontSize:13,padding:\"4px 8px\",border:\"0.5px solid var(--color-border-secondary)\",borderRadius:6}}>\n        {years.length===0&&<option value=\"\">—</option>}\n        {years.map(y=><option key={y} value={y}>{y}</option>)}\n      </select>\n    </div>\n    <AnalysisTabContent projects={filtered} year={year} editMode={editMode} order={order} setOrder={setOrder}/>\n  </div>;\n}\n\nfunction PerBulanTab({projects, editMode, order, setOrder}) {\n  const months = [...new Set(projects.map(p=>(p.startDate||\"\").slice(0,7)).filter(Boolean))].sort().reverse();\n  const [month,setMonth] = useState(months[0]||\"\");\n  const filtered = month ? projects.filter(p=>(p.startDate||\"\").startsWith(month)) : [];\n  const label = m => { if(!m) return \"—\"; const [y,mo]=m.split(\"-\"); return `${[\"\",\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"Mei\",\"Jun\",\"Jul\",\"Agu\",\"Sep\",\"Okt\",\"Nov\",\"Des\"][parseInt(mo)]} ${y}`; };\n  return <div>\n    <div style={{display:\"flex\",alignItems:\"center\",gap:10,marginBottom:16}}>\n      <span style={{fontWeight:500,fontSize:14}}>Bulan</span>\n      <select value={month} onChange={e=>setMonth(e.target.value)} style={{fontSize:13,padding:\"4px 8px\",border:\"0.5px solid var(--color-border-secondary)\",borderRadius:6}}>\n        {months.length===0&&<option value=\"\">—</option>}\n        {months.map(m=><option key={m} value={m}>{label(m)}</option>)}\n      </select>\n    </div>\n    <AnalysisTabContent projects={filtered} editMode={editMode} order={order} setOrder={setOrder} isMonth={true}/>\n  </div>;\n}\n\nfunction YearComparisonModal({projects, onClose}) {\n  const allYears = [...new Set(projects.map(p=>(p.startDate||\"\").slice(0,4)).filter(Boolean))].sort().reverse();\n  const [yr1, setYr1] = useState(allYears[1]||allYears[0]||\"\");\n  const [yr2, setYr2] = useState(allYears[0]||\"\");\n  const canvasRef = useRef(null);\n  const chartRef  = useRef(null);\n  const canvasRef2 = useRef(null);\n  const chartRef2  = useRef(null);\n\n  const p1 = projects.filter(p=>(p.startDate||\"\").startsWith(yr1));\n  const p2 = projects.filter(p=>(p.startDate||\"\").startsWith(yr2));\n\n  const parseGross = v => { if (!v) return 0; return parseInt(String(v).replace(/\\D/g,\"\"))||0; };\n  const parseFee   = arr => normalizeFeeArr(arr).reduce((s,f)=>{ const n=parseInt(String(f.name||\"\").replace(/\\D/g,\"\"))||0; return s+n; },0);\n\n  const stat = (ps) => ({\n    income:    ps.reduce((s,p)=>s+parseRp(p.priceRp),0),\n    gross:     ps.reduce((s,p)=>s+parseGross(p.grossPrice),0),\n    expenses:  ps.reduce((s,p)=>s+parseFee(p.fee),0),\n    count:     ps.length,\n    completed: ps.filter(p=>p.status===\"Completed\").length,\n    hours:     ps.reduce((s,p)=>s+(parseFloat(p.hours)||0),0),\n  });\n  const s1 = stat(p1), s2 = stat(p2);\n\n  const delta = (a,b) => {\n    if (!a||!b) return null;\n    const d = Math.round((b-a)/a*100);\n    return {pct:d, up:d>=0};\n  };\n\n  const months = [\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"Mei\",\"Jun\",\"Jul\",\"Agu\",\"Sep\",\"Okt\",\"Nov\",\"Des\"];\n  const monthIncome = (ps, m) => ps.filter(p=>(p.startDate||\"\").slice(5,7)===String(m+1).padStart(2,\"0\")).reduce((s,p)=>s+parseRp(p.priceRp),0);\n  const monthCount  = (ps, m) => ps.filter(p=>(p.startDate||\"\").slice(5,7)===String(m+1).padStart(2,\"0\")).length;\n\n  const dep = [yr1, yr2, JSON.stringify(p1.map(p=>p.id)), JSON.stringify(p2.map(p=>p.id))];\n\n  useEffect(()=>{\n    if (!canvasRef.current) return;\n    if (chartRef.current){chartRef.current.destroy();chartRef.current=null;}\n    const init = () => {\n      if (!window.Chart||!canvasRef.current) return;\n      chartRef.current = new window.Chart(canvasRef.current,{\n        type:\"bar\",\n        data:{ labels:months, datasets:[\n          { label:yr1||\"Tahun 1\", data:months.map((_,i)=>monthIncome(p1,i)), backgroundColor:\"#378ADD\", borderRadius:2, barPercentage:0.75, categoryPercentage:0.65 },\n          { label:yr2||\"Tahun 2\", data:months.map((_,i)=>monthIncome(p2,i)), backgroundColor:\"#1D9E75\", borderRadius:2, barPercentage:0.75, categoryPercentage:0.65 }\n        ]},\n        options:{\n          responsive:true, maintainAspectRatio:false, layout:{padding:{top:8}},\n          plugins:{ legend:{display:false}, tooltip:{callbacks:{label:ctx=>`${ctx.dataset.label}: Rp ${fmtRp(ctx.parsed.y)}`}} },\n          scales:{\n            x:{ grid:{color:\"rgba(128,128,128,0.08)\"}, ticks:{font:{size:10},color:\"#888\",autoSkip:false,maxRotation:0} },\n            y:{ grid:{color:\"rgba(128,128,128,0.08)\"}, ticks:{font:{size:10},color:\"#888\",callback:v=>v>=1000000?`${(v/1000000).toFixed(0)}jt`:v>=1000?`${Math.round(v/1000)}rb`:`${v}`}, min:0 }\n          }\n        }\n      });\n    };\n    if (window.Chart) init();\n    else { const s=document.createElement(\"script\"); s.src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js\"; s.onload=init; document.head.appendChild(s); }\n    return ()=>{ if(chartRef.current){chartRef.current.destroy();chartRef.current=null;} };\n  },dep);\n\n  useEffect(()=>{\n    if (!canvasRef2.current) return;\n    if (chartRef2.current){chartRef2.current.destroy();chartRef2.current=null;}\n    const init = () => {\n      if (!window.Chart||!canvasRef2.current) return;\n      chartRef2.current = new window.Chart(canvasRef2.current,{\n        type:\"bar\",\n        data:{ labels:months, datasets:[\n          { label:yr1||\"Tahun 1\", data:months.map((_,i)=>monthCount(p1,i)), backgroundColor:\"#378ADD\", borderRadius:2, barPercentage:0.75, categoryPercentage:0.65 },\n          { label:yr2||\"Tahun 2\", data:months.map((_,i)=>monthCount(p2,i)), backgroundColor:\"#1D9E75\", borderRadius:2, barPercentage:0.75, categoryPercentage:0.65 }\n        ]},\n        options:{\n          responsive:true, maintainAspectRatio:false, layout:{padding:{top:8}},\n          plugins:{ legend:{display:false}, tooltip:{callbacks:{label:ctx=>`${ctx.dataset.label}: ${ctx.parsed.y} proyek`}} },\n          scales:{\n            x:{ grid:{color:\"rgba(128,128,128,0.08)\"}, ticks:{font:{size:10},color:\"#888\",autoSkip:false,maxRotation:0} },\n            y:{ grid:{color:\"rgba(128,128,128,0.08)\"}, ticks:{font:{size:10},color:\"#888\",stepSize:1}, min:0 }\n          }\n        }\n      });\n    };\n    if (window.Chart) init(); else setTimeout(init, 500);\n    return ()=>{ if(chartRef2.current){chartRef2.current.destroy();chartRef2.current=null;} };\n  },dep);\n\n  const selSt = {fontSize:13,padding:\"6px 10px\",border:\"1.5px solid #000\",borderRadius:8,background:\"var(--color-background-primary)\",color:\"var(--color-text-primary)\",cursor:\"pointer\",fontWeight:500};\n  const metricSt = {background:\"var(--color-background-secondary)\",borderRadius:8,padding:\"10px 14px\",flex:1};\n  const rowSt = {display:\"flex\",alignItems:\"center\",justifyContent:\"space-between\",padding:\"9px 14px\",background:\"var(--color-background-primary)\",borderRadius:8,border:\"0.5px solid var(--color-border-tertiary)\"};\n\n  const DeltaBadge = ({a,b}) => {\n    const d = delta(a,b);\n    if (!d) return null;\n    return <span style={{fontSize:10,fontWeight:500,borderRadius:20,padding:\"2px 7px\",background:d.up?\"#f0fdf4\":\"#fef2f2\",color:d.up?\"#166534\":\"#991b1b\",marginLeft:6}}>{d.up?\"+\":\"\"}{d.pct}%</span>;\n  };\n\n  return <div onClick={onClose} style={{position:\"fixed\",inset:0,background:\"rgba(0,0,0,0.55)\",zIndex:9999,display:\"flex\",alignItems:\"center\",justifyContent:\"center\",padding:\"1rem\"}}>\n    <div onClick={e=>e.stopPropagation()} style={{background:\"rgba(255,255,255,0.92)\",backdropFilter:\"blur(12px)\",WebkitBackdropFilter:\"blur(12px)\",borderRadius:16,padding:\"24px 28px\",width:\"100%\",maxWidth:640,maxHeight:\"90vh\",overflowY:\"auto\",boxShadow:\"0 8px 40px rgba(0,0,0,0.18)\"}}>\n\n      {/* Header */}\n      <div style={{display:\"flex\",alignItems:\"center\",justifyContent:\"space-between\",marginBottom:20}}>\n        <span style={{fontWeight:500,fontSize:16}}>Perbandingan Tahun</span>\n        <button onClick={onClose} style={{padding:\"4px 6px\",border:\"none\",background:\"transparent\",cursor:\"pointer\",color:\"var(--color-text-secondary)\"}}><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M18 6L6 18M6 6l12 12\"/></svg></button>\n      </div>\n\n      {/* Year selectors */}\n      <div style={{display:\"flex\",alignItems:\"center\",gap:12,marginBottom:20}}>\n        <div style={{display:\"flex\",alignItems:\"center\",gap:8}}>\n          <span style={{width:10,height:10,borderRadius:2,background:\"#378ADD\",display:\"inline-block\",flexShrink:0}}/>\n          <select value={yr1} onChange={e=>setYr1(e.target.value)} style={selSt}>\n            {allYears.map(y=><option key={y} value={y}>{y}</option>)}\n          </select>\n        </div>\n        <span style={{fontSize:13,color:\"var(--color-text-secondary)\"}}>vs</span>\n        <div style={{display:\"flex\",alignItems:\"center\",gap:8}}>\n          <span style={{width:10,height:10,borderRadius:2,background:\"#1D9E75\",display:\"inline-block\",flexShrink:0}}/>\n          <select value={yr2} onChange={e=>setYr2(e.target.value)} style={selSt}>\n            {allYears.map(y=><option key={y} value={y}>{y}</option>)}\n          </select>\n        </div>\n      </div>\n\n      {/* KPI cards */}\n      <div style={{display:\"grid\",gridTemplateColumns:\"repeat(3,1fr)\",gap:10,marginBottom:20}}>\n        {[\n          {label:\"Total Income\", a:s1.income, b:s2.income, fmt:v=>`Rp ${fmtRp(v)}`},\n          {label:\"Jumlah Proyek\", a:s1.count, b:s2.count, fmt:v=>`${v} proyek`},\n          {label:\"Total Hours\", a:s1.hours, b:s2.hours, fmt:v=>`${Math.round(v)} jam`},\n        ].map(({label,a,b,fmt})=><div key={label} style={{...metricSt,background:\"#E6F1FB\"}}>\n          <div style={{fontSize:11,color:\"#185FA5\",marginBottom:6,textTransform:\"uppercase\",letterSpacing:\"0.05em\",fontWeight:500}}>{label}</div>\n          <div style={{display:\"flex\",flexDirection:\"column\",gap:4}}>\n            <div style={{display:\"flex\",alignItems:\"center\",gap:6}}>\n              <span style={{width:8,height:8,borderRadius:2,background:\"#378ADD\",display:\"inline-block\",flexShrink:0}}/>\n              <span style={{fontSize:13,fontWeight:500,color:\"var(--color-text-primary)\"}}>{fmt(a)}</span>\n            </div>\n            <div style={{display:\"flex\",alignItems:\"center\",gap:6}}>\n              <span style={{width:8,height:8,borderRadius:2,background:\"#1D9E75\",display:\"inline-block\",flexShrink:0}}/>\n              <span style={{fontSize:13,fontWeight:500,color:\"var(--color-text-primary)\"}}>{fmt(b)}</span>\n              <DeltaBadge a={a} b={b}/>\n            </div>\n          </div>\n        </div>)}\n      </div>\n\n      {/* Ringkasan Keuangan */}\n      <div style={{fontSize:11,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",letterSpacing:\"0.06em\",fontWeight:500,marginBottom:8}}>Ringkasan Keuangan</div>\n      <div style={{display:\"flex\",flexDirection:\"column\",gap:6,marginBottom:20}}>\n        {[\n          {label:\"Gross Income\",   a:s1.gross,    b:s2.gross,    fmt:v=>`Rp ${fmtRp(v)}`, danger:false},\n          {label:\"Nett Income\",    a:s1.income,   b:s2.income,   fmt:v=>`Rp ${fmtRp(v)}`, danger:false},\n          {label:\"Total Expenses\", a:s1.expenses, b:s2.expenses, fmt:v=>`Rp ${fmtRp(v)}`, danger:true},\n        ].map(({label,a,b,fmt,danger})=><div key={label} style={rowSt}>\n          <span style={{fontSize:12,color:\"var(--color-text-secondary)\",fontWeight:500,minWidth:110}}>{label}</span>\n          <div style={{display:\"flex\",gap:20,alignItems:\"center\"}}>\n            <div style={{display:\"flex\",alignItems:\"center\",gap:6}}>\n              <span style={{width:8,height:8,borderRadius:2,background:\"#378ADD\",display:\"inline-block\",flexShrink:0}}/>\n              <span style={{fontSize:13,fontWeight:500,color:danger?\"var(--color-text-danger)\":\"var(--color-text-primary)\"}}>{fmt(a)}</span>\n            </div>\n            <div style={{display:\"flex\",alignItems:\"center\",gap:6}}>\n              <span style={{width:8,height:8,borderRadius:2,background:\"#1D9E75\",display:\"inline-block\",flexShrink:0}}/>\n              <span style={{fontSize:13,fontWeight:500,color:danger?\"var(--color-text-danger)\":\"var(--color-text-primary)\"}}>{fmt(b)}</span>\n              <DeltaBadge a={a} b={b}/>\n            </div>\n          </div>\n        </div>)}\n      </div>\n\n      {/* Bar chart income per bulan */}\n      <div style={{fontSize:11,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",letterSpacing:\"0.06em\",fontWeight:500,marginBottom:10}}>Income per bulan</div>\n      <div style={{position:\"relative\",width:\"100%\",height:180}}>\n        <canvas ref={canvasRef}/>\n      </div>\n\n      {/* Bar chart total proyek per bulan */}\n      <div style={{fontSize:11,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",letterSpacing:\"0.06em\",fontWeight:500,margin:\"20px 0 10px\"}}>Total proyek per bulan</div>\n      <div style={{position:\"relative\",width:\"100%\",height:140}}>\n        <canvas ref={canvasRef2}/>\n      </div>\n\n      {/* Proyek breakdown — dot + angka */}\n      <div style={{marginTop:20,display:\"grid\",gridTemplateColumns:\"1fr 1fr 1fr\",gap:16}}>\n        {[\n          {label:\"Per Platform\", cats:[\"Upwork\",\"Fiverr\",\"Freelance\"],  field:\"platform\"},\n          {label:\"Per Status\",   cats:statusOptions,                     field:\"status\"},\n          {label:\"Per Scope\",    cats:[...new Set(projects.map(p=>p.jobType).filter(Boolean))].sort(), field:\"jobType\"},\n        ].map(({label,cats,field})=><div key={label}>\n          <div style={{fontSize:11,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",letterSpacing:\"0.06em\",fontWeight:500,marginBottom:8}}>{label}</div>\n          <div style={{display:\"flex\",flexDirection:\"column\",gap:7}}>\n            {cats.map(cat=>{\n              const c1 = p1.filter(p=>p[field]===cat).length;\n              const c2 = p2.filter(p=>p[field]===cat).length;\n              if (c1===0&&c2===0) return null;\n              return <div key={cat} style={{display:\"flex\",alignItems:\"center\",justifyContent:\"space-between\"}}>\n                <span style={{fontSize:12,color:\"var(--color-text-secondary)\",overflow:\"hidden\",textOverflow:\"ellipsis\",whiteSpace:\"nowrap\",maxWidth:80}}>{cat}</span>\n                <div style={{display:\"flex\",gap:8,alignItems:\"center\",flexShrink:0}}>\n                  <span style={{fontSize:13,fontWeight:500,color:\"#378ADD\"}}>{c1}</span>\n                  <span style={{fontSize:11,color:\"var(--color-text-tertiary)\"}}>/</span>\n                  <span style={{fontSize:13,fontWeight:500,color:\"#1D9E75\"}}>{c2}</span>\n                </div>\n              </div>;\n            })}\n          </div>\n        </div>)}\n      </div>\n\n    </div>\n  </div>;\n}\n\nfunction AnalysisPage({projects}) {\n  const [mainTab,setMainTab] = useState(\"pertahun\");\n  const [showCompare, setShowCompare] = useState(false);\n\n  const defaultOrder = [\"incomemonthly\",\"platform\",\"income\",\"incomevsexpenses\",\"incometarget\",\"monthly\",\"clients\",\"scopetype\",\"hargam2\",\"area\",\"durasi\",\"upwork\"];\n  const [order, setOrder] = useState(()=>{\n    try {\n      const s=window._analysisOrder;\n      if (!s) return defaultOrder;\n      const saved = JSON.parse(s);\n      const newCards = defaultOrder.filter(id=>!saved.includes(id));\n      if (newCards.length===0) return saved;\n      const result = [...saved];\n      newCards.forEach(id=>{\n        const idx = defaultOrder.indexOf(id);\n        const anchor = defaultOrder.slice(0,idx).reverse().find(a=>result.includes(a));\n        const insertAt = anchor ? result.indexOf(anchor)+1 : 0;\n        result.splice(insertAt,0,id);\n      });\n      return result;\n    } catch(e){ return defaultOrder; }\n  });\n  const [editMode, setEditMode] = useState(false);\n  useEffect(()=>{ window._analysisOrder=JSON.stringify(order); },[order]);\n\n  return <div>\n    <div style={{display:\"flex\",alignItems:\"center\",justifyContent:\"space-between\",marginBottom:16}}>\n      <div style={{fontWeight:500,fontSize:20}}>Analysis</div>\n      <div style={{display:\"flex\",gap:8}}>\n        <button\n          onClick={()=>setShowCompare(true)}\n          style={{fontSize:12,padding:\"4px 14px\",borderRadius:20,border:\"0.5px solid\",cursor:\"pointer\",background:\"transparent\",color:\"var(--color-text-secondary)\",borderColor:\"var(--color-border-secondary)\"}}>\n          ⇄ Bandingkan Tahun\n        </button>\n        <button\n          onClick={()=>setEditMode(v=>!v)}\n          style={{fontSize:12,padding:\"4px 14px\",borderRadius:20,border:\"0.5px solid\",cursor:\"pointer\",\n            background:editMode?\"#222\":\"transparent\",\n            color:editMode?\"#fff\":\"var(--color-text-secondary)\",\n            borderColor:editMode?\"#222\":\"var(--color-border-secondary)\"}}>\n          {editMode?\"✓ Selesai\":\"⠿ Atur Urutan\"}\n        </button>\n      </div>\n    </div>\n    {showCompare&&<YearComparisonModal projects={projects} onClose={()=>setShowCompare(false)}/>}\n    <div style={{display:\"flex\",gap:0,marginBottom:20,borderBottom:\"0.5px solid var(--color-border-tertiary)\"}}>\n      {[[\"pertahun\",\"Per Tahun\"],[\"perbulan\",\"Per Bulan\"]].map(([id,label])=>\n        <button key={id} onClick={()=>setMainTab(id)} style={tabBtn(mainTab===id)}>{label}</button>\n      )}\n      <button onClick={()=>setMainTab(\"alltime\")} style={{...tabBtn(mainTab===\"alltime\"),marginLeft:\"auto\"}}> All Time</button>\n    </div>\n    {mainTab===\"alltime\"&&<AllTimeTab projects={projects} editMode={editMode} order={order} setOrder={setOrder}/>}\n    {mainTab===\"pertahun\"&&<PerTahunTab projects={projects} editMode={editMode} order={order} setOrder={setOrder}/>}\n    {mainTab===\"perbulan\"&&<PerBulanTab projects={projects} editMode={editMode} order={order} setOrder={setOrder}/>}\n  </div>;\n}\n\nfunction CollapsibleCard({title,children,defaultOpen=true,dragIcon=null}) {\n  const [open,setOpen] = useState(defaultOpen);\n  return <div style={{border:\"2px solid #000\",borderRadius:12,overflow:\"hidden\",boxShadow:\"0 2px 8px rgba(0,0,0,0.07)\"}}>\n    <div onClick={()=>setOpen(v=>!v)} style={{display:\"flex\",alignItems:\"center\",justifyContent:\"space-between\",padding:\"12px 16px\",cursor:\"pointer\",background:\"var(--color-background-secondary)\",userSelect:\"none\"}}>\n      <span style={{display:\"flex\",alignItems:\"center\",gap:8}}>\n        {dragIcon&&<span style={{fontSize:16,letterSpacing:2,color:\"#bbb\",cursor:\"grab\"}} onClick={e=>e.stopPropagation()}>{dragIcon}</span>}\n        <span style={{fontWeight:500,fontSize:14}}>{title}</span>\n      </span>\n      <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" style={{transform:open?\"rotate(180deg)\":\"rotate(0deg)\",transition:\"transform 0.2s\"}}><polyline points=\"6 9 12 15 18 9\"/></svg>\n    </div>\n    {open&&<div style={{padding:\"16px\"}}>{children}</div>}\n  </div>;\n}\n\nfunction TabelPage({projects}) {\n  return <div>\n    <div style={{fontWeight:500,fontSize:20,marginBottom:20}}>Tabel</div>\n    <CollapsibleCard title=\"Area\">\n      <AreaTab projects={projects}/>\n    </CollapsibleCard>\n    <CollapsibleCard title=\"Durasi Pengerjaan\" defaultOpen={false}>\n      <DurasiTab projects={projects}/>\n    </CollapsibleCard>\n  </div>;\n}\n\nconst COUNTRY_ISO = {\n  \"Afghanistan\":\"004\",  \"Albania\":\"008\",  \"Algeria\":\"012\",  \"Angola\":\"024\",  \"Argentina\":\"032\",\n  \"Armenia\":\"051\",  \"Australia\":\"036\",  \"Austria\":\"040\",  \"Azerbaijan\":\"031\",  \"Bahamas\":\"044\",\n  \"Bahrain\":\"048\",  \"Bangladesh\":\"050\",  \"Barbados\":\"052\",  \"Belarus\":\"112\",  \"Belgium\":\"056\",\n  \"Bolivia\":\"068\",  \"Bosnia\":\"070\",  \"Botswana\":\"072\",  \"Brazil\":\"076\",  \"Brunei\":\"096\",\n  \"Bulgaria\":\"100\",  \"Cambodia\":\"116\",  \"Cameroon\":\"120\",  \"Canada\":\"124\",  \"Chile\":\"152\",\n  \"China\":\"156\",  \"Colombia\":\"170\",  \"Costa Rica\":\"188\",  \"Croatia\":\"191\",  \"Cuba\":\"192\",\n  \"Cyprus\":\"196\",  \"Czech Republic\":\"203\",  \"Denmark\":\"208\",  \"Dominican Republic\":\"214\",  \"Ecuador\":\"218\",\n  \"Egypt\":\"818\",  \"El Salvador\":\"222\",  \"Estonia\":\"233\",  \"Ethiopia\":\"231\",  \"Fiji\":\"242\",\n  \"Finland\":\"246\",  \"France\":\"250\",  \"Georgia\":\"268\",  \"Germany\":\"276\",  \"Ghana\":\"288\",\n  \"Greece\":\"300\",  \"Guatemala\":\"320\",  \"Haiti\":\"332\",  \"Honduras\":\"340\",  \"Hong Kong\":\"344\",\n  \"Hungary\":\"348\",  \"Iceland\":\"352\",  \"India\":\"356\",  \"Indonesia\":\"360\",  \"Iran\":\"364\",\n  \"Iraq\":\"368\",  \"Ireland\":\"372\",  \"Israel\":\"376\",  \"Italy\":\"380\",  \"Ivory Coast\":\"384\",\n  \"Jamaica\":\"388\",  \"Japan\":\"392\",  \"Jordan\":\"400\",  \"Kazakhstan\":\"398\",  \"Kenya\":\"404\",\n  \"Kuwait\":\"414\",  \"Kyrgyzstan\":\"417\",  \"Laos\":\"418\",  \"Lebanon\":\"422\",  \"Libya\":\"434\",\n  \"Luxembourg\":\"442\",  \"Madagascar\":\"450\",  \"Malaysia\":\"458\",  \"Maldives\":\"462\",  \"Malta\":\"470\",\n  \"Mexico\":\"484\",  \"Moldova\":\"498\",  \"Mongolia\":\"496\",  \"Morocco\":\"504\",  \"Mozambique\":\"508\",\n  \"Myanmar\":\"104\",  \"Namibia\":\"516\",  \"Nepal\":\"524\",  \"Netherlands\":\"528\",  \"New Zealand\":\"554\",\n  \"Nicaragua\":\"558\",  \"Nigeria\":\"566\",  \"North Macedonia\":\"807\",  \"Norway\":\"578\",  \"Oman\":\"512\",\n  \"Pakistan\":\"586\",  \"Palestine\":\"275\",  \"Panama\":\"591\",  \"Papua New Guinea\":\"598\",  \"Paraguay\":\"600\",\n  \"Peru\":\"604\",  \"Philippines\":\"608\",  \"Poland\":\"616\",  \"Portugal\":\"620\",  \"Qatar\":\"634\",\n  \"Romania\":\"642\",  \"Russia\":\"643\",  \"Rwanda\":\"646\",  \"Saudi Arabia\":\"682\",  \"Senegal\":\"686\",\n  \"Serbia\":\"688\",  \"Singapore\":\"702\",  \"Slovakia\":\"703\",  \"Slovenia\":\"705\",  \"Somalia\":\"706\",\n  \"South Africa\":\"710\",  \"South Korea\":\"410\",  \"Spain\":\"724\",  \"Sri Lanka\":\"144\",  \"Sudan\":\"729\",\n  \"Sweden\":\"752\",  \"Switzerland\":\"756\",  \"Syria\":\"760\",  \"Taiwan\":\"158\",  \"Tajikistan\":\"762\",\n  \"Tanzania\":\"834\",  \"Thailand\":\"764\",  \"Trinidad and Tobago\":\"780\",  \"Tunisia\":\"788\",  \"Turkey\":\"792\",\n  \"Turkmenistan\":\"795\",  \"UAE\":\"784\",  \"Uganda\":\"800\",  \"Ukraine\":\"804\",  \"United Kingdom\":\"826\",\n  \"United States\":\"840\",  \"Uruguay\":\"858\",  \"Uzbekistan\":\"860\",  \"Venezuela\":\"862\",  \"Vietnam\":\"704\",\n  \"Yemen\":\"887\",  \"Zambia\":\"894\",  \"Zimbabwe\":\"716\",\n};\n\nfunction ClientMapTab({projects}) {\n  const mapRef = useRef(null);\n  const [selected, setSelected] = useState(null);\n  const [libLoaded, setLibLoaded] = useState(false);\n\n  const countryCounts = {};\n  projects.forEach(p => {\n    const addr = (p.address||\"\").trim();\n    if (!addr) return;\n    const iso = COUNTRY_ISO[addr];\n    if (!iso) return;\n    if (!countryCounts[iso]) countryCounts[iso] = {count:0, projects:[], name:addr};\n    countryCounts[iso].count++;\n    countryCounts[iso].projects.push(p);\n  });\n\n  const maxCount = Math.max(1, ...Object.values(countryCounts).map(v=>v.count));\n  const colorScale = (count) => {\n    const t = count / maxCount;\n    const light = [181,212,244];\n    const dark  = [12,68,124];\n    return `rgb(${Math.round(light[0]+(dark[0]-light[0])*t)},${Math.round(light[1]+(dark[1]-light[1])*t)},${Math.round(light[2]+(dark[2]-light[2])*t)})`;\n  };\n\n  const sortedCountries = Object.entries(countryCounts).sort((a,b)=>b[1].count-a[1].count);\n\n  useEffect(()=>{\n    const loadLib = (src, key, cb) => {\n      if (window[key]) { cb(); return; }\n      const s = document.createElement(\"script\");\n      s.src = src; s.onload = cb;\n      document.head.appendChild(s);\n    };\n    loadLib(\"https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js\",\"d3\",()=>{\n      loadLib(\"https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js\",\"topojson\",()=>{\n        setLibLoaded(true);\n      });\n    });\n  },[]);\n\n  useEffect(()=>{\n    if (!libLoaded || !mapRef.current) return;\n    const d3 = window.d3;\n    const topojson = window.topojson;\n    const container = mapRef.current;\n    while (container.firstChild) container.removeChild(container.firstChild);\n    const w = container.offsetWidth || 560;\n    const h = Math.round(w * 0.5);\n    const svg = d3.select(container).append(\"svg\")\n      .attr(\"viewBox\",`0 0 ${w} ${h}`)\n      .attr(\"width\",\"100%\");\n    const proj = d3.geoNaturalEarth1().scale(w/6.4).translate([w/2, h/2]);\n    const path = d3.geoPath(proj);\n    d3.json(\"https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json\").then(world=>{\n      const features = topojson.feature(world, world.objects.countries).features;\n      svg.selectAll(\"path\").data(features).join(\"path\")\n        .attr(\"d\", path)\n        .attr(\"fill\", d => {\n          const iso = String(d.id).padStart(3,\"0\");\n          return countryCounts[iso] ? colorScale(countryCounts[iso].count) : \"#e2e8f0\";\n        })\n        .attr(\"stroke\",\"#fff\")\n        .attr(\"stroke-width\", 0.4)\n        .style(\"cursor\", d => countryCounts[String(d.id).padStart(3,\"0\")] ? \"pointer\" : \"default\")\n        .on(\"mouseover\", function(e,d) {\n          const iso = String(d.id).padStart(3,\"0\");\n          if (countryCounts[iso]) d3.select(this).attr(\"fill\",\"#185FA5\");\n        })\n        .on(\"mouseout\", function(e,d) {\n          const iso = String(d.id).padStart(3,\"0\");\n          d3.select(this).attr(\"fill\", countryCounts[iso] ? colorScale(countryCounts[iso].count) : \"#e2e8f0\");\n        })\n        .on(\"click\", (e,d) => {\n          const iso = String(d.id).padStart(3,\"0\");\n          if (countryCounts[iso]) setSelected(s => s===iso ? null : iso);\n        });\n    });\n  },[libLoaded, JSON.stringify(countryCounts)]);\n\n  const sel = selected ? countryCounts[selected] : null;\n  const cardSt = {background:\"var(--color-background-primary)\",border:\"0.5px solid var(--color-border-tertiary)\",borderRadius:12,padding:\"14px 16px\"};\n\n  return <div style={{display:\"flex\",flexDirection:\"column\",gap:14}}>\n    {/* Full-width map */}\n    <div style={{border:\"0.5px solid var(--color-border-tertiary)\",borderRadius:12,overflow:\"hidden\",background:\"#f0f4f8\",width:\"100%\"}}>\n      <div ref={mapRef} style={{width:\"100%\"}}/>\n      {!libLoaded&&<div style={{padding:\"3rem\",textAlign:\"center\",fontSize:13,color:\"#888\"}}>Memuat peta...</div>}\n    </div>\n\n    {/* Bottom: sebaran klien list + selected detail side by side */}\n    <div style={{display:\"grid\",gridTemplateColumns:sel?\"1fr 1fr\":\"1fr\",gap:14}}>\n      <div style={cardSt}>\n        <div style={{fontSize:11,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",letterSpacing:\"0.05em\",fontWeight:500,marginBottom:10}}>Sebaran Klien</div>\n        {sortedCountries.length===0\n          ? <div style={{fontSize:12,color:\"var(--color-text-secondary)\"}}>Belum ada data lokasi.</div>\n          : <div style={{display:\"flex\",flexWrap:\"wrap\",gap:\"2px 0\"}}>\n              {sortedCountries.map(([iso,data])=><div key={iso} onClick={()=>setSelected(s=>s===iso?null:iso)}\n                style={{display:\"flex\",alignItems:\"center\",justifyContent:\"space-between\",padding:\"5px 10px 5px 0\",\n                  cursor:\"pointer\",width:\"50%\",borderBottom:\"0.5px solid var(--color-border-tertiary)\",\n                  background:selected===iso?\"var(--color-background-secondary)\":\"transparent\"}}>\n                <div style={{display:\"flex\",alignItems:\"center\",gap:7}}>\n                  <span style={{width:10,height:10,borderRadius:2,background:colorScale(data.count),display:\"inline-block\",flexShrink:0,border:\"0.5px solid rgba(0,0,0,0.1)\"}}/>\n                  <span style={{fontSize:12,color:\"var(--color-text-primary)\",fontWeight:selected===iso?500:400}}>{data.name}</span>\n                </div>\n                <span style={{fontSize:12,fontWeight:500,color:\"var(--color-text-secondary)\"}}>{data.count}×</span>\n              </div>)}\n            </div>\n        }\n        <div style={{marginTop:10,fontSize:11,color:\"var(--color-text-tertiary)\"}}>Abu-abu = tidak ada proyek · Klik negara untuk detail</div>\n      </div>\n\n      {sel&&<div style={cardSt}>\n        <div style={{fontSize:11,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",letterSpacing:\"0.05em\",fontWeight:500,marginBottom:10}}>{sel.name} · {sel.count} proyek</div>\n        <div style={{display:\"flex\",flexDirection:\"column\",gap:6}}>\n          {sel.projects.map(p=><div key={p.id} style={{fontSize:12,borderBottom:\"0.5px solid var(--color-border-tertiary)\",paddingBottom:5}}>\n            <div style={{fontWeight:500,color:\"var(--color-text-primary)\"}}>{p.clientName||\"—\"}</div>\n            <div style={{color:\"var(--color-text-secondary)\",marginTop:2}}>{p.projectName||\"—\"}</div>\n          </div>)}\n        </div>\n      </div>}\n    </div>\n  </div>;\n}\n\nfunction ClientPage({projects:allProjects=[]}) {\n  // clientMeta stores extra info (note, rating) keyed by lowercase name\n  const [clientMeta, setClientMeta] = useState(()=>{\n    try{const s=window._clientMeta;if(s){const p=JSON.parse(s);if(Object.keys(p).length>0)return p;}}catch(e){}\n    // migrate from old _clientData if exists\n    try{const s=window._clientData;if(s){const arr=JSON.parse(s);const m={};arr.forEach(c=>{if(c.name)m[c.name.toLowerCase()]={note:c.note||\"\",rating:c.rating||0};});return m;}}catch(e){}\n    return seedClientMeta;\n  });\n  const [modal, setModal] = useState(false);\n  const [editing, setEditing] = useState(null);\n  const [form, setForm] = useState({type:\"\",name:\"\",platform:\"\",note:\"\",rating:0});\n  const [aiLoading, setAiLoading] = useState(false);\n  const aiTimer = useRef(null);\n  const [filterRating, setFilterRating] = useState(\"all\");\n\n  useEffect(()=>{window._clientMeta=JSON.stringify(clientMeta);},[clientMeta]);\n\n  // Derive clients directly from allProjects — always fresh, no stale names\n  // Group by clientName (case-insensitive), take latest project info\n  const clients = (() => {\n    const map = new Map();\n    // Sort projects by startDate ascending so latest overwrites earlier\n    const sorted = [...allProjects].sort((a,b)=>(a.startDate||\"\").localeCompare(b.startDate||\"\")||a.id-b.id);\n    for (const p of sorted) {\n      const name = (p.clientName||\"\").trim();\n      if (!name) continue;\n      const key = name.toLowerCase();\n      const existing = map.get(key);\n      map.set(key, {\n        key,\n        name, // always use latest spelling from project card\n        type: p.clientType||\"\",\n        platform: p.platform||\"\",\n        latestDate: p.startDate||\"\",\n        projectCount: (existing?.projectCount||0)+1,\n        id: existing?.id||(p.id*1000+Math.random()*999|0),\n      });\n    }\n    // Attach meta (note, rating) and sort by latestDate descending\n    return [...map.values()]\n      .map(c=>({...c, note:(clientMeta[c.key]||{}).note||\"\", rating:(clientMeta[c.key]||{}).rating||0}))\n      .sort((a,b)=>b.latestDate.localeCompare(a.latestDate)||a.name.localeCompare(b.name));\n  })();\n\n  const openAdd = () => { setEditing(null); setForm({type:\"\",name:\"\",platform:\"\",note:\"\",rating:0}); setModal(true); };\n  const openEdit = (c) => { setEditing(c.key); setForm({type:c.type||\"\",name:c.name||\"\",platform:c.platform||\"\",note:c.note||\"\",rating:c.rating||0}); setModal(true); };\n  const save = () => {\n    if (editing) setClientMeta(m=>({...m,[editing]:{...(m[editing]||{}),note:form.note,rating:form.rating}}));\n    setModal(false);\n  };\n\n  const setRating = (key, rating) => setClientMeta(m=>({...m,[key]:{...(m[key]||{}),rating}}));\n\n  const [toast, setToast] = useState(null);\n  const toastTimer = useRef(null);\n  const showToast = (msg, undoFn=null) => { clearTimeout(toastTimer.current); setToast({msg,undoFn}); toastTimer.current=setTimeout(()=>setToast(null),4000); };\n  const del = (key) => {\n    const c = clients.find(x=>x.key===key);\n    showToast(`\"${c?.name||\"Client\"}\" dihapus (hapus dari Project Card untuk menghilangkan dari list)`);\n  };\n\n  const inp = {width:\"100%\",boxSizing:\"border-box\",fontSize:13,padding:\"7px 10px\",border:\"1.5px solid #000\",borderRadius:6,background:\"#fff\",outline:\"none\"};\n\n  const handleNameChange = (name) => {\n    setForm(f=>({...f,name}));\n    clearTimeout(aiTimer.current);\n    if (name.trim().length < 2) return;\n    aiTimer.current = setTimeout(async()=>{\n      setAiLoading(true);\n      try {\n        const res = await fetch(\"https://api.anthropic.com/v1/messages\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({model:\"claude-sonnet-4-20250514\",max_tokens:100,system:`You are a helper that detects client type and platform from a client name.\\\nReply ONLY with a JSON object like: {\"type\":\"Owner\",\"platform\":\"Upwork\"}\\\nType must be one of: Owner, Consultant, Contractor, Developer\\\nPlatform must be one of: Upwork, Fiverr, Freelance\\\nUse context clues from the name (e.g. foreign names → Upwork/Fiverr, local names → Freelance).\\\nIf unclear, make your best guess. No explanation, just JSON.`,messages:[{role:\"user\",content:`Client name: \"${name}\"`}]})});\n        const data = await res.json();\n        const text = data.content?.[0]?.text||\"{}\";\n        const parsed = JSON.parse(text.replace(/```json|```/g,\"\").trim());\n        setForm(f=>({...f, type:f.type||parsed.type||f.type, platform:f.platform||parsed.platform||f.platform}));\n      } catch(e){}\n      setAiLoading(false);\n    }, 800);\n  };\n\n  const [clientTab, setClientTab] = useState(\"tabel\");\n\n  const filtered = clients.filter(c=>{\n    if (filterRating===\"5\") return c.rating===5;\n    if (filterRating===\"4\") return (c.rating||0)>=4;\n    if (filterRating===\"3\") return (c.rating||0)>=3;\n    if (filterRating===\"unrated\") return !c.rating;\n    return true;\n  });\n  const totalClients = clients.length;\n\n  const thSt = {padding:\"10px 14px\",fontWeight:600,fontSize:11,textTransform:\"uppercase\",letterSpacing:\"0.05em\",color:\"var(--color-text-secondary)\"};\n  const tabPill = (active) => ({fontSize:12,padding:\"4px 14px\",borderRadius:20,border:\"1.5px solid\",cursor:\"pointer\",background:active?\"#111\":\"transparent\",color:active?\"#fff\":\"var(--color-text-secondary)\",borderColor:active?\"#111\":\"var(--color-border-secondary)\"});\n\n  return <div>\n    <div style={{display:\"flex\",justifyContent:\"space-between\",alignItems:\"center\",marginBottom:20}}>\n      <div style={{display:\"flex\",alignItems:\"center\",gap:10}}>\n        <div style={{display:\"flex\",alignItems:\"baseline\",gap:10}}><div style={{fontWeight:500,fontSize:20}}>Client</div><div style={{fontWeight:500,fontSize:28,color:\"var(--color-text-primary)\",lineHeight:1}}>{totalClients}</div></div>\n        <div style={{display:\"flex\",gap:6}}>\n          <button style={tabPill(clientTab===\"tabel\")} onClick={()=>setClientTab(\"tabel\")}>Tabel</button>\n          <button style={tabPill(clientTab===\"peta\")} onClick={()=>setClientTab(\"peta\")}>Peta</button>\n        </div>\n      </div>\n      <div style={{display:\"flex\",gap:8,alignItems:\"center\"}}>\n        {clientTab===\"tabel\"&&<select value={filterRating} onChange={e=>setFilterRating(e.target.value)} style={{fontSize:12,padding:\"5px 8px\",border:\"0.5px solid var(--color-border-secondary)\",borderRadius:6,background:\"var(--color-background-primary)\",color:\"var(--color-text-primary)\",cursor:\"pointer\"}}>\n          <option value=\"all\">Rating (Semua)</option>\n          <option value=\"5\">★ 5 saja</option>\n          <option value=\"4\">★ 4+</option>\n          <option value=\"3\">★ 3+</option>\n          <option value=\"unrated\">Belum dirating</option>\n        </select>}\n        {clientTab===\"tabel\"&&<button onClick={openAdd} style={{fontSize:13,padding:\"7px 18px\"}}>+ Add Client</button>}\n      </div>\n    </div>\n\n    {toast&&<div style={{position:\"fixed\",bottom:24,left:\"50%\",transform:\"translateX(-50%)\",background:\"#111\",color:\"#fff\",borderRadius:10,padding:\"10px 18px\",fontSize:13,display:\"flex\",alignItems:\"center\",gap:12,zIndex:99999,boxShadow:\"0 4px 16px rgba(0,0,0,0.25)\"}}>\n      <span>{toast.msg}</span>\n      {toast.undoFn&&<button onClick={toast.undoFn} style={{fontSize:12,padding:\"3px 10px\",background:\"#fff\",color:\"#111\",border:\"none\",borderRadius:6,cursor:\"pointer\",fontWeight:500}}>Undo</button>}\n    </div>}\n\n    {clientTab===\"peta\"&&<ClientMapTab projects={allProjects}/>}\n\n    {clientTab===\"tabel\"&&<div style={{border:\"2px solid #000\",borderRadius:12,overflow:\"hidden\",boxShadow:\"0 2px 8px rgba(0,0,0,0.07)\"}}>\n      <table style={{width:\"100%\",borderCollapse:\"collapse\",fontSize:13,tableLayout:\"fixed\"}}>\n        <thead>\n          <tr style={{background:\"var(--color-background-secondary)\",borderBottom:\"2px solid #000\"}}>\n            <th style={{...thSt,width:32}}>No</th>\n            <th style={{...thSt,width:52,textAlign:\"center\"}}>Platform</th>\n            <th style={{...thSt,width:110}}>Type</th>\n            <th style={{...thSt,width:100}}>Name</th>\n            <th style={{...thSt,width:120,textAlign:\"center\"}}>Rating</th>\n            <th style={thSt}>Note</th>\n            <th style={{...thSt,width:72,textAlign:\"right\"}}></th>\n          </tr>\n        </thead>\n        <tbody>\n          {filtered.length===0\n            ? <tr><td colSpan={7} style={{padding:\"2rem\",textAlign:\"center\",color:\"var(--color-text-secondary)\",fontSize:13}}>{clients.length===0?\"Belum ada client. Klik \\\"+ Add Client\\\" untuk menambah.\":\"Tidak ada client yang cocok dengan filter ini.\"}</td></tr>\n            : filtered.map((c,i)=><tr key={c.key} style={{borderBottom:\"0.5px solid var(--color-border-tertiary)\",background:i%2===0?\"transparent\":\"var(--color-background-secondary)\"}}>\n                <td style={{padding:\"10px 14px\",color:\"var(--color-text-secondary)\",fontWeight:500}}>{i+1}</td>\n                <td style={{padding:\"10px 14px\",textAlign:\"center\"}}><div style={{display:\"flex\",justifyContent:\"center\"}}>{c.platform?<PlatformIcon platform={c.platform} size={16}/>:<span style={{color:\"var(--color-text-secondary)\"}}>—</span>}</div></td>\n                <td style={{padding:\"10px 14px\"}}>{c.type?<span style={{fontSize:11,fontWeight:500,borderRadius:20,padding:\"2px 9px\",background:getTypeColor(c.type).bg,color:getTypeColor(c.type).text}}>{c.type}</span>:\"—\"}</td>\n                <td style={{padding:\"10px 14px\",fontWeight:500}}>{c.name||\"—\"}{c.projectCount>1&&<span style={{fontSize:10,color:\"var(--color-text-secondary)\",marginLeft:5,fontWeight:400}}>({c.projectCount}×)</span>}</td>\n                <td style={{padding:\"6px 14px\",textAlign:\"center\"}}>\n                  <div style={{display:\"flex\",gap:1,justifyContent:\"center\",alignItems:\"center\"}}>\n                    {[1,2,3,4,5].map(star=>(\n                      <span key={star} onClick={()=>setRating(c.key, c.rating===star?0:star)}\n                        style={{fontSize:18,cursor:\"pointer\",color:(c.rating||0)>=star?\"#f59e0b\":\"var(--color-border-secondary)\",lineHeight:1,transition:\"color 0.1s\"}}\n                        onMouseEnter={e=>e.currentTarget.style.color=\"#f59e0b\"}\n                        onMouseLeave={e=>e.currentTarget.style.color=(c.rating||0)>=star?\"#f59e0b\":\"var(--color-border-secondary)\"}>★</span>\n                    ))}\n                    {!c.rating&&<span style={{fontSize:11,color:\"var(--color-text-secondary)\",marginLeft:4,fontStyle:\"italic\"}}>—</span>}\n                  </div>\n                </td>\n                <td style={{padding:\"10px 14px\",color:\"var(--color-text-secondary)\",wordBreak:\"break-word\"}}>{c.note||\"—\"}</td>\n                <td style={{padding:\"10px 12px\",textAlign:\"right\",whiteSpace:\"nowrap\"}}>\n                  <div style={{display:\"flex\",gap:2,justifyContent:\"flex-end\"}}>\n                    <button onClick={()=>openEdit(c)} title=\"Edit\" style={{padding:\"4px 5px\",border:\"none\",background:\"transparent\",cursor:\"pointer\",color:\"#888\"}}><svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"/><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"/></svg></button>\n                  </div>\n                </td>\n              </tr>)\n          }\n        </tbody>\n      </table>\n    </div>}\n\n    {modal&&<div style={{position:\"fixed\",inset:0,background:\"rgba(0,0,0,0.35)\",zIndex:9999,display:\"flex\",alignItems:\"center\",justifyContent:\"center\"}} onClick={()=>setModal(false)}>\n      <div onClick={e=>e.stopPropagation()} style={{background:\"#fff\",borderRadius:14,padding:\"24px 28px\",minWidth:340,maxWidth:420,boxShadow:\"0 8px 32px rgba(0,0,0,0.18)\"}}>\n        <div style={{display:\"flex\",alignItems:\"center\",gap:8,marginBottom:16}}>\n          <span style={{fontWeight:500,fontSize:15}}>{editing?\"Edit Client\":\"Add Client\"}</span>\n          {aiLoading&&<span style={{fontSize:11,color:\"var(--color-text-info)\",background:\"var(--color-background-info)\",borderRadius:20,padding:\"2px 10px\",display:\"flex\",alignItems:\"center\",gap:4}}><svg width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.5\"><path d=\"M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83\"/></svg>AI detecting...</span>}\n        </div>\n        <div style={{display:\"flex\",flexDirection:\"column\",gap:10}}>\n          <Field label=\"Name\">\n            <div style={{position:\"relative\"}}>\n              <input style={{...inp,paddingRight:aiLoading?32:10}} value={form.name} onChange={e=>handleNameChange(e.target.value)} placeholder=\"Nama client\"/>\n              {aiLoading&&<span style={{position:\"absolute\",right:10,top:\"50%\",transform:\"translateY(-50%)\",fontSize:10,color:\"var(--color-text-info)\"}}>✦</span>}\n            </div>\n          </Field>\n          <div style={{display:\"grid\",gridTemplateColumns:\"1fr 1fr\",gap:10}}>\n            <Field label={<span style={{display:\"flex\",alignItems:\"center\",gap:4}}>Type {form.type&&!aiLoading&&<span style={{fontSize:9,color:\"#22c55e\"}}>✓ auto</span>}</span>}>\n              <select style={{...inp,cursor:\"pointer\"}} value={form.type} onChange={e=>setForm(f=>({...f,type:e.target.value}))}>\n                <option value=\"\">Pilih type...</option>\n                {clientTypeOptions.map(o=><option key={o} value={o}>{o}</option>)}\n              </select>\n            </Field>\n            <Field label={<span style={{display:\"flex\",alignItems:\"center\",gap:4}}>Platform {form.platform&&!aiLoading&&<span style={{fontSize:9,color:\"#22c55e\"}}>✓ auto</span>}</span>}>\n              <select style={{...inp,cursor:\"pointer\"}} value={form.platform} onChange={e=>setForm(f=>({...f,platform:e.target.value}))}>\n                <option value=\"\">Pilih platform...</option>\n                {platformOptions.map(o=><option key={o} value={o}>{o}</option>)}\n              </select>\n            </Field>\n          </div>\n          <Field label=\"Rating\">\n            <div style={{display:\"flex\",gap:4,alignItems:\"center\",padding:\"4px 0\"}}>\n              {[1,2,3,4,5].map(star=>(\n                <span key={star} onClick={()=>setForm(f=>({...f,rating:f.rating===star?0:star}))}\n                  style={{fontSize:24,cursor:\"pointer\",color:(form.rating||0)>=star?\"#f59e0b\":\"#d1d5db\",lineHeight:1,transition:\"color 0.1s\"}}>★</span>\n              ))}\n              {form.rating>0&&<span style={{fontSize:12,color:\"var(--color-text-secondary)\",marginLeft:4}}>{form.rating}.0</span>}\n            </div>\n          </Field>\n          <Field label=\"Note\"><textarea style={{...inp,height:72,resize:\"vertical\"}} value={form.note} onChange={e=>setForm(f=>({...f,note:e.target.value}))} placeholder=\"Catatan...\"/></Field>\n        </div>\n        <div style={{display:\"flex\",gap:8,justifyContent:\"flex-end\",marginTop:20}}>\n          <button onClick={()=>setModal(false)} style={{fontSize:13,padding:\"6px 16px\"}}>Batal</button>\n          <button onClick={save} style={{fontSize:13,padding:\"6px 16px\",background:\"#111\",color:\"#fff\",borderColor:\"#111\"}}>Simpan</button>\n        </div>\n      </div>\n    </div>}\n  </div>;\n}\n\nfunction DownloadPage({projects}) {\n  const years = [...new Set(projects.map(p=>(p.startDate||\"\").slice(0,4)).filter(Boolean))].sort().reverse();\n  const months = [...new Set(projects.map(p=>(p.startDate||\"\").slice(0,7)).filter(Boolean))].sort().reverse();\n  const [selYear,setSelYear] = useState(years[0]||\"\");\n  const [selMonth,setSelMonth] = useState(months[0]||\"\");\n  const mlabel = m=>{if(!m)return\"—\";const[y,mo]=m.split(\"-\");return`${[\"\",\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"Mei\",\"Jun\",\"Jul\",\"Agu\",\"Sep\",\"Okt\",\"Nov\",\"Des\"][parseInt(mo)]} ${y}`;};\n\n  const buildHTML = (list, title) => {\n    const feeStr = f => normalizeFeeArr(f).map(x=>`${x.name}${x.lunas?\" <span style='color:#16a34a'>✓</span>\":\"\"}`).join(\", \")||\"—\";\n    const psStr  = p => normalizeFeeArr(p).map(x=>`${x.name}${x.lunas?\" <span style='color:#16a34a'>✓</span>\":\"\"}`).join(\", \")||\"—\";\n    const taskStr = t => {\n      const vis = t.filter(x=>x.visible);\n      if (!vis.length) return \"—\";\n      return vis.map(x=>`<span style='${x.done?\"text-decoration:line-through;opacity:0.5;\":\"\"}'>${x.name}${x.deadline?\" <span style='color:#b45309;font-size:10px'>(${x.deadline})</span>\":\"\"}</span>`).join(\" &nbsp;·&nbsp; \");\n    };\n    const statusCfg = {\n      \"Ongoing\":     {bg:\"#fff8ed\",color:\"#b45309\",dot:\"#f59e0b\"},\n      \"Completed\":   {bg:\"#f0fdf4\",color:\"#166534\",dot:\"#22c55e\"},\n      \"Cancelled\":   {bg:\"#fef2f2\",color:\"#991b1b\",dot:\"#ef4444\"},\n      \"Incompleted\": {bg:\"#eff6ff\",color:\"#1d4ed8\",dot:\"#3b82f6\"},\n    };\n    const chip = (label, val) => val ? `<div class=\"chip\"><div class=\"chip-label\">${label}</div><div class=\"chip-val\">${val}</div></div>` : \"\";\n    const rows = list.map((p,i)=>{\n      const sc = statusCfg[p.status]||statusCfg[\"Ongoing\"];\n      const vis = p.tasks.filter(t=>t.visible);\n      const done = vis.filter(t=>t.done).length;\n      const pct = vis.length ? Math.round(done/vis.length*100) : 0;\n      const tags = [p.invitation?\"Invitation\":null, p.team?\"Team\":null, p.hourlyJob?\"Hourly\":null].filter(Boolean);\n      return `\n      <div class=\"card\">\n        <div class=\"card-top\">\n          <div class=\"card-left\">\n            <div class=\"card-title\">${p.projectName||\"Untitled\"} <span class=\"card-num\">${projectNum(p,list)}</span></div>\n            ${p.address?`<div class=\"card-sub\">${p.address}</div>`:\"\"}\n          </div>\n          <div class=\"card-badges\">\n            <span class=\"plat\">${p.platform}</span>\n            <span class=\"status-badge\" style=\"background:${sc.bg};color:${sc.color};\">\n              <span style=\"display:inline-block;width:6px;height:6px;border-radius:50%;background:${sc.dot};margin-right:4px;\"></span>${p.status}\n            </span>\n          </div>\n        </div>\n        <div class=\"chips\">\n          ${chip(\"Client\",p.clientName)}\n          ${chip(\"Client Type\",p.clientType)}\n          ${chip(\"Scope of Work\",p.jobType)}\n          ${chip(\"Project Type\",p.design)}\n          ${chip(\"Style\",p.style)}\n          ${chip(\"Start\",p.startDate)}\n          ${chip(\"End\",p.endDate)}\n          ${chip(\"Hours\",p.hours?p.hours+\" jam\":\"\")}\n          ${chip(\"Area\",p.area?p.area+\" m²\":\"\")}\n        </div>\n        ${p.notes?`<div class=\"notes-row\"><span class=\"field-lbl\">Notes</span><span>${p.notes}</span></div>`:\"\"}\n        ${vis.length?`\n        <div class=\"tasks-box\">\n          <div class=\"tasks-header\">\n            <span class=\"tasks-lbl\">Tasks</span>\n            <span class=\"tasks-count\">${done}/${vis.length} selesai</span>\n          </div>\n          <div class=\"progress-bg\"><div class=\"progress-fill\" style=\"width:${pct}%\"></div></div>\n          <div class=\"tasks-list\">${taskStr(p.tasks)}</div>\n        </div>`:\"\"}\n        <div class=\"price-row\">\n          ${p.grossPrice?`<div class=\"price-item\"><div class=\"field-lbl\">Gross Price</div><div class=\"price-val\">Rp ${p.grossPrice}</div></div>`:\"\"}\n          ${p.priceRp?`<div class=\"price-item\"><div class=\"field-lbl\">Nett Price</div><div class=\"price-val\">Rp ${p.priceRp}</div></div>`:\"\"}\n          ${p.priceUSD?`<div class=\"price-item\"><div class=\"field-lbl\">Priced (USD)</div><div class=\"price-val\">$${p.priceUSD}</div></div>`:\"\"}\n          ${p.jobPerHour?`<div class=\"price-item\"><div class=\"field-lbl\">Job/Hour</div><div class=\"price-val\">$${p.jobPerHour}</div></div>`:\"\"}\n          ${tags.length?`<div style=\"margin-left:auto;display:flex;gap:6px;flex-wrap:wrap;align-items:center;\">${tags.map(t=>`<span class=\"tag\">${t}</span>`).join(\"\")}</div>`:\"\"}\n        </div>\n        ${normalizeFeeArr(p.paymentStatus).length?`<div class=\"ps-box\"><span class=\"field-lbl\" style=\"color:#16a34a;\">Payment Status</span> &nbsp;${psStr(p.paymentStatus)}</div>`:\"\"}\n        ${normalizeFeeArr(p.fee).length?`<div class=\"ps-box\"><span class=\"field-lbl\">Fee</span> &nbsp;${feeStr(p.fee)}</div>`:\"\"}\n      </div>`;\n    }).join(\"\");\n\n    return `<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>${title}</title><style>\n      *{box-sizing:border-box;margin:0;padding:0;}\n      body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:13px;padding:32px 40px;color:#111;background:#f8f8f8;}\n      h1{font-size:20px;font-weight:500;margin-bottom:4px;}\n      .meta{color:#888;font-size:12px;margin-bottom:28px;}\n      .card{background:#fff;border:2px solid #000;border-radius:14px;padding:18px 20px;margin-bottom:18px;page-break-inside:avoid;}\n      .card-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px;}\n      .card-title{font-size:15px;font-weight:500;}\n      .card-num{font-size:12px;color:#888;font-weight:400;margin-left:6px;}\n      .card-sub{font-size:12px;color:#888;margin-top:2px;}\n      .card-badges{display:flex;gap:6px;align-items:center;flex-shrink:0;margin-left:12px;}\n      .plat{font-size:11px;background:#f3f4f6;color:#374151;border-radius:6px;padding:2px 8px;font-weight:500;}\n      .status-badge{font-size:11px;border-radius:20px;padding:3px 10px;font-weight:500;display:inline-flex;align-items:center;}\n      .chips{display:grid;grid-template-columns:repeat(4,1fr);gap:10px 16px;margin-bottom:12px;}\n      .chip .chip-label{font-size:10px;color:#888;text-transform:uppercase;letter-spacing:0.05em;font-weight:500;margin-bottom:2px;}\n      .chip .chip-val{font-size:13px;color:#111;}\n      .notes-row{font-size:13px;color:#111;margin-bottom:10px;padding-top:8px;border-top:0.5px solid #eee;}\n      .notes-row .field-lbl{font-size:10px;color:#888;text-transform:uppercase;font-weight:500;margin-right:8px;}\n      .tasks-box{background:#fffbeb;border:1.5px solid #fcd34d;border-radius:8px;padding:10px 12px;margin-bottom:10px;}\n      .tasks-header{display:flex;align-items:center;gap:8px;margin-bottom:6px;}\n      .tasks-lbl{font-size:10px;color:#b45309;text-transform:uppercase;font-weight:600;letter-spacing:0.05em;}\n      .tasks-count{font-size:11px;color:#92400e;background:#fef3c7;border-radius:20px;padding:1px 8px;font-weight:500;}\n      .progress-bg{height:4px;background:#fde68a;border-radius:4px;margin-bottom:8px;overflow:hidden;}\n      .progress-fill{height:100%;background:#f59e0b;border-radius:4px;}\n      .tasks-list{font-size:12px;color:#78350f;line-height:1.8;}\n      .price-row{display:flex;gap:20px;flex-wrap:wrap;align-items:flex-end;padding-top:10px;border-top:0.5px solid #eee;margin-top:8px;}\n      .price-item .field-lbl{font-size:10px;color:#888;text-transform:uppercase;font-weight:500;margin-bottom:2px;}\n      .price-item .price-val{font-size:14px;font-weight:500;}\n      .tag{font-size:11px;border-radius:6px;padding:3px 10px;}\n      .tag:nth-child(1){background:#f0fdf4;color:#166534;}\n      .tag:nth-child(2){background:#eff6ff;color:#1d4ed8;}\n      .tag:nth-child(3){background:#fdf2f8;color:#86198f;}\n      .ps-box{font-size:12px;color:#374151;margin-top:8px;padding-top:8px;border-top:0.5px solid #eee;}\n      .field-lbl{font-size:10px;color:#888;text-transform:uppercase;font-weight:500;letter-spacing:0.04em;}\n      hr{border:none;border-top:0.5px solid #eee;margin:8px 0;}\n      @media print{body{padding:0;background:#fff;}.card{page-break-inside:avoid;}}\n    </style><script>window.onload=function(){window.print();}</script></head><body>\n      <h1>${title}</h1>\n      <div class=\"meta\">Total: ${list.length} proyek &nbsp;·&nbsp; ${new Date().toLocaleDateString(\"id-ID\",{day:\"numeric\",month:\"long\",year:\"numeric\"})}</div>\n      ${rows}\n    </body></html>`;\n  };\n\n  const download = (list, title) => {\n    const html = buildHTML(list, title);\n    const encoded = \"data:text/html;charset=utf-8,\" + encodeURIComponent(html);\n    const a = document.createElement(\"a\");\n    a.href = encoded;\n    a.download = `${title}.html`;\n    document.body.appendChild(a);\n    a.click();\n    document.body.removeChild(a);\n  };\n\n  const btnStyle = {fontSize:13,padding:\"10px 20px\",display:\"flex\",alignItems:\"center\",gap:8,cursor:\"pointer\",borderRadius:8,border:\"2px solid #000\",background:\"#fff\",fontWeight:500,width:\"100%\",justifyContent:\"flex-start\"};\n  const secStyle = {border:\"2px solid #000\",borderRadius:12,padding:\"20px\",marginBottom:16,boxShadow:\"0 2px 8px rgba(0,0,0,0.07)\"};\n\n  return <div>\n    <div style={{fontWeight:500,fontSize:20,marginBottom:20}}>Download</div>\n\n    {/* All Time */}\n    <div style={secStyle}>\n      <div style={{fontWeight:500,fontSize:14,marginBottom:4}}>All Time</div>\n      <div style={{fontSize:12,color:\"var(--color-text-secondary)\",marginBottom:14}}>Semua {projects.length} proyek</div>\n      <button style={btnStyle} onClick={()=>download(projects,\"Project Cards — All Time\")}>\n        <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"/></svg>\n        Download Project Cards (.html)\n      </button>\n    </div>\n\n    {/* Per Tahun */}\n    <div style={secStyle}>\n      <div style={{fontWeight:500,fontSize:14,marginBottom:4}}>Per Tahun</div>\n      <div style={{display:\"flex\",alignItems:\"center\",gap:10,marginBottom:14}}>\n        <select value={selYear} onChange={e=>setSelYear(e.target.value)} style={{fontSize:13,padding:\"5px 10px\",border:\"1.5px solid #000\",borderRadius:6}}>\n          {years.length===0&&<option value=\"\">—</option>}\n          {years.map(y=><option key={y} value={y}>{y}</option>)}\n        </select>\n        <span style={{fontSize:12,color:\"var(--color-text-secondary)\"}}>{projects.filter(p=>(p.startDate||\"\").startsWith(selYear)).length} proyek</span>\n      </div>\n      <button style={btnStyle} onClick={()=>download(projects.filter(p=>(p.startDate||\"\").startsWith(selYear)),`Project Cards — ${selYear}`)}>\n        <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"/></svg>\n        Download Project Cards (.html)\n      </button>\n    </div>\n\n    {/* Per Bulan */}\n    <div style={secStyle}>\n      <div style={{fontWeight:500,fontSize:14,marginBottom:4}}>Per Bulan</div>\n      <div style={{display:\"flex\",alignItems:\"center\",gap:10,marginBottom:14}}>\n        <select value={selMonth} onChange={e=>setSelMonth(e.target.value)} style={{fontSize:13,padding:\"5px 10px\",border:\"1.5px solid #000\",borderRadius:6}}>\n          {months.length===0&&<option value=\"\">—</option>}\n          {months.map(m=><option key={m} value={m}>{mlabel(m)}</option>)}\n        </select>\n        <span style={{fontSize:12,color:\"var(--color-text-secondary)\"}}>{projects.filter(p=>(p.startDate||\"\").startsWith(selMonth)).length} proyek</span>\n      </div>\n      <button style={btnStyle} onClick={()=>download(projects.filter(p=>(p.startDate||\"\").startsWith(selMonth)),`Project Cards — ${mlabel(selMonth)}`)}>\n        <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"/></svg>\n        Download Project Cards (.html)\n      </button>\n    </div>\n  </div>;\n}\n\nfunction UpworkPage({projects}) {\n  const STORAGE_KEY = \"_upworkProposals\";\n  const monthNames = [\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"Mei\",\"Jun\",\"Jul\",\"Agu\",\"Sep\",\"Okt\",\"Nov\",\"Des\"];\n\n  const upworkProjects = projects.filter(p=>p.platform===\"Upwork\");\n\n  // Build set of all year-months that have upwork projects or saved proposal data\n  const allMonths = [...new Set([\n    ...upworkProjects.map(p=>(p.startDate||\"\").slice(0,7)),\n    ...Object.keys(JSON.parse(window[STORAGE_KEY]||\"{}\"))\n  ].filter(Boolean))].sort().reverse();\n\n  const [proposals, setProposals] = useState(()=>{\n    try { return JSON.parse(window[STORAGE_KEY]||\"{}\"); } catch(e){ return {}; }\n  });\n  const [editingMonth, setEditingMonth] = useState(null);\n  const [editVal, setEditVal] = useState(\"\");\n  const [newMonth, setNewMonth] = useState(\"\");\n  const [newVal, setNewVal] = useState(\"\");\n  const [showAddForm, setShowAddForm] = useState(false);\n\n  const saveProposals = (updated) => {\n    setProposals(updated);\n    window[STORAGE_KEY] = JSON.stringify(updated);\n  };\n\n  const startEdit = (month) => { setEditingMonth(month); setEditVal(String(proposals[month]||\"\")); };\n  const commitEdit = (month) => {\n    const n = parseInt(editVal)||0;\n    const updated = {...proposals, [month]: n};\n    if (!n) { delete updated[month]; }\n    saveProposals(updated);\n    setEditingMonth(null);\n  };\n  const addMonth = () => {\n    if (!newMonth) return;\n    const n = parseInt(newVal)||0;\n    saveProposals({...proposals, [newMonth]: n});\n    setNewMonth(\"\"); setNewVal(\"\"); setShowAddForm(false);\n  };\n  const deleteMonth = (month) => {\n    const updated = {...proposals};\n    delete updated[month];\n    saveProposals(updated);\n  };\n\n  // Merged list of months\n  const mergedMonths = [...new Set([\n    ...Object.keys(proposals),\n    ...upworkProjects.map(p=>(p.startDate||\"\").slice(0,7)).filter(Boolean)\n  ])].sort().reverse();\n\n  const monthLabel = m => {\n    if (!m) return \"—\";\n    const [y,mo] = m.split(\"-\");\n    return `${monthNames[parseInt(mo)-1]} ${y}`;\n  };\n\n  const rows = mergedMonths.map(m=>{\n    const sent    = proposals[m]||0;\n    const won     = upworkProjects.filter(p=>(p.startDate||\"\").startsWith(m)).length;\n    const invWon  = upworkProjects.filter(p=>(p.startDate||\"\").startsWith(m)&&p.invitation).length;\n    const rate    = sent>0 ? Math.round(won/sent*100) : null;\n    return {m, sent, won, invWon, rate};\n  });\n\n  const totalSent  = rows.reduce((s,r)=>s+r.sent,0);\n  const totalWon   = rows.reduce((s,r)=>s+r.won,0);\n  const totalInv   = rows.reduce((s,r)=>s+r.invWon,0);\n  const totalRate  = totalSent>0 ? Math.round(totalWon/totalSent*100) : null;\n\n  const totalUpwork     = upworkProjects.length;\n  const totalInvitation = upworkProjects.filter(p=>p.invitation).length;\n  const totalNonInv     = totalUpwork - totalInvitation;\n  const totalHourly     = upworkProjects.filter(p=>p.hourlyJob).length;\n  const hourlyPct       = totalUpwork>0 ? Math.round(totalHourly/totalUpwork*100) : 0;\n\n  const allYearsAn     = [...new Set(upworkProjects.map(p=>(p.startDate||\"\").slice(0,4)).filter(Boolean))].sort().reverse();\n  const allMonthsAn    = [...new Set(upworkProjects.map(p=>(p.startDate||\"\").slice(0,7)).filter(Boolean))].sort().reverse();\n  const [filterMode,   setFilterMode]  = useState(\"all\");\n  const [filterYear,   setFilterYear]  = useState(allYearsAn[0]||\"\");\n  const [filterMonth2, setFilterMonth2] = useState(allMonthsAn[0]||\"\");\n\n  const filteredAn = filterMode===\"year\" && filterYear\n    ? upworkProjects.filter(p=>(p.startDate||\"\").startsWith(filterYear))\n    : filterMode===\"month\" && filterMonth2\n      ? upworkProjects.filter(p=>(p.startDate||\"\").startsWith(filterMonth2))\n      : upworkProjects;\n\n  const fInv    = filteredAn.filter(p=>p.invitation).length;\n  const fNonInv = filteredAn.length - fInv;\n  const fHourly = filteredAn.filter(p=>p.hourlyJob).length;\n  const fFixed  = filteredAn.length - fHourly;\n\n  const cardSt = {background:\"var(--color-background-primary)\",border:\"0.5px solid var(--color-border-tertiary)\",borderRadius:12,padding:\"16px 18px\"};\n  const thSt   = {padding:\"9px 12px\",textAlign:\"left\",fontWeight:500,fontSize:11,textTransform:\"uppercase\",letterSpacing:\"0.05em\",color:\"var(--color-text-secondary)\"};\n  const inpSt  = {fontSize:13,padding:\"4px 8px\",border:\"0.5px solid var(--color-border-secondary)\",borderRadius:6,background:\"var(--color-background-primary)\",color:\"var(--color-text-primary)\",width:72,textAlign:\"center\"};\n  const selSt  = {fontSize:12,padding:\"4px 8px\",border:\"0.5px solid var(--color-border-secondary)\",borderRadius:6,background:\"var(--color-background-primary)\",color:\"var(--color-text-primary)\",cursor:\"pointer\"};\n  const pillSt = (active) => ({fontSize:12,padding:\"4px 14px\",borderRadius:20,border:\"0.5px solid\",cursor:\"pointer\",background:active?\"#111\":\"transparent\",color:active?\"#fff\":\"var(--color-text-secondary)\",borderColor:active?\"#111\":\"var(--color-border-secondary)\"});\n\n  return <div>\n    <div style={{fontWeight:500,fontSize:20,marginBottom:20}}>Upwork</div>\n\n    {/* Summary KPI */}\n    <div style={{display:\"grid\",gridTemplateColumns:\"repeat(5,minmax(0,1fr))\",gap:10,marginBottom:20}}>\n      {[\n        {label:\"Total Proyek\",    val:totalUpwork,   sub:null,                      bg:\"#f4f4f4\",        tc:\"var(--color-text-primary)\",   sc:\"var(--color-text-secondary)\"},\n        {label:\"Invitation\",      val:totalInvitation, sub:`${totalUpwork>0?Math.round(totalInvitation/totalUpwork*100):0}% dari total`, bg:\"#eff6ff\", tc:\"#1d4ed8\", sc:\"#3b82f6\"},\n        {label:\"Non-Invitation\",  val:totalNonInv,   sub:`${totalUpwork>0?Math.round(totalNonInv/totalUpwork*100):0}% dari total`,      bg:\"#fff8ed\", tc:\"#b45309\", sc:\"#d97706\"},\n        {label:\"Conversion Rate\", val:totalRate!==null?`${totalRate}%`:\"—\", sub:totalSent>0?`${totalWon} menang / ${totalSent} proposal`:totalSent===0?\"Belum ada data proposal\":null, bg:\"#E1F5EE\", tc:\"#085041\", sc:\"#0F6E56\"},,\n        {label:\"Hourly Job\", val:totalHourly, sub:`${hourlyPct}% dari total · ${totalUpwork-totalHourly} fixed`, bg:\"#fdf4ff\", tc:\"#7e22ce\", sc:\"#9333ea\"},\n      ].map(({label,val,sub,bg,tc,sc})=><div key={label} style={{background:bg,borderRadius:8,padding:\"12px 14px\"}}>\n        <div style={{fontSize:11,fontWeight:500,textTransform:\"uppercase\",letterSpacing:\"0.05em\",color:sc,marginBottom:6}}>{label}</div>\n        <div style={{fontSize:26,fontWeight:500,color:tc,lineHeight:1,marginBottom:sub?4:0}}>{val}</div>\n        {sub&&<div style={{fontSize:11,color:sc}}>{sub}</div>}\n      </div>)}\n    </div>\n\n    {/* Conversion rate table */}\n    <div style={{...cardSt,marginBottom:20}}>\n      <div style={{display:\"flex\",alignItems:\"center\",justifyContent:\"space-between\",marginBottom:showAddForm?12:14}}>\n        <div style={{fontWeight:500,fontSize:14}}>Proposal per Bulan</div>\n        <button onClick={()=>{setShowAddForm(v=>!v);setNewMonth(\"\");setNewVal(\"\");}} style={{fontSize:12,padding:\"5px 14px\"}}>{showAddForm?\"Batal\":\"+ Tambah Bulan\"}</button>\n      </div>\n      {showAddForm&&<div style={{display:\"flex\",gap:10,alignItems:\"flex-end\",marginBottom:14,padding:\"12px 14px\",background:\"var(--color-background-secondary)\",borderRadius:8}}>\n        <div style={{display:\"flex\",flexDirection:\"column\",gap:4}}>\n          <span style={{fontSize:11,color:\"var(--color-text-secondary)\",fontWeight:500}}>Bulan</span>\n          <input type=\"month\" value={newMonth} onChange={e=>setNewMonth(e.target.value)} style={{...inpSt,width:160,textAlign:\"left\"}}/>\n        </div>\n        <div style={{display:\"flex\",flexDirection:\"column\",gap:4}}>\n          <span style={{fontSize:11,color:\"var(--color-text-secondary)\",fontWeight:500}}>Jumlah Proposal</span>\n          <input type=\"number\" value={newVal} onChange={e=>setNewVal(e.target.value)} placeholder=\"cth. 10\" min=\"0\" style={{...inpSt,width:120,textAlign:\"left\"}}\n            onKeyDown={e=>{if(e.key===\"Enter\")addMonth();}}/>\n        </div>\n        <button onClick={addMonth} style={{fontSize:12,padding:\"7px 18px\",background:\"#111\",color:\"#fff\",borderColor:\"#111\"}}>Simpan</button>\n      </div>}\n      {rows.length===0\n        ? <div style={{fontSize:13,color:\"var(--color-text-secondary)\",textAlign:\"center\",padding:\"2rem 0\"}}>Tambah data proposal untuk melihat conversion rate.</div>\n        : <table style={{width:\"100%\",borderCollapse:\"collapse\",fontSize:13}}>\n            <thead>\n              <tr style={{borderBottom:\"0.5px solid var(--color-border-tertiary)\"}}>\n                <th style={thSt}>Bulan</th>\n                <th style={{...thSt,textAlign:\"center\"}}>Proposal Terkirim</th>\n                <th style={{...thSt,textAlign:\"center\"}}>Proyek Didapat</th>\n                <th style={{...thSt,textAlign:\"center\"}}>Dari Invitation</th>\n                <th style={{...thSt,textAlign:\"center\"}}>Conversion Rate</th>\n                <th style={{...thSt,width:40}}></th>\n              </tr>\n            </thead>\n            <tbody>\n              {rows.map((r,i)=>{\n                const isLast = i===rows.length-1;\n                const rateBg = r.rate===null?\"transparent\":r.rate>=30?\"#E1F5EE\":r.rate>=15?\"#fff8ed\":\"#fef2f2\";\n                const rateColor = r.rate===null?\"var(--color-text-secondary)\":r.rate>=30?\"#085041\":r.rate>=15?\"#b45309\":\"#991b1b\";\n                return <tr key={r.m} style={{borderBottom:isLast?\"none\":\"0.5px solid var(--color-border-tertiary)\"}}>\n                  <td style={{padding:\"10px 12px\",fontWeight:500,color:\"var(--color-text-primary)\"}}>{monthLabel(r.m)}</td>\n                  <td style={{padding:\"10px 12px\",textAlign:\"center\"}}>\n                    {editingMonth===r.m\n                      ? <input autoFocus type=\"number\" value={editVal} min=\"0\"\n                          onChange={e=>setEditVal(e.target.value)}\n                          onBlur={()=>commitEdit(r.m)}\n                          onKeyDown={e=>{if(e.key===\"Enter\")commitEdit(r.m);if(e.key===\"Escape\")setEditingMonth(null);}}\n                          style={{...inpSt,width:64}}/>\n                      : <span onClick={()=>startEdit(r.m)} style={{cursor:\"pointer\",fontWeight:500,color:r.sent>0?\"var(--color-text-primary)\":\"var(--color-text-secondary)\",borderBottom:\"1px dashed var(--color-border-secondary)\",paddingBottom:1}}>\n                          {r.sent>0?r.sent:\"klik untuk isi\"}\n                        </span>}\n                  </td>\n                  <td style={{padding:\"10px 12px\",textAlign:\"center\",fontWeight:500,color:\"var(--color-text-primary)\"}}>{r.won}</td>\n                  <td style={{padding:\"10px 12px\",textAlign:\"center\"}}>\n                    {r.invWon>0\n                      ? <span style={{fontSize:11,fontWeight:500,background:\"#eff6ff\",color:\"#1d4ed8\",borderRadius:20,padding:\"2px 10px\"}}>{r.invWon} inv</span>\n                      : <span style={{color:\"var(--color-text-secondary)\"}}>—</span>}\n                  </td>\n                  <td style={{padding:\"10px 12px\",textAlign:\"center\"}}>\n                    {r.rate!==null\n                      ? <span style={{fontSize:12,fontWeight:500,borderRadius:20,padding:\"3px 10px\",background:rateBg,color:rateColor}}>{r.rate}%</span>\n                      : <span style={{fontSize:12,color:\"var(--color-text-secondary)\"}}>—</span>}\n                  </td>\n                  <td style={{padding:\"10px 12px\",textAlign:\"center\"}}>\n                    <button onClick={()=>deleteMonth(r.m)} style={{border:\"none\",background:\"transparent\",cursor:\"pointer\",color:\"var(--color-text-danger)\",padding:\"2px 4px\",fontSize:13}}>✕</button>\n                  </td>\n                </tr>;\n              })}\n              {rows.length>1&&<tr style={{borderTop:\"1.5px solid var(--color-border-secondary)\",background:\"var(--color-background-secondary)\"}}>\n                <td style={{padding:\"10px 12px\",fontWeight:500,fontSize:12,color:\"var(--color-text-secondary)\"}}>Total</td>\n                <td style={{padding:\"10px 12px\",textAlign:\"center\",fontWeight:500}}>{totalSent}</td>\n                <td style={{padding:\"10px 12px\",textAlign:\"center\",fontWeight:500}}>{totalWon}</td>\n                <td style={{padding:\"10px 12px\",textAlign:\"center\",fontWeight:500}}>{totalInv>0?`${totalInv} inv`:\"—\"}</td>\n                <td style={{padding:\"10px 12px\",textAlign:\"center\"}}>\n                  {totalRate!==null\n                    ? <span style={{fontSize:12,fontWeight:500,borderRadius:20,padding:\"3px 10px\",background:totalRate>=30?\"#E1F5EE\":totalRate>=15?\"#fff8ed\":\"#fef2f2\",color:totalRate>=30?\"#085041\":totalRate>=15?\"#b45309\":\"#991b1b\"}}>{totalRate}%</span>\n                    : \"—\"}\n                </td>\n                <td/>\n              </tr>}\n            </tbody>\n          </table>\n      }\n    </div>\n\n    {/* Analysis section — filterable */}\n    <div style={cardSt}>\n      <div style={{display:\"flex\",alignItems:\"center\",justifyContent:\"space-between\",marginBottom:16,flexWrap:\"wrap\",gap:10}}>\n        <div style={{fontWeight:500,fontSize:14}}>Upwork Analysis</div>\n        <div style={{display:\"flex\",gap:6,alignItems:\"center\",flexWrap:\"wrap\"}}>\n          <button style={pillSt(filterMode===\"all\")}   onClick={()=>setFilterMode(\"all\")}>Semua</button>\n          <button style={pillSt(filterMode===\"year\")}  onClick={()=>setFilterMode(\"year\")}>Per Tahun</button>\n          {filterMode===\"year\"&&<select value={filterYear} onChange={e=>setFilterYear(e.target.value)} style={selSt}>\n            {allYearsAn.map(y=><option key={y} value={y}>{y}</option>)}\n          </select>}\n          <button style={pillSt(filterMode===\"month\")} onClick={()=>setFilterMode(\"month\")}>Per Bulan</button>\n          {filterMode===\"month\"&&<select value={filterMonth2} onChange={e=>setFilterMonth2(e.target.value)} style={selSt}>\n            {allMonthsAn.map(m=><option key={m} value={m}>{monthLabel(m)}</option>)}\n          </select>}\n        </div>\n      </div>\n\n      {filteredAn.length===0\n        ? <div style={{fontSize:13,color:\"var(--color-text-secondary)\",textAlign:\"center\",padding:\"1.5rem 0\"}}>Tidak ada proyek Upwork untuk periode ini.</div>\n        : <>\n            <div style={{display:\"flex\",gap:10,marginBottom:16,flexWrap:\"wrap\"}}>\n              {[\n                {label:\"Total Proyek\",   val:filteredAn.length, bg:\"#f0fdf4\", tc:\"#15803d\", sc:\"#166534\", sub:null},\n                {label:\"Invitation\",     val:fInv,              bg:\"#eff6ff\", tc:\"#1d4ed8\", sc:\"#1d4ed8\", sub:`${filteredAn.length>0?Math.round(fInv/filteredAn.length*100):0}% dari total`},\n                {label:\"Non-Invitation\", val:fNonInv,           bg:\"#fff8ed\", tc:\"#b45309\", sc:\"#b45309\", sub:`${filteredAn.length>0?Math.round(fNonInv/filteredAn.length*100):0}% dari total`},\n                {label:\"Hourly Job\",     val:fHourly,           bg:\"#fdf4ff\", tc:\"#7e22ce\", sc:\"#9333ea\", sub:`${fFixed} fixed price`},\n              ].map(({label,val,bg,tc,sc,sub})=><div key={label} style={{flex:1,minWidth:100,background:bg,borderRadius:8,padding:\"12px 14px\"}}>\n                <div style={{fontSize:10,fontWeight:600,textTransform:\"uppercase\",letterSpacing:\"0.05em\",color:sc,marginBottom:4}}>{label}</div>\n                <div style={{fontSize:24,fontWeight:500,color:tc,lineHeight:1}}>{val}</div>\n                {sub&&<div style={{fontSize:11,color:sc,marginTop:2}}>{sub}</div>}\n              </div>)}\n            </div>\n\n            <div style={{border:\"0.5px solid var(--color-border-tertiary)\",borderRadius:10,overflow:\"hidden\"}}>\n              <table style={{width:\"100%\",borderCollapse:\"collapse\",fontSize:13}}>\n                <thead>\n                  <tr style={{background:\"var(--color-background-secondary)\",borderBottom:\"0.5px solid var(--color-border-tertiary)\"}}>\n                    <th style={thSt}>Proyek</th>\n                    <th style={thSt}>Client</th>\n                    <th style={{...thSt,textAlign:\"center\"}}>Tipe</th>\n                    <th style={{...thSt,textAlign:\"center\"}}>Invitation</th>\n                    <th style={thSt}>Status</th>\n                    <th style={{...thSt,textAlign:\"right\"}}>Income</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  {[...filteredAn].reverse().map((p,i)=>{\n                    const cfg = STATUS_CFG[p.status]||STATUS_CFG[\"Ongoing\"];\n                    const isLast = i===filteredAn.length-1;\n                    return <tr key={p.id} style={{borderBottom:isLast?\"none\":\"0.5px solid var(--color-border-tertiary)\",background:i%2===0?\"transparent\":\"var(--color-background-secondary)\"}}>\n                      <td style={{padding:\"9px 12px\",fontWeight:500,color:\"var(--color-text-primary)\"}}>{p.projectName||\"—\"}</td>\n                      <td style={{padding:\"9px 12px\",color:\"var(--color-text-secondary)\"}}>{p.clientName||\"—\"}</td>\n                      <td style={{padding:\"9px 12px\",textAlign:\"center\"}}>\n                        {p.hourlyJob\n                          ? <span style={{background:\"#fdf4ff\",color:\"#7e22ce\",borderRadius:20,padding:\"2px 9px\",fontSize:11,fontWeight:500}}>Hourly</span>\n                          : <span style={{background:\"#f4f4f4\",color:\"#555\",borderRadius:20,padding:\"2px 9px\",fontSize:11}}>Fixed</span>}\n                      </td>\n                      <td style={{padding:\"9px 12px\",textAlign:\"center\"}}>\n                        {p.invitation\n                          ? <span style={{background:\"#eff6ff\",color:\"#1d4ed8\",borderRadius:20,padding:\"2px 10px\",fontSize:11,fontWeight:500}}>Invitation</span>\n                          : <span style={{color:\"var(--color-text-secondary)\",fontSize:11}}>—</span>}\n                      </td>\n                      <td style={{padding:\"9px 12px\"}}>\n                        <span style={{background:cfg.bg,color:cfg.text,borderRadius:20,padding:\"2px 10px\",fontSize:11,fontWeight:500,display:\"inline-flex\",alignItems:\"center\",gap:4}}>\n                          <span style={{width:5,height:5,borderRadius:\"50%\",background:cfg.dot,display:\"inline-block\"}}/>\n                          {p.status}\n                        </span>\n                      </td>\n                      <td style={{padding:\"9px 12px\",textAlign:\"right\",fontWeight:500,color:\"var(--color-text-primary)\"}}>\n                        {p.priceRp?`Rp ${p.priceRp}`:p.priceUSD?`$${p.priceUSD}`:\"—\"}\n                      </td>\n                    </tr>;\n                  })}\n                </tbody>\n              </table>\n            </div>\n          </>\n      }\n    </div>\n  </div>;\n}\n\nfunction ResourcesPage() {\n  return <div style={{display:\"flex\",flexDirection:\"column\",alignItems:\"center\",justifyContent:\"center\",height:300,color:\"var(--color-text-secondary)\",gap:8}}><svg width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\"/><path d=\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\"/></svg><span style={{fontSize:15,fontWeight:500}}>Resources</span><span style={{fontSize:13}}>Halaman ini masih kosong</span></div>;\n}\n\nfunction ProjectCard({proj,index,allProjects,onEdit,onDelete}) {\n  const num = allProjects ? projectNum(proj, allProjects) : (index??proj.id);\n  const vis = proj.tasks.filter(t=>t.visible);\n  const done = vis.filter(t=>t.done).length;\n  const pct = vis.length?Math.round(done/vis.length*100):0;\n  const allDone = vis.length>0 && done===vis.length;\n  const feeItems = normalizeFeeArr(proj.fee);\n  const psItems = normalizeFeeArr(proj.paymentStatus);\n  const showFeeRow = (proj.team&&feeItems.length>0)||(proj.hourlyJob&&proj.jobPerHour);\n  return <div id={`proj-card-${proj.id}`} style={{border:\"2px solid #000\",borderRadius:16,background:\"var(--color-background-primary)\",padding:\"1.25rem 1.5rem\",marginBottom:14,boxShadow:\"0 2px 8px rgba(0,0,0,0.07)\"}}><div style={{display:\"flex\",justifyContent:\"space-between\",alignItems:\"flex-start\",marginBottom:12}}><div style={{flex:1,minWidth:0}}><div style={{display:\"flex\",alignItems:\"center\",gap:8,marginBottom:2}}><div style={{fontWeight:500,fontSize:16,overflow:\"hidden\",textOverflow:\"ellipsis\",whiteSpace:\"nowrap\"}}>{proj.projectName||\"Untitled\"}</div><span style={{fontSize:12,background:\"var(--color-background-secondary)\",borderRadius:6,padding:\"2px 8px\",color:\"var(--color-text-secondary)\",fontWeight:500,flexShrink:0}}>#{num}</span></div>{proj.address&&<div style={{fontSize:12,color:\"var(--color-text-secondary)\"}}>{proj.address}</div>}</div><div style={{display:\"flex\",alignItems:\"center\",gap:8,marginLeft:12,flexShrink:0}}><PlatformBadge platform={proj.platform}/><StatusBadge status={proj.status}/></div></div><div style={{display:\"grid\",gridTemplateColumns:\"repeat(4,1fr)\",gap:\"10px 16px\",marginBottom:12}}><Chip label=\"Client\" value={proj.clientName}/><Chip label=\"Client Type\" value={proj.clientType}/><Chip label=\"Scope of Work\" value={proj.jobType}/><Chip label=\"Project Type\" value={proj.design}/><Chip label=\"Style\" value={proj.style}/><Chip label=\"Start\" value={proj.startDate}/><Chip label=\"End\" value={proj.endDate}/><Chip label=\"Hours\" value={proj.hours}/><Chip label=\"Area\" value={proj.area?`${proj.area} m²`:null}/></div>{proj.notes&&<div style={{marginBottom:12}}><span style={{fontSize:10,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",letterSpacing:\"0.05em\",fontWeight:500}}>Notes</span><div style={{marginTop:4,fontSize:13,color:\"var(--color-text-primary)\"}}>{proj.notes}</div></div>}{showFeeRow&&<div style={{display:\"grid\",gridTemplateColumns:\"repeat(4,1fr)\",gap:\"10px 16px\",marginBottom:12}}>{proj.team&&feeItems.length>0&&<div><span style={{fontSize:10,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",letterSpacing:\"0.05em\",fontWeight:500}}>Fee</span><div style={{marginTop:4,display:\"flex\",flexDirection:\"column\",gap:3}}>{feeItems.map(f=><span key={f.name} style={{fontSize:13,color:f.lunas?\"var(--color-text-secondary)\":\"var(--color-text-primary)\",textDecoration:f.lunas?\"line-through\":\"none\"}}>{f.name}</span>)}</div></div>}{proj.hourlyJob&&proj.jobPerHour&&<div><span style={{fontSize:10,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",letterSpacing:\"0.05em\",fontWeight:500}}>Job Per Hour</span><div style={{marginTop:4,fontSize:13,color:\"var(--color-text-primary)\"}}>${proj.jobPerHour}</div></div>}</div>}<Divider/>{vis.length>0&&<div style={{marginBottom:10,background:allDone?\"#f0fdf4\":\"#fffbeb\",border:`1.5px solid ${allDone?\"#86efac\":\"#fcd34d\"}`,borderRadius:10,padding:\"12px 14px\"}}><div style={{display:\"flex\",alignItems:\"center\",gap:8,marginBottom:8}}><svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke={allDone?\"#16a34a\":\"#b45309\"} strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"9 11 12 14 22 4\"/><path d=\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11\"/></svg><span style={{fontSize:11,color:allDone?\"#16a34a\":\"#b45309\",textTransform:\"uppercase\",letterSpacing:\"0.05em\",fontWeight:600}}>Tasks</span><span style={{fontSize:11,color:allDone?\"#166534\":\"#92400e\",background:allDone?\"#dcfce7\":\"#fef3c7\",borderRadius:20,padding:\"1px 8px\",fontWeight:500}}>{done}/{vis.length} selesai</span></div><div style={{height:4,background:allDone?\"#bbf7d0\":\"#fde68a\",borderRadius:4,marginBottom:10,overflow:\"hidden\"}}><div style={{height:\"100%\",width:`${pct}%`,background:allDone?\"#22c55e\":\"#f59e0b\",borderRadius:4,transition:\"width 0.3s\"}}/></div><div style={{display:\"grid\",gridTemplateColumns:\"1fr\",gap:\"6px\"}}>{vis.map(t=><div key={t.id} style={{display:\"flex\",alignItems:\"center\",gap:6}}>{t.done? <div style={{display:\"flex\",alignItems:\"center\",gap:6,flex:1,opacity:0.45}}><span style={{width:13,height:13,borderRadius:3,background:\"#22c55e\",display:\"inline-flex\",alignItems:\"center\",justifyContent:\"center\",flexShrink:0}}><svg viewBox=\"0 0 12 12\" width=\"9\" height=\"9\"><polyline points=\"1.5,6 4.5,9 10.5,3\" stroke=\"white\" strokeWidth=\"2.5\" fill=\"none\" strokeLinecap=\"round\" strokeLinejoin=\"round\"/></svg></span><span style={{fontSize:12,color:allDone?\"#16a34a\":\"#78350f\",textDecoration:\"line-through\",flex:1}}>{t.name}</span>{t.deadline&&<span style={{fontSize:10,color:allDone?\"#16a34a\":\"#b45309\",flexShrink:0}}>{t.deadline}</span>}</div>: <div style={{display:\"flex\",alignItems:\"center\",gap:6,flex:1}}><CheckBox done={false}/><span style={{fontSize:12,color:\"#78350f\",flex:1}}>{t.name}</span>{t.deadline&&<span style={{fontSize:10,color:\"#b45309\",flexShrink:0}}>{t.deadline}</span>}</div>}</div>)}</div></div>}<div style={{display:\"flex\",gap:16,flexWrap:\"wrap\",marginBottom:12}}>{proj.priceRp&&<div><div style={{fontSize:10,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",fontWeight:500,marginBottom:2}}>Nett Price</div><div style={{fontSize:14,fontWeight:500}}>Rp {proj.priceRp}</div></div>}{proj.priceUSD&&<div><div style={{fontSize:10,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",fontWeight:500,marginBottom:2}}>Priced (USD)</div><div style={{fontSize:14,fontWeight:500}}>${proj.priceUSD}</div></div>}{proj.grossPrice&&<div><div style={{fontSize:10,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",fontWeight:500,marginBottom:2}}>Gross Price</div><div style={{fontSize:14,fontWeight:500}}>Rp {proj.grossPrice}</div></div>}<div style={{marginLeft:\"auto\",display:\"flex\",gap:6,flexWrap:\"wrap\"}}>{proj.invitation&&<span style={{fontSize:11,background:\"#f0fdf4\",color:\"#166534\",borderRadius:6,padding:\"3px 10px\"}}>Invitation</span>}{proj.team&&<span style={{fontSize:11,background:\"#eff6ff\",color:\"#1d4ed8\",borderRadius:6,padding:\"3px 10px\"}}>Team</span>}{proj.hourlyJob&&<span style={{fontSize:11,background:\"#fdf2f8\",color:\"#86198f\",borderRadius:6,padding:\"3px 10px\"}}>Hourly</span>}</div></div>{psItems.length>0&&<div style={{marginBottom:12,background:\"#f0fdf4\",border:\"1.5px solid #86efac\",borderRadius:10,padding:\"12px 14px\"}}><div style={{display:\"flex\",alignItems:\"center\",gap:8,marginBottom:8}}><svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#16a34a\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\"/><path d=\"M2 10h20\"/></svg><span style={{fontSize:11,color:\"#16a34a\",textTransform:\"uppercase\",fontWeight:600,letterSpacing:\"0.05em\"}}>Payment Status</span><span style={{fontSize:11,background:\"#dcfce7\",color:\"#166534\",borderRadius:20,padding:\"1px 8px\",fontWeight:500,marginLeft:\"auto\"}}>{psItems.filter(f=>f.lunas).length}/{psItems.length} lunas</span></div><div style={{display:\"flex\",flexDirection:\"column\",gap:5}}>{psItems.map(f=><div key={f.name} style={{display:\"flex\",alignItems:\"center\",gap:8}}><span style={{width:7,height:7,borderRadius:\"50%\",background:f.lunas?\"#22c55e\":\"#d1d5db\",flexShrink:0,display:\"inline-block\"}}/><span style={{fontSize:13,color:f.lunas?\"#166534\":\"#374151\",textDecoration:f.lunas?\"line-through\":\"none\",flex:1,opacity:f.lunas?0.7:1}}>{f.name}</span>{f.lunas&&<span style={{fontSize:10,color:\"#16a34a\",fontWeight:600}}>✓ Lunas</span>}</div>)}</div></div>}<div style={{display:\"flex\",justifyContent:\"flex-end\",gap:8}}><button onClick={()=>onEdit(proj)} style={{fontSize:12,padding:\"5px 14px\"}}>Edit</button><button onClick={()=>onDelete(proj.id)} style={{fontSize:12,padding:\"5px 14px\",color:\"var(--color-text-danger)\",borderColor:\"var(--color-border-danger)\"}}>Hapus</button></div></div>;\n}\n\nconst LOCATION_SUGGESTIONS = [\n  \"Australia\",\"Austria\",\"Belgium\",\"Brazil\",\"Canada\",\"China\",\"Denmark\",\"Egypt\",\"Finland\",\"France\",\n  \"Germany\",\"Greece\",\"Hong Kong\",\"India\",\"Indonesia\",\"Ireland\",\"Israel\",\"Italy\",\"Japan\",\"Jordan\",\n  \"Kuwait\",\"Malaysia\",\"Mexico\",\"Netherlands\",\"New Zealand\",\"Norway\",\"Pakistan\",\"Philippines\",\n  \"Poland\",\"Portugal\",\"Qatar\",\"Russia\",\"Saudi Arabia\",\"Singapore\",\"South Korea\",\"Spain\",\n  \"Sweden\",\"Switzerland\",\"Taiwan\",\"Thailand\",\"Turkey\",\"UAE\",\"United Kingdom\",\"United States\",\n  \"Vietnam\",\"South Africa\",\"Argentina\",\"Chile\",\"Colombia\",\"Peru\",\n  \"Jakarta\",\"Bali\",\"Surabaya\",\"Bandung\",\"Yogyakarta\",\n  \"Sydney\",\"Melbourne\",\"Brisbane\",\"Perth\",\"Auckland\",\n  \"London\",\"Manchester\",\"Edinburgh\",\"Dublin\",\n  \"New York\",\"Los Angeles\",\"Chicago\",\"San Francisco\",\"Miami\",\"Toronto\",\"Vancouver\",\n  \"Dubai\",\"Abu Dhabi\",\"Doha\",\"Riyadh\",\"Kuwait City\",\n  \"Tokyo\",\"Seoul\",\"Beijing\",\"Shanghai\",\"Bangkok\",\"Kuala Lumpur\",\"Manila\",\"Ho Chi Minh City\",\n  \"Trinidad and Tobago\",\"Jamaica\",\"Barbados\",\"Bahamas\",\"Dominican Republic\",\"Cuba\",\n  \"Panama\",\"Costa Rica\",\"Guatemala\",\"Ecuador\",\"Paraguay\",\"Bolivia\",\n  \"Ivory Coast\",\"Ghana\",\"Senegal\",\"Cameroon\",\"Angola\",\"Ethiopia\",\"Rwanda\",\"Tanzania\",\n  \"Mozambique\",\"Namibia\",\"Botswana\",\"Madagascar\",\"Somalia\",\n  \"Algeria\",\"Morocco\",\"Libya\",\"Tunisia\",\"Sudan\",\n  \"Sri Lanka\",\"Nepal\",\"Bangladesh\",\"Myanmar\",\"Cambodia\",\"Laos\",\"Mongolia\",\n  \"Maldives\",\"Brunei\",\"Papua New Guinea\",\"Fiji\",\"New Zealand\",\n  \"Latvia\",\"Lithuania\",\"Estonia\",\"Slovenia\",\"Croatia\",\"Serbia\",\"Albania\",\"Cyprus\",\"Malta\",\"Luxembourg\",\"Iceland\",\n  \"Armenia\",\"Georgia\",\"Azerbaijan\",\"Belarus\",\"Moldova\",\n  \"Turkmenistan\",\"Kyrgyzstan\",\"Tajikistan\",\"Afghanistan\",\n  \"Oman\",\"Bahrain\",\"Palestine\",\"Yemen\",\n];\n\nfunction LocationInput({value, onChange, style}) {\n  const [show, setShow] = useState(false);\n  const ref = useRef(null);\n  useEffect(()=>{\n    const h = e => { if(ref.current&&!ref.current.contains(e.target)) setShow(false); };\n    document.addEventListener(\"mousedown\",h);\n    return ()=>document.removeEventListener(\"mousedown\",h);\n  },[]);\n  const q = (value||\"\").trim().toLowerCase();\n  const filtered = q.length>=2\n    ? LOCATION_SUGGESTIONS.filter(s=>s.toLowerCase().includes(q)).slice(0,6)\n    : [];\n  return <div ref={ref} style={{position:\"relative\"}}>\n    <input\n      style={style}\n      value={value}\n      onChange={e=>{onChange(e.target.value);setShow(true);}}\n      onFocus={()=>setShow(true)}\n      placeholder=\"Singapore, Malaysia, Australia...\"\n      autoComplete=\"off\"\n    />\n    {show&&filtered.length>0&&<div style={{position:\"absolute\",top:\"100%\",left:0,right:0,zIndex:999,background:\"#fff\",border:\"1px solid #ddd\",borderRadius:8,marginTop:4,boxShadow:\"0 4px 20px rgba(0,0,0,0.12)\",overflow:\"hidden\"}}>\n      {filtered.map(s=><div key={s} onMouseDown={e=>{e.preventDefault();onChange(s);setShow(false);}} style={{padding:\"8px 12px\",fontSize:13,cursor:\"pointer\",color:\"#222\"}} onMouseEnter={e=>e.currentTarget.style.background=\"#f5f5f5\"} onMouseLeave={e=>e.currentTarget.style.background=\"#fff\"}>\n        {s}\n      </div>)}\n    </div>}\n  </div>;\n}\n\nfunction ClientNameInput({value, onChange, onAutofill, allProjects, style}) {\n  const [show, setShow] = useState(false);\n  const ref = useRef(null);\n\n  useEffect(()=>{\n    const h = e => { if(ref.current&&!ref.current.contains(e.target)) setShow(false); };\n    document.addEventListener(\"mousedown\",h);\n    return ()=>document.removeEventListener(\"mousedown\",h);\n  },[]);\n\n  // Build unique client list from existing projects, keyed by lowercase name\n  const clientMap = {};\n  allProjects.forEach(p=>{\n    const name = (p.clientName||\"\").trim();\n    if (!name) return;\n    const key = name.toLowerCase();\n    if (!clientMap[key]) clientMap[key] = {name, clientType:p.clientType||\"\", address:p.address||\"\", platform:p.platform||\"\", count:0};\n    clientMap[key].count++;\n    // Always use latest project data for autofill\n    if (p.clientType) clientMap[key].clientType = p.clientType;\n    if (p.address)    clientMap[key].address    = p.address;\n    if (p.platform)   clientMap[key].platform   = p.platform;\n  });\n\n  const q = (value||\"\").trim().toLowerCase();\n  const suggestions = q.length>=1\n    ? Object.values(clientMap)\n        .filter(c=>c.name.toLowerCase().includes(q))\n        .sort((a,b)=>b.count-a.count)\n        .slice(0,6)\n    : [];\n\n  const pick = (client) => {\n    onChange(client.name);\n    onAutofill({clientType:client.clientType, address:client.address, platform:client.platform});\n    setShow(false);\n  };\n\n  return <div ref={ref} style={{position:\"relative\"}}>\n    <input\n      style={style}\n      value={value}\n      onChange={e=>{onChange(e.target.value);setShow(true);}}\n      onFocus={()=>setShow(true)}\n      placeholder=\"Nama client...\"\n      autoComplete=\"off\"\n    />\n    {show&&suggestions.length>0&&<div style={{\n      position:\"absolute\",top:\"100%\",left:0,right:0,zIndex:999,\n      background:\"#fff\",border:\"1px solid #ddd\",borderRadius:8,\n      marginTop:4,boxShadow:\"0 4px 20px rgba(0,0,0,0.12)\",overflow:\"hidden\"\n    }}>\n      {suggestions.map(c=><div key={c.name}\n        onMouseDown={e=>{e.preventDefault();pick(c);}}\n        style={{padding:\"8px 12px\",cursor:\"pointer\",borderBottom:\"0.5px solid #f0f0f0\"}}\n        onMouseEnter={e=>e.currentTarget.style.background=\"#f5f5f5\"}\n        onMouseLeave={e=>e.currentTarget.style.background=\"#fff\"}\n      >\n        <div style={{display:\"flex\",alignItems:\"center\",justifyContent:\"space-between\",gap:8}}>\n          <span style={{fontSize:13,fontWeight:500,color:\"#222\"}}>{c.name}</span>\n          <div style={{display:\"flex\",gap:4,flexShrink:0}}>\n            {c.count>1&&<span style={{fontSize:10,background:\"#eff6ff\",color:\"#1d4ed8\",borderRadius:10,padding:\"1px 7px\"}}>{c.count}×</span>}\n            {c.clientType&&<span style={{fontSize:10,background:\"#f0fdf4\",color:\"#166534\",borderRadius:10,padding:\"1px 7px\"}}>{c.clientType}</span>}\n            {c.platform&&<span style={{fontSize:10,background:\"#f4f4f4\",color:\"#555\",borderRadius:10,padding:\"1px 7px\"}}>{c.platform}</span>}\n          </div>\n        </div>\n        {c.address&&<div style={{fontSize:11,color:\"#888\",marginTop:2}}>{c.address}</div>}\n      </div>)}\n    </div>}\n  </div>;\n}\n\nfunction ProjectForm({initial,onSave,onCancel,allProjects=[]}) {\n  const [proj,setProj] = useState(initial||emptyProject());\n  const [openId,setOpenId] = useState(null);\n  const set=(k,v)=>setProj(p=>recalc({...p,[k]:v}));\n  function recalc(p) {\n    if (!p.grossPrice) return p;\n    if (!p.team) return {...p,priceRp:p.grossPrice};\n    const fi=normalizeFeeArr(p.fee); if(fi.length===0) return {...p,priceRp:p.grossPrice};\n    const gross=parseFloat(p.grossPrice.replace(/\\./g,\"\").replace(\",\",\".\"))||0; if(gross===0) return p;\n    const total=fi.reduce((s,f)=>{const m=f.name.match(/[\\d.,]+/g);if(!m)return s;return s+(parseFloat(m[m.length-1].replace(/\\./g,\"\").replace(\",\",\".\"))||0);},0);\n    return {...p,priceRp:formatRp(Math.round(gross-total).toString())};\n  }\n  const setTask=(id,k,v)=>setProj(p=>({...p,tasks:p.tasks.map(t=>t.id===id?{...t,[k]:v}:t)}));\n  const addTask=()=>setProj(p=>({...p,tasks:[...p.tasks,{id:Date.now(),name:\"\",done:false,visible:false,deadline:\"\"}]}));\n  const removeTask=id=>setProj(p=>({...p,tasks:p.tasks.filter(t=>t.id!==id)}));\n  const inp={width:\"100%\",boxSizing:\"border-box\"};\n  return <div><div style={{fontWeight:500,fontSize:16,marginBottom:16}}>{initial?\"Edit Proyek\":\"Proyek Baru\"}</div><div style={{display:\"grid\",gridTemplateColumns:\"1fr 1fr\",gap:12}}><Field label=\"Nama Proyek\"><input style={inp} value={proj.projectName} onChange={e=>set(\"projectName\",e.target.value)} placeholder=\"Proyek Sarah\"/></Field><Field label=\"Client Name\"><ClientNameInput style={inp} value={proj.clientName} allProjects={allProjects} onChange={v=>set(\"clientName\",v)} onAutofill={({clientType,address,platform})=>setProj(p=>({...p,clientType:clientType||p.clientType,address:address||p.address,platform:platform||p.platform}))}/></Field><Field label=\"Client Type\"><SearchableSelect id=\"clientType\" value={proj.clientType||\"Owner\"} onChange={v=>set(\"clientType\",v)} openId={openId} setOpenId={setOpenId} storageKey=\"_clientTypeOptions\" defaultOptions={clientTypeOptions} placeholder=\"Pilih tipe klien...\"/></Field><Field label=\"Platform\"><CustomSelect id=\"platform\" value={proj.platform} onChange={v=>set(\"platform\",v)} options={platformOptions} openId={openId} setOpenId={setOpenId}/></Field><div style={{gridColumn:\"1/-1\"}}><Field label=\"Location\"><LocationInput style={inp} value={proj.address} onChange={v=>set(\"address\",v)}/></Field><div style={{display:\"flex\",gap:16,marginTop:4,flexWrap:\"wrap\"}}>{proj.platform===\"Upwork\"&&<div style={{display:\"flex\",alignItems:\"center\",gap:8}}><input type=\"checkbox\" id=\"inv\" checked={proj.invitation} onChange={e=>set(\"invitation\",e.target.checked)}/><label htmlFor=\"inv\" style={{fontSize:13}}>Invitation</label></div>}<div style={{display:\"flex\",alignItems:\"center\",gap:8}}><input type=\"checkbox\" id=\"team\" checked={proj.team||false} onChange={e=>{set(\"team\",e.target.checked);if(e.target.checked)set(\"hourlyJob\",false);}}/><label htmlFor=\"team\" style={{fontSize:13}}>Team</label></div><div style={{display:\"flex\",alignItems:\"center\",gap:8}}><input type=\"checkbox\" id=\"hourlyJob\" checked={proj.hourlyJob||false} onChange={e=>{set(\"hourlyJob\",e.target.checked);if(e.target.checked)set(\"team\",false);}}/><label htmlFor=\"hourlyJob\" style={{fontSize:13}}>Hourly Job</label></div></div></div><RpInput label=\"Nett Price (Rp)\" value={proj.priceRp} onChange={v=>set(\"priceRp\",v)}/><Field label=\"Priced (USD)\"><input style={inp} value={proj.priceUSD} onChange={e=>set(\"priceUSD\",e.target.value)}/></Field><RpInput label=\"Gross Price (Rp)\" value={proj.grossPrice} onChange={v=>set(\"grossPrice\",v)}/>{proj.hourlyJob?<Field label=\"Job Per Hour ($)\"><input style={inp} value={proj.jobPerHour} onChange={e=>set(\"jobPerHour\",e.target.value)} placeholder=\"40\"/></Field>:<div/>}<div style={{gridColumn:\"1/-1\"}}><Field label=\"Payment Status\"><MilestoneSelect id=\"paymentStatus\" value={proj.paymentStatus||[]} onChange={v=>set(\"paymentStatus\",v)} openId={openId} setOpenId={setOpenId} storageKey={`_psOptions_${proj.id}`}/></Field></div>{proj.team&&<div style={{gridColumn:\"1/-1\"}}><Field label=\"Fee\"><FeeSelect id=\"fee\" value={proj.fee||[]} onChange={v=>set(\"fee\",v)} openId={openId} setOpenId={setOpenId}/></Field></div>}<Field label=\"Area (m²)\"><input style={inp} value={proj.area} onChange={e=>set(\"area\",e.target.value)}/></Field><Field label=\"Style\"><input style={inp} value={proj.style} onChange={e=>set(\"style\",e.target.value)} placeholder=\"Minimalist, Modern, Classic...\"/></Field><Field label=\"Hours\"><input style={inp} value={proj.hours} onChange={e=>set(\"hours\",e.target.value)}/></Field><div/><Field label=\"Start Date\"><input type=\"date\" style={inp} value={proj.startDate} onChange={e=>set(\"startDate\",e.target.value)}/></Field><Field label=\"End Date\"><input type=\"date\" style={inp} value={proj.endDate} onChange={e=>set(\"endDate\",e.target.value)}/></Field><Field label=\"Status\"><CustomSelect id=\"status\" value={proj.status} onChange={v=>set(\"status\",v)} options={statusOptions} openId={openId} setOpenId={setOpenId}/></Field><div/><Field label=\"Scope of Work\"><SearchableSelect id=\"jobType\" value={proj.jobType} onChange={v=>set(\"jobType\",v)} openId={openId} setOpenId={setOpenId} storageKey=\"_jobTypeOptions\" defaultOptions={defaultJobTypeOptions} placeholder=\"Pilih scope...\"/></Field><Field label=\"Project Type\"><SearchableSelect id=\"design\" value={proj.design} onChange={v=>set(\"design\",v)} openId={openId} setOpenId={setOpenId} storageKey=\"_designOptions\" defaultOptions={defaultDesignOptions} placeholder=\"Pilih tipe...\"/></Field><div style={{gridColumn:\"1/-1\"}}><Field label=\"Notes\"><textarea style={{...inp,height:60,resize:\"vertical\"}} value={proj.notes} onChange={e=>set(\"notes\",e.target.value)}/></Field></div></div><div style={{marginTop:16,borderTop:\"0.5px solid var(--color-border-tertiary)\",paddingTop:14}}><div style={{display:\"flex\",justifyContent:\"space-between\",alignItems:\"center\",marginBottom:10}}><span style={{fontWeight:500,fontSize:14}}>Tasks</span><button onClick={addTask} style={{fontSize:12,padding:\"3px 12px\"}}>+ Tambah</button></div><div style={{display:\"grid\",gridTemplateColumns:\"64px 1fr 140px 44px 28px\",gap:6,alignItems:\"center\",marginBottom:4}}>{[\"Tampil\",\"Nama Task\",\"Deadline\",\"Done\",\"\"].map((h,i)=><span key={i} style={{fontSize:10,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",letterSpacing:\"0.04em\"}}>{h}</span>)}</div>{proj.tasks.map((t,i)=><div key={t.id} style={{display:\"grid\",gridTemplateColumns:\"64px 1fr 140px 44px 28px\",gap:6,alignItems:\"center\",marginBottom:6}}><select value={t.visible?\"yes\":\"no\"} onChange={e=>setTask(t.id,\"visible\",e.target.value===\"yes\")} style={{fontSize:12,padding:\"3px 4px\"}}><option value=\"no\">no</option><option value=\"yes\">yes</option></select><input value={t.name} onChange={e=>setTask(t.id,\"name\",e.target.value)} placeholder={`Task ${i+1}`}/><input type=\"date\" value={t.deadline} onChange={e=>setTask(t.id,\"deadline\",e.target.value)}/><div style={{textAlign:\"center\"}}><span onClick={()=>setTask(t.id,\"done\",!t.done)} style={{cursor:\"pointer\",display:\"inline-flex\",alignItems:\"center\",justifyContent:\"center\",width:18,height:18,border:`1.5px solid ${t.done?\"#22c55e\":\"var(--color-border-secondary)\"}`,borderRadius:4,background:t.done?\"#22c55e\":\"transparent\"}}>{t.done&&<svg viewBox=\"0 0 12 12\" width=\"11\" height=\"11\"><polyline points=\"1.5,6 4.5,9 10.5,3\" stroke=\"white\" strokeWidth=\"2\" fill=\"none\" strokeLinecap=\"round\" strokeLinejoin=\"round\"/></svg>}</span></div><button onClick={()=>removeTask(t.id)} style={{fontSize:12,padding:\"2px 6px\",color:\"var(--color-text-danger)\"}}>✕</button></div>)}</div><div style={{display:\"flex\",gap:8,marginTop:16,justifyContent:\"flex-end\"}}><button onClick={onCancel} style={{fontSize:13,padding:\"6px 16px\"}}>Batal</button><button onClick={()=>onSave(proj)} style={{fontSize:13,padding:\"6px 16px\",background:\"#111\",color:\"#fff\",borderColor:\"#111\"}}>Simpan</button></div></div>;\n}\n\n\n\n\nconst PRIORITY_CFG = {\n  High:   {bg:\"#fef2f2\",color:\"#991b1b\",dot:\"#ef4444\",order:0},\n  Medium: {bg:\"#fff8ed\",color:\"#b45309\",dot:\"#f59e0b\",order:1},\n  Low:    {bg:\"#f0fdf4\",color:\"#166534\",dot:\"#22c55e\",order:2},\n};\nconst priorityOptions = [\"High\",\"Medium\",\"Low\"];\n\nfunction DeadlineWarningBanner({projects}) {\n  const [threshold, setThreshold] = useState(()=>{try{return parseInt(window._deadlineThreshold)||7;}catch(e){return 7;}});\n  const [editing, setEditing] = useState(false);\n  const [tempVal, setTempVal] = useState(threshold);\n  const [dismissed, setDismissed] = useState([]);\n\n  useEffect(()=>{window._deadlineThreshold=threshold;},[threshold]);\n\n  const today = new Date(); today.setHours(0,0,0,0);\n\n  const warnings = [];\n  projects.filter(p=>p.status===\"Ongoing\").forEach(p=>{\n    p.tasks.filter(t=>t.visible&&!t.done&&t.deadline).forEach(t=>{\n      const dl = new Date(t.deadline); dl.setHours(0,0,0,0);\n      const diff = Math.round((dl-today)/(1000*60*60*24));\n      const key = `${p.id}-${t.id}`;\n      if (!dismissed.includes(key)) {\n        if (diff < 0) warnings.push({key,proj:p,task:t,diff,type:\"overdue\"});\n        else if (diff <= threshold) warnings.push({key,proj:p,task:t,diff,type:\"soon\"});\n      }\n    });\n  });\n\n  warnings.sort((a,b)=>a.diff-b.diff);\n\n  if (warnings.length===0) return null;\n\n  const overdue = warnings.filter(w=>w.type===\"overdue\");\n  const soon = warnings.filter(w=>w.type===\"soon\");\n\n  return <div style={{marginBottom:24}}>\n    <div style={{display:\"flex\",alignItems:\"center\",gap:10,marginBottom:10}}>\n      <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#b45309\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"/><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"/><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"/></svg>\n      <span style={{fontWeight:500,fontSize:15}}>Deadline Warning</span>\n      <span style={{fontSize:11,background:\"#fff8ed\",color:\"#b45309\",borderRadius:20,padding:\"2px 10px\",fontWeight:500}}>{warnings.length} task</span>\n      <div style={{marginLeft:\"auto\",display:\"flex\",alignItems:\"center\",gap:6}}>\n        {editing\n          ? <><input autoFocus type=\"number\" min=\"1\" max=\"90\" value={tempVal} onChange={e=>setTempVal(e.target.value)} style={{width:48,fontSize:12,padding:\"3px 6px\",border:\"1px solid #f59e0b\",borderRadius:4,textAlign:\"center\"}}/><span style={{fontSize:12,color:\"var(--color-text-secondary)\"}}>hari</span><button onClick={()=>{const v=parseInt(tempVal);if(v>0){setThreshold(v);}setEditing(false);}} style={{fontSize:11,padding:\"3px 8px\",background:\"#fff8ed\",color:\"#b45309\",borderColor:\"#f59e0b\",borderRadius:4}}>OK</button><button onClick={()=>setEditing(false)} style={{fontSize:11,padding:\"3px 6px\",border:\"none\",background:\"transparent\",color:\"#aaa\",cursor:\"pointer\"}}>✕</button></>\n          : <button onClick={()=>{setTempVal(threshold);setEditing(true);}} style={{fontSize:11,padding:\"3px 10px\",borderRadius:6,border:\"0.5px solid var(--color-border-tertiary)\",background:\"transparent\",color:\"var(--color-text-secondary)\",cursor:\"pointer\"}}>⚙ {threshold} hari</button>\n        }\n      </div>\n    </div>\n    <div style={{display:\"flex\",flexDirection:\"column\",gap:6}}>\n      {warnings.map(w=>{\n        const isOverdue = w.type===\"overdue\";\n        const bg = isOverdue?\"#fef2f2\":\"#fff8ed\";\n        const border = isOverdue?\"#fca5a5\":\"#fcd34d\";\n        const textColor = isOverdue?\"#991b1b\":\"#92400e\";\n        const dotColor = isOverdue?\"#ef4444\":\"#f59e0b\";\n        const dayLabel = isOverdue ? `${Math.abs(w.diff)} hari lalu` : w.diff===0 ? \"Hari ini!\" : `${w.diff} hari lagi`;\n        return <div key={w.key} style={{display:\"flex\",alignItems:\"center\",gap:10,background:bg,border:`1px solid ${border}`,borderRadius:8,padding:\"10px 14px\"}}>\n          <span style={{width:8,height:8,borderRadius:\"50%\",background:dotColor,flexShrink:0}}/>\n          <span style={{fontSize:13,fontWeight:500,color:textColor,flex:1}}>{w.proj.projectName||\"Untitled\"}</span>\n          <span style={{fontSize:12,color:textColor,opacity:0.8}}>{w.task.name}</span>\n          <span style={{fontSize:11,fontWeight:600,color:textColor,background:\"#fff\",borderRadius:20,padding:\"2px 8px\",border:`1px solid ${border}`,whiteSpace:\"nowrap\"}}>{dayLabel}</span>\n          <button onClick={()=>setDismissed(d=>[...d,w.key])} style={{fontSize:12,border:\"none\",background:\"transparent\",color:\"#aaa\",cursor:\"pointer\",padding:\"2px 4px\",lineHeight:1}}>✕</button>\n        </div>;\n      })}\n    </div>\n  </div>;\n}\n\nfunction IncomeLineChart({projects}) {\n  const canvasRef = useRef(null);\n  const chartRef  = useRef(null);\n\n  const allYears = [...new Set(projects.map(p=>(p.startDate||\"\").slice(0,4)).filter(Boolean))].sort().reverse();\n  const [selYear, setSelYear] = useState(()=>allYears[0]||String(new Date().getFullYear()));\n\n  const MONTHS = [\"\",\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"Mei\",\"Jun\",\"Jul\",\"Agu\",\"Sep\",\"Okt\",\"Nov\",\"Des\"];\n  const months12 = Array.from({length:12},(_,i)=>String(i+1).padStart(2,\"0\"));\n  const labels = months12.map(mo=>MONTHS[parseInt(mo)]);\n  const grossData = months12.map(mo=>\n    projects\n      .filter(p=>(p.startDate||\"\").startsWith(`${selYear}-${mo}`))\n      .reduce((s,p)=>s+parseRp(p.grossPrice||p.priceRp),0)\n  );\n\n  const totalYear = grossData.reduce((s,v)=>s+v,0);\n  const activeMonths = grossData.filter(v=>v>0);\n  const avg = activeMonths.length ? Math.round(totalYear/activeMonths.length) : 0;\n  const maxIdx = grossData.indexOf(Math.max(...grossData));\n  const now = new Date();\n  const curMoIdx = selYear===String(now.getFullYear()) ? now.getMonth() : -1;\n  const prevVal = curMoIdx>0 ? grossData[curMoIdx-1] : 0;\n  const curVal  = curMoIdx>=0 ? grossData[curMoIdx] : 0;\n  const vsLast  = prevVal>0 ? Math.round((curVal-prevVal)/prevVal*100) : null;\n\n  useEffect(()=>{\n    if (!canvasRef.current) return;\n    if (chartRef.current) { chartRef.current.destroy(); chartRef.current=null; }\n    const init = () => {\n      if (!window.Chart) return;\n      chartRef.current = new window.Chart(canvasRef.current,{\n        type:\"line\",\n        data:{labels,datasets:[{\n          data:grossData,\n          borderColor:\"#14a800\",backgroundColor:\"rgba(20,168,0,0.08)\",\n          borderWidth:2,pointRadius:4,pointBackgroundColor:\"#14a800\",\n          fill:true,tension:0.35,\n        }]},\n        options:{\n          responsive:true,maintainAspectRatio:false,\n          layout:{padding:{top:16}},\n          plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>ctx.parsed.y>0?`Rp ${fmtFull(ctx.parsed.y)}`:null}}},\n          scales:{\n            x:{grid:{color:\"rgba(128,128,128,0.1)\"},ticks:{font:{size:11},color:\"#888\",maxRotation:0}},\n            y:{grid:{color:\"rgba(128,128,128,0.1)\"},ticks:{font:{size:10},color:\"#888\",callback:v=>v>=1000000?`${(v/1000000).toFixed(0)}jt`:v>=1000?`${Math.round(v/1000)}rb`:`${v}`},min:0}\n          }\n        }\n      });\n    };\n    if (window.Chart) init();\n    else { const s=document.createElement(\"script\"); s.src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js\"; s.onload=init; document.head.appendChild(s); }\n    return ()=>{ if(chartRef.current){chartRef.current.destroy();chartRef.current=null;} };\n  },[selYear, JSON.stringify(grossData)]);\n\n  if (allYears.length===0) return <div style={{fontSize:13,color:\"var(--color-text-secondary)\",textAlign:\"center\",padding:\"1rem 0\"}}>Belum ada data income.</div>;\n\n  return <div>\n    {/* Year selector pills */}\n    <div style={{display:\"flex\",alignItems:\"center\",gap:6,marginBottom:14,flexWrap:\"wrap\"}}>\n      {allYears.map(y=>(\n        <button key={y} onClick={()=>setSelYear(y)} style={{\n          fontSize:12,padding:\"3px 14px\",borderRadius:20,cursor:\"pointer\",border:\"1.5px solid\",\n          background:selYear===y?\"#111\":\"transparent\",\n          color:selYear===y?\"#fff\":\"var(--color-text-secondary)\",\n          borderColor:selYear===y?\"#111\":\"var(--color-border-secondary)\",\n          fontWeight:selYear===y?500:400,transition:\"all 0.15s\"\n        }}>{y}</button>\n      ))}\n    </div>\n    {/* Stats row */}\n    <div style={{display:\"grid\",gridTemplateColumns:\"repeat(3,1fr)\",gap:8,marginBottom:14}}>\n      <div style={{background:\"#f4f4f4\",borderRadius:8,padding:\"10px 14px\"}}>\n        <div style={{fontSize:11,color:\"#888\",marginBottom:4}}>Total {selYear}</div>\n        <div style={{fontSize:16,fontWeight:500,color:\"#222\"}}>Rp {fmtFull(totalYear)}</div>\n      </div>\n      <div style={{background:\"#f4f4f4\",borderRadius:8,padding:\"10px 14px\"}}>\n        <div style={{fontSize:11,color:\"#888\",marginBottom:4}}>Rata-rata/bulan aktif</div>\n        <div style={{fontSize:16,fontWeight:500,color:\"#222\"}}>Rp {fmtFull(avg)}</div>\n      </div>\n      <div style={{background:\"#f4f4f4\",borderRadius:8,padding:\"10px 14px\"}}>\n        <div style={{fontSize:11,color:\"#888\",marginBottom:4}}>{vsLast!=null?\"vs bulan lalu\":\"Bulan terbaik\"}</div>\n        <div style={{fontSize:16,fontWeight:500,color:vsLast!=null?(vsLast>=0?\"#16a34a\":\"#dc2626\"):\"#222\"}}>\n          {vsLast!=null\n            ?(vsLast>=0?`+${vsLast}%`:`${vsLast}%`)\n            :(maxIdx>=0&&grossData[maxIdx]>0?`${labels[maxIdx]} · Rp ${fmtFull(grossData[maxIdx])}`:\"—\")}\n        </div>\n      </div>\n    </div>\n    <div style={{position:\"relative\",width:\"100%\",height:200}}>\n      <canvas ref={canvasRef}/>\n    </div>\n  </div>;\n}\n\nfunction IncomeStackedBar({projects}) {\n  const canvasRef = useRef(null);\n  const chartRef  = useRef(null);\n\n  const allMonths = [...new Set(projects.map(p=>(p.startDate||\"\").slice(0,7)).filter(Boolean))].sort();\n  const labels = allMonths.map(m=>{ const [,mo]=m.split(\"-\"); return [\"\",\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"Mei\",\"Jun\",\"Jul\",\"Agu\",\"Sep\",\"Okt\",\"Nov\",\"Des\"][parseInt(mo)]; });\n\n  const datasets = platformOptions.map(pl=>({\n    label:pl,\n    data:allMonths.map(m=>projects.filter(p=>(p.startDate||\"\").startsWith(m)&&p.platform===pl).reduce((s,p)=>s+parseRp(p.grossPrice||p.priceRp),0)),\n    backgroundColor:PLATFORM_COLORS[pl],\n    stack:\"s\",\n    borderRadius:0,\n  })).filter(ds=>ds.data.some(v=>v>0));\n\n  const totals = allMonths.map((_,i)=>datasets.reduce((s,ds)=>s+(ds.data[i]||0),0));\n\n  useEffect(()=>{\n    if (!canvasRef.current||allMonths.length===0) return;\n    if (chartRef.current) { chartRef.current.destroy(); chartRef.current=null; }\n    const init = () => {\n      if (!window.Chart) return;\n\n      const totalLabelPlugin = {\n        id:\"totalLabel\",\n        afterDatasetsDraw(chart) {\n          const {ctx} = chart;\n          const lastDs = chart.data.datasets[chart.data.datasets.length-1];\n          if (!lastDs) return;\n          const meta = chart.getDatasetMeta(chart.data.datasets.length-1);\n          meta.data.forEach((bar,i)=>{\n            const total = totals[i];\n            if (!total) return;\n            const label = total>=1000000?`${(total/1000000).toFixed(1)}jt`:total>=1000?`${Math.round(total/1000)}rb`:total;\n            ctx.save();\n            ctx.font = \"500 10px sans-serif\";\n            ctx.fillStyle = \"#555\";\n            ctx.textAlign = \"center\";\n            ctx.textBaseline = \"bottom\";\n            ctx.fillText(label, bar.x, bar.y - 3);\n            ctx.restore();\n          });\n        }\n      };\n\n      chartRef.current = new window.Chart(canvasRef.current,{\n        type:\"bar\",\n        plugins:[totalLabelPlugin],\n        data:{labels,datasets},\n        options:{\n          responsive:true,maintainAspectRatio:false,\n          layout:{padding:{top:20}},\n          plugins:{legend:{display:false},tooltip:{callbacks:{\n            label:ctx=>`${ctx.dataset.label}: Rp ${fmtRp(ctx.parsed.y)}`,\n            footer:items=>`Total: Rp ${fmtRp(items.reduce((s,i)=>s+i.parsed.y,0))}`\n          }}},\n          scales:{\n            x:{stacked:true,grid:{color:\"rgba(128,128,128,0.1)\"},ticks:{font:{size:11},color:\"#888\"}},\n            y:{stacked:true,grid:{color:\"rgba(128,128,128,0.1)\"},ticks:{font:{size:10},color:\"#888\",callback:v=>v>=1000000?`${(v/1000000).toFixed(0)}jt`:v>=1000?`${(v/1000).toFixed(0)}rb`:v},min:0}\n          }\n        }\n      });\n    };\n    if (window.Chart) init();\n    else { const s=document.createElement(\"script\"); s.src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js\"; s.onload=init; document.head.appendChild(s); }\n    return ()=>{ if(chartRef.current){chartRef.current.destroy();chartRef.current=null;} };\n  },[JSON.stringify(datasets)]);\n\n  if (allMonths.length===0) return <div style={{fontSize:13,color:\"var(--color-text-secondary)\",textAlign:\"center\",padding:\"1rem 0\"}}>Belum ada data income.</div>;\n\n  return <div>\n    <div style={{display:\"flex\",gap:12,marginBottom:10,fontSize:12,color:\"var(--color-text-secondary)\"}}>\n      {datasets.map(ds=><span key={ds.label} style={{display:\"flex\",alignItems:\"center\",gap:5}}>\n        <span style={{width:10,height:10,borderRadius:2,background:PLATFORM_COLORS[ds.label],display:\"inline-block\"}}/>\n        {ds.label}\n      </span>)}\n    </div>\n    <div style={{position:\"relative\",width:\"100%\",height:200}}>\n      <canvas ref={canvasRef}/>\n    </div>\n  </div>;\n}\n\nfunction DashboardPage({projects, setProjects}) {\n  const setPriority = (id, priority) => setProjects(ps=>ps.map(p=>p.id===id?{...p,priority}:p));\n\n  const ongoing = projects.filter(p=>p.status===\"Ongoing\")\n    .sort((a,b)=>(PRIORITY_CFG[a.priority]?.order??3)-(PRIORITY_CFG[b.priority]?.order??3));\n\n  const unpaidProjects = projects.map(p=>{\n    const psItems  = normalizeFeeArr(p.paymentStatus).filter(f=>!f.lunas);\n    const feeItems = normalizeFeeArr(p.fee).filter(f=>!f.lunas);\n    const unpaid = [\n      ...psItems.map(f=>({...f, _type:\"payment\"})),\n      ...feeItems.map(f=>({...f, _type:\"fee\"})),\n    ];\n    return {proj:p, unpaid};\n  });\n\n  const cardStyle = {border:\"2px solid #000\",borderRadius:12,background:\"var(--color-background-primary)\",padding:\"14px 16px\",boxShadow:\"0 2px 8px rgba(0,0,0,0.07)\"};\n  const sectionLabel = {fontSize:10,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",letterSpacing:\"0.06em\",fontWeight:500};\n\n  return <div>\n    <div style={{fontWeight:500,fontSize:20,marginBottom:20}}>Dashboard</div>\n\n    {/* Income Trend */}\n    <div style={{border:\"2px solid #000\",borderRadius:12,background:\"var(--color-background-primary)\",padding:\"14px 16px\",boxShadow:\"0 2px 8px rgba(0,0,0,0.07)\",marginBottom:28}}>\n      <div style={{fontWeight:500,fontSize:15,marginBottom:14}}>Tren Income</div>\n      <IncomeLineChart projects={projects}/>\n    </div>\n    <div style={{marginBottom:28}}>\n      <div style={{display:\"flex\",alignItems:\"center\",gap:8,marginBottom:12}}>\n        <span style={{fontWeight:500,fontSize:15}}>Ongoing Projects</span>\n        <span style={{fontSize:12,background:\"#fff8ed\",color:\"#b45309\",borderRadius:20,padding:\"2px 10px\",fontWeight:500}}>{ongoing.length}</span>\n      </div>\n      {ongoing.length===0\n        ? <div style={{...cardStyle,color:\"var(--color-text-secondary)\",fontSize:13,textAlign:\"center\",padding:\"2rem\"}}>Tidak ada proyek ongoing.</div>\n        : <div style={{display:\"grid\",gridTemplateColumns:\"repeat(auto-fill,minmax(220px,1fr))\",gap:12}}>\n            {ongoing.map(p=>{\n              const incompleteTasks = p.tasks.filter(t=>t.visible&&!t.done);\n              const pr = p.priority;\n              const pc = PRIORITY_CFG[pr];\n              const headerBg   = pc ? pc.bg  : \"var(--color-background-secondary)\";\n              const headerBorder = pc ? pc.dot : \"var(--color-border-tertiary)\";\n              const headerColor  = pc ? pc.color : \"var(--color-text-primary)\";\n              const subColor     = pc ? pc.color : \"var(--color-text-secondary)\";\n              return <div key={p.id} style={{border:\"2px solid #000\",borderRadius:12,background:\"var(--color-background-primary)\",boxShadow:\"0 2px 8px rgba(0,0,0,0.07)\",overflow:\"hidden\"}}>\n                {/* Header — berubah warna sesuai priority */}\n                <div style={{background:headerBg,borderBottom:`1.5px solid ${headerBorder}`,padding:\"10px 14px\"}}>\n                  <div style={{display:\"flex\",alignItems:\"flex-start\",justifyContent:\"space-between\",marginBottom:2}}>\n                    <div style={{display:\"flex\",alignItems:\"center\",gap:6,flex:1,minWidth:0}}>\n                      <div style={{fontWeight:500,fontSize:14,overflow:\"hidden\",textOverflow:\"ellipsis\",whiteSpace:\"nowrap\",color:headerColor}}>{p.projectName||\"Untitled\"}</div>\n                      <span style={{fontSize:11,background:\"rgba(0,0,0,0.06)\",borderRadius:6,padding:\"1px 7px\",color:subColor,fontWeight:500,flexShrink:0}}>{projectNum(p,projects)}</span>\n                    </div>\n                    <span style={{flexShrink:0,marginLeft:8}}><PlatformIcon platform={p.platform} size={18}/></span>\n                  </div>\n                  <div style={{fontSize:11,color:subColor}}>{p.clientName||\"—\"}</div>\n                </div>\n                {/* Body */}\n                <div style={{padding:\"10px 14px\"}}>\n                  {/* Priority selector */}\n                  <div style={{display:\"flex\",gap:5,marginBottom:10}}>\n                    {priorityOptions.map(opt=>{\n                      const c = PRIORITY_CFG[opt];\n                      const active = pr===opt;\n                      return <button key={opt} onClick={()=>setPriority(p.id,active?null:opt)} style={{fontSize:11,padding:\"4px 10px\",borderRadius:6,border:`1px solid ${active?c.dot:\"#e5e7eb\"}`,background:active?c.dot:\"transparent\",color:active?\"#fff\":\"#aaa\",cursor:\"pointer\",fontWeight:active?500:400,transition:\"all 0.15s\"}}>{opt}</button>;\n                    })}\n                  </div>\n                  {incompleteTasks.length===0\n                    ? <div style={{fontSize:12,color:\"#22c55e\"}}>✓ Semua task selesai</div>\n                    : <div style={{display:\"flex\",flexDirection:\"column\",gap:5}}>\n                        <span style={sectionLabel}>Tasks tersisa</span>\n                        {incompleteTasks.map(t=><div key={t.id} style={{display:\"flex\",alignItems:\"center\",gap:6}}>\n                          <span style={{width:6,height:6,borderRadius:\"50%\",background:\"#f59e0b\",flexShrink:0,display:\"inline-block\"}}/>\n                          <span style={{fontSize:12,color:\"var(--color-text-primary)\"}}>{t.name}</span>\n                          {t.deadline&&<span style={{fontSize:10,color:\"var(--color-text-secondary)\",marginLeft:\"auto\"}}>{t.deadline}</span>}\n                        </div>)}\n                      </div>\n                  }\n                </div>\n              </div>;\n            })}\n          </div>\n      }\n    </div>\n\n    {/* Unpaid Invoices */}\n    <div>\n      <div style={{display:\"flex\",alignItems:\"center\",gap:8,marginBottom:12}}>\n        <span style={{fontWeight:500,fontSize:15}}>Unpaid Invoices</span>\n        <span style={{fontSize:12,background:\"#fef2f2\",color:\"#991b1b\",borderRadius:20,padding:\"2px 10px\",fontWeight:500}}>{unpaidProjects.filter(x=>x.unpaid.length>0).length}</span>\n      </div>\n      <div style={{display:\"grid\",gridTemplateColumns:\"repeat(auto-fill,minmax(220px,1fr))\",gap:12}}>\n        {unpaidProjects.filter(x=>x.unpaid.length>0).length===0\n          ? <div style={{...cardStyle,color:\"var(--color-text-secondary)\",fontSize:13,textAlign:\"center\",padding:\"2rem\"}}>NONE</div>\n          : unpaidProjects.filter(x=>x.unpaid.length>0).map(({proj:p,unpaid})=><div key={p.id} style={cardStyle}>\n              <div style={{display:\"flex\",alignItems:\"center\",gap:6,marginBottom:2}}>\n                <div style={{fontWeight:500,fontSize:14}}>{p.projectName||\"Untitled\"}</div>\n                <span style={{fontSize:11,background:\"var(--color-background-secondary)\",borderRadius:6,padding:\"1px 7px\",color:\"var(--color-text-secondary)\",fontWeight:500,flexShrink:0}}>{projectNum(p,projects)}</span>\n              </div>\n              <div style={{display:\"flex\",flexDirection:\"column\",gap:5,marginTop:8}}>\n                <span style={sectionLabel}>Belum dibayar</span>\n                {unpaid.map(f=><div key={f.name+(f._type||\"\")} style={{display:\"flex\",alignItems:\"center\",gap:6}}>\n                  <span style={{width:6,height:6,borderRadius:\"50%\",background:\"#ef4444\",flexShrink:0,display:\"inline-block\"}}/>  \n                  <span style={{fontSize:12,color:\"var(--color-text-primary)\",flex:1}}>{f.name}</span>\n                  <span style={{fontSize:10,borderRadius:4,padding:\"1px 6px\",background:f._type===\"payment\"?\"#fef3c7\":\"#eff6ff\",color:f._type===\"payment\"?\"#92400e\":\"#1d4ed8\",flexShrink:0}}>{f._type===\"payment\"?\"Payment\":\"Fee\"}</span>\n                </div>)}\n              </div>\n            </div>)\n        }\n      </div>\n    </div>\n  </div>;\n}\n\n// ── Theme ────────────────────────────────────────────────────────────────────\n\nconst DEFAULT_ACCENT = \"#1d4ed8\";\n\nfunction hexToRgb(hex) {\n  const r = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);\n  return r ? `${parseInt(r[1],16)}, ${parseInt(r[2],16)}, ${parseInt(r[3],16)}` : null;\n}\n\nfunction lighten(hex, amt) {\n  // naive lighten: blend toward white\n  const r = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);\n  if (!r) return hex;\n  const to255 = s => parseInt(s,16);\n  const blend = (c) => Math.round(c + (255-c)*amt).toString(16).padStart(2,\"0\");\n  return `#${blend(to255(r[1]))}${blend(to255(r[2]))}${blend(to255(r[3]))}`;\n}\n\nfunction applyAccent(hex) {\n  const root = document.documentElement;\n  const valid = /^#[0-9a-fA-F]{6}$/.test(hex);\n  const color = valid ? hex : DEFAULT_ACCENT;\n  root.style.setProperty(\"--accent\", color);\n  root.style.setProperty(\"--accent-bg\", lighten(color, 0.88));\n  root.style.setProperty(\"--accent-border\", lighten(color, 0.55));\n  root.style.setProperty(\"--color-text-info\", color);\n  root.style.setProperty(\"--color-background-info\", lighten(color, 0.88));\n  root.style.setProperty(\"--color-border-info\", lighten(color, 0.55));\n}\n\nfunction RangeSettingsPanel() {\n  const [areaRanges, setAreaRanges] = useState(loadAreaRanges);\n  const [durasiRanges, setDurasiRanges] = useState(loadDurasiRanges);\n  const [addingArea, setAddingArea] = useState(false);\n  const [addingDurasi, setAddingDurasi] = useState(false);\n  const [areaMin, setAreaMin] = useState(\"\"); const [areaMax, setAreaMax] = useState(\"\");\n  const [durasiMax, setDurasiMax] = useState(\"\");\n  const [saved, setSaved] = useState(false);\n\n  const flash = () => { setSaved(true); setTimeout(()=>setSaved(false), 1800); };\n\n  const updateArea = r => { const sorted=[...r].sort((a,b)=>a[0]-b[0]); setAreaRanges(sorted); saveAreaRanges(sorted); flash(); };\n  const updateDurasi = r => { setDurasiRanges(r); saveDurasiRanges(r); flash(); };\n\n  const addAreaRange = () => {\n    const mn=parseInt(areaMin), mx=parseInt(areaMax);\n    if(!isNaN(mn)&&!isNaN(mx)&&mn<mx) { updateArea([...areaRanges,[mn,mx]]); setAreaMin(\"\"); setAreaMax(\"\"); setAddingArea(false); }\n  };\n  const addDurasiRange = () => {\n    const mx=parseInt(durasiMax);\n    if(!isNaN(mx)&&mx>0) { const last=durasiRanges.length>0?durasiRanges[durasiRanges.length-1][1]:0; updateDurasi([...durasiRanges,[last+1,mx]]); setDurasiMax(\"\"); setAddingDurasi(false); }\n  };\n  const resetArea = () => { updateArea([...DEFAULT_AREA_RANGES]); };\n  const resetDurasi = () => { updateDurasi([...DEFAULT_DURASI_RANGES]); };\n\n  const durasiLabel = ([mnM,mxM]) => mnM===0?`≤ ${mxM} bulan`:mnM===mxM?`${mnM} bulan`:`${mnM} – ${mxM} bulan`;\n\n  const subTitle = {fontSize:12,fontWeight:600,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",letterSpacing:\"0.05em\",marginBottom:8};\n  const tagSt = {display:\"inline-flex\",alignItems:\"center\",gap:5,background:\"var(--color-background-secondary)\",border:\"0.5px solid var(--color-border-tertiary)\",borderRadius:20,padding:\"3px 10px 3px 12px\",fontSize:12,color:\"var(--color-text-primary)\",marginBottom:6,marginRight:6};\n  const delBtn = {background:\"none\",border:\"none\",cursor:\"pointer\",color:\"#f87171\",fontSize:14,lineHeight:1,padding:\"0 2px\"};\n\n  return <div>\n    {saved&&<div style={{fontSize:12,color:\"#166534\",background:\"#f0fdf4\",border:\"0.5px solid #86efac\",borderRadius:6,padding:\"5px 12px\",marginBottom:12,display:\"inline-block\"}}>✓ Tersimpan</div>}\n\n    {/* Area Ranges */}\n    <div style={{marginBottom:20}}>\n      <div style={{display:\"flex\",alignItems:\"center\",justifyContent:\"space-between\",marginBottom:8}}>\n        <span style={subTitle}>Range Area (m²)</span>\n        <button onClick={resetArea} style={{fontSize:11,padding:\"3px 10px\",color:\"var(--color-text-secondary)\",borderColor:\"var(--color-border-tertiary)\",borderRadius:6}}>Reset default</button>\n      </div>\n      <div style={{display:\"flex\",flexWrap:\"wrap\",gap:0}}>\n        {areaRanges.map(([mn,mx],i)=><span key={i} style={tagSt}>\n          {mn} – {mx}\n          <button style={delBtn} onClick={()=>updateArea(areaRanges.filter((_,j)=>j!==i))}>×</button>\n        </span>)}\n      </div>\n      {addingArea\n        ? <div style={{display:\"flex\",alignItems:\"center\",gap:8,flexWrap:\"wrap\",marginTop:8}}>\n            <input value={areaMin} onChange={e=>setAreaMin(e.target.value)} placeholder=\"Min\" style={{width:72,fontSize:13,padding:\"5px 8px\",border:\"0.5px solid var(--color-border-secondary)\",borderRadius:6}}/>\n            <span style={{fontSize:12,color:\"var(--color-text-secondary)\"}}>–</span>\n            <input value={areaMax} onChange={e=>setAreaMax(e.target.value)} placeholder=\"Max\" style={{width:72,fontSize:13,padding:\"5px 8px\",border:\"0.5px solid var(--color-border-secondary)\",borderRadius:6}} onKeyDown={e=>{if(e.key===\"Enter\")addAreaRange();}}/>\n            <button onClick={addAreaRange} style={{fontSize:12,padding:\"5px 12px\",background:\"#111\",color:\"#fff\",borderColor:\"#111\",borderRadius:6}}>Tambah</button>\n            <button onClick={()=>{setAddingArea(false);setAreaMin(\"\");setAreaMax(\"\");}} style={{fontSize:12,padding:\"5px 10px\",borderRadius:6}}>Batal</button>\n          </div>\n        : <button onClick={()=>setAddingArea(true)} style={{fontSize:12,padding:\"5px 12px\",marginTop:8}}>+ Tambah Range</button>\n      }\n    </div>\n\n    {/* Durasi Ranges */}\n    <div>\n      <div style={{display:\"flex\",alignItems:\"center\",justifyContent:\"space-between\",marginBottom:8}}>\n        <span style={subTitle}>Range Durasi (bulan)</span>\n        <button onClick={resetDurasi} style={{fontSize:11,padding:\"3px 10px\",color:\"var(--color-text-secondary)\",borderColor:\"var(--color-border-tertiary)\",borderRadius:6}}>Reset default</button>\n      </div>\n      <div style={{display:\"flex\",flexWrap:\"wrap\",gap:0}}>\n        {durasiRanges.map((r,i)=><span key={i} style={tagSt}>\n          {durasiLabel(r)}\n          <button style={delBtn} onClick={()=>updateDurasi(durasiRanges.filter((_,j)=>j!==i))}>×</button>\n        </span>)}\n      </div>\n      {addingDurasi\n        ? <div style={{display:\"flex\",alignItems:\"center\",gap:8,flexWrap:\"wrap\",marginTop:8}}>\n            <span style={{fontSize:12,color:\"var(--color-text-secondary)\"}}>Tambah s/d bulan ke-</span>\n            <input value={durasiMax} onChange={e=>setDurasiMax(e.target.value)} placeholder=\"13\" style={{width:72,fontSize:13,padding:\"5px 8px\",border:\"0.5px solid var(--color-border-secondary)\",borderRadius:6}} onKeyDown={e=>{if(e.key===\"Enter\")addDurasiRange();}}/>\n            <button onClick={addDurasiRange} style={{fontSize:12,padding:\"5px 12px\",background:\"#111\",color:\"#fff\",borderColor:\"#111\",borderRadius:6}}>Tambah</button>\n            <button onClick={()=>{setAddingDurasi(false);setDurasiMax(\"\");}} style={{fontSize:12,padding:\"5px 10px\",borderRadius:6}}>Batal</button>\n          </div>\n        : <button onClick={()=>setAddingDurasi(true)} style={{fontSize:12,padding:\"5px 12px\",marginTop:8}}>+ Tambah Range</button>\n      }\n    </div>\n  </div>;\n}\n\nfunction DataManagement() {\n  const [status, setStatus] = useState(\"\");\n  const [importing, setImporting] = useState(false);\n  const fileRef = useRef(null);\n\n  const exportData = () => {\n    try {\n      const raw = window._projectData;\n      const projects = raw ? JSON.parse(raw) : [];\n      const blob = new Blob([JSON.stringify(projects, null, 2)], {type:\"application/json\"});\n      const url = URL.createObjectURL(blob);\n      const a = document.createElement(\"a\");\n      a.href = url;\n      a.download = `project-cards-${new Date().toISOString().slice(0,10)}.json`;\n      document.body.appendChild(a);\n      a.click();\n      document.body.removeChild(a);\n      URL.revokeObjectURL(url);\n      setStatus(\"✓ Export berhasil\");\n      setTimeout(()=>setStatus(\"\"), 3000);\n    } catch(e) {\n      setStatus(\"✕ Gagal export\");\n      setTimeout(()=>setStatus(\"\"), 3000);\n    }\n  };\n\n  const importData = (e) => {\n    const file = e.target.files?.[0];\n    if (!file) return;\n    setImporting(true);\n    const reader = new FileReader();\n    reader.onload = (ev) => {\n      try {\n        const parsed = JSON.parse(ev.target.result);\n        if (!Array.isArray(parsed)) throw new Error(\"Format tidak valid\");\n        const existing = window._projectData ? JSON.parse(window._projectData) : [];\n        const existingIds = new Set(existing.map(p=>p.id));\n        const newProjects = parsed.filter(p=>!existingIds.has(p.id));\n        const merged = [...existing, ...newProjects];\n        window._projectData = JSON.stringify(merged);\n        setStatus(`✓ ${newProjects.length} proyek baru ditambahkan. Refresh halaman untuk melihat.`);\n        setTimeout(()=>setStatus(\"\"), 5000);\n      } catch(err) {\n        setStatus(\"✕ File tidak valid. Pastikan format JSON benar.\");\n        setTimeout(()=>setStatus(\"\"), 4000);\n      }\n      setImporting(false);\n      if (fileRef.current) fileRef.current.value = \"\";\n    };\n    reader.readAsText(file);\n  };\n\n  const secBtn = {fontSize:13,padding:\"8px 18px\",borderRadius:8,cursor:\"pointer\",display:\"flex\",alignItems:\"center\",gap:8};\n\n  return <div>\n    <div style={{display:\"flex\",gap:10,flexWrap:\"wrap\"}}>\n      <button onClick={exportData} style={{...secBtn,border:\"1.5px solid #000\",background:\"transparent\",color:\"var(--color-text-primary)\"}}>\n        <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"/></svg>\n        Export JSON\n      </button>\n      <button onClick={()=>fileRef.current?.click()} style={{...secBtn,border:\"1.5px solid #000\",background:\"#111\",color:\"#fff\"}}>\n        <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"17 8 12 3 7 8\"/><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\"/></svg>\n        {importing ? \"Mengimpor...\" : \"Import JSON\"}\n      </button>\n      <input ref={fileRef} type=\"file\" accept=\".json\" style={{display:\"none\"}} onChange={importData}/>\n    </div>\n    {status&&<div style={{marginTop:10,fontSize:12,color:status.startsWith(\"✓\")?\"#16a34a\":\"#dc2626\",background:status.startsWith(\"✓\")?\"#f0fdf4\":\"#fef2f2\",border:`1px solid ${status.startsWith(\"✓\")?\"#86efac\":\"#fca5a5\"}`,borderRadius:6,padding:\"7px 12px\"}}>{status}</div>}\n    <div style={{marginTop:10,fontSize:11,color:\"var(--color-text-secondary)\"}}>Import akan menambahkan proyek baru tanpa menghapus data yang sudah ada. ID yang sama akan dilewati.</div>\n  </div>;\n}\n\nfunction SettingsPage() {\n  const [hex, setHex] = useState(()=>window._accentColor||DEFAULT_ACCENT);\n  const [input, setInput] = useState(()=>window._accentColor||DEFAULT_ACCENT);\n  const [error, setError] = useState(\"\");\n  const [toast, setToast] = useState(\"\");\n  const toastTimer = useRef(null);\n  const showToast = (msg) => { clearTimeout(toastTimer.current); setToast(msg); toastTimer.current = setTimeout(()=>setToast(\"\"),2500); };\n\n  const presets = [\n    {label:\"Blue\",    color:\"#1d4ed8\"},\n    {label:\"Indigo\",  color:\"#4338ca\"},\n    {label:\"Violet\",  color:\"#7c3aed\"},\n    {label:\"Rose\",    color:\"#e11d48\"},\n    {label:\"Orange\",  color:\"#ea580c\"},\n    {label:\"Green\",   color:\"#16a34a\"},\n    {label:\"Teal\",    color:\"#0d9488\"},\n    {label:\"Slate\",   color:\"#475569\"},\n  ];\n\n  const apply = (val) => {\n    const clean = val.trim().startsWith(\"#\") ? val.trim() : \"#\"+val.trim();\n    if (!/^#[0-9a-fA-F]{6}$/.test(clean)) { setError(\"Format hex tidak valid. Contoh: #1d4ed8\"); return; }\n    setError(\"\");\n    setHex(clean);\n    setInput(clean);\n    window._accentColor = clean;\n    applyAccent(clean);\n    showToast(\"✓ Warna berhasil diubah\");\n  };\n\n  const reset = () => { apply(DEFAULT_ACCENT); setInput(DEFAULT_ACCENT); showToast(\"✓ Warna direset ke default\"); };\n\n  const sectionStyle = {border:\"2px solid #000\",borderRadius:12,padding:\"20px 24px\",marginBottom:16,boxShadow:\"0 2px 8px rgba(0,0,0,0.05)\"};\n\n  return <div style={{maxWidth:520}}>\n    <div style={{fontWeight:500,fontSize:20,marginBottom:24}}>Settings</div>\n\n    {toast&&<div style={{position:\"fixed\",bottom:24,left:\"50%\",transform:\"translateX(-50%)\",background:\"#111\",color:\"#fff\",borderRadius:10,padding:\"10px 20px\",fontSize:13,zIndex:99999,boxShadow:\"0 4px 16px rgba(0,0,0,0.25)\",whiteSpace:\"nowrap\"}}>{toast}</div>}\n\n    <div style={sectionStyle}>\n      <div style={{fontWeight:500,fontSize:14,marginBottom:4}}>Accent Color</div>\n      <div style={{fontSize:12,color:\"var(--color-text-secondary)\",marginBottom:20}}>Warna utama yang dipakai di tombol, badge, dan highlight.</div>\n\n      {/* Preset swatches */}\n      <div style={{marginBottom:20}}>\n        <div style={{fontSize:11,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",letterSpacing:\"0.06em\",fontWeight:500,marginBottom:10}}>Preset</div>\n        <div style={{display:\"flex\",gap:8,flexWrap:\"wrap\"}}>\n          {presets.map(p=>{\n            const active = hex.toLowerCase()===p.color.toLowerCase();\n            return <button key={p.color} onClick={()=>apply(p.color)}\n              title={p.label}\n              style={{width:32,height:32,borderRadius:8,background:p.color,border:active?\"3px solid #000\":\"2px solid transparent\",cursor:\"pointer\",outline:\"none\",transition:\"border 0.15s\",position:\"relative\"}}>\n              {active&&<span style={{position:\"absolute\",inset:0,display:\"flex\",alignItems:\"center\",justifyContent:\"center\"}}>\n                <svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><polyline points=\"1.5,6 4.5,9 10.5,3\" stroke=\"white\" strokeWidth=\"2.5\" fill=\"none\" strokeLinecap=\"round\" strokeLinejoin=\"round\"/></svg>\n              </span>}\n            </button>;\n          })}\n        </div>\n      </div>\n\n      {/* Hex input */}\n      <div style={{marginBottom:16}}>\n        <div style={{fontSize:11,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",letterSpacing:\"0.06em\",fontWeight:500,marginBottom:8}}>Custom Hex</div>\n        <div style={{display:\"flex\",gap:8,alignItems:\"center\"}}>\n          <div style={{width:36,height:36,borderRadius:8,background:hex,border:\"1.5px solid #ddd\",flexShrink:0}}/>\n          <input\n            value={input}\n            onChange={e=>setInput(e.target.value)}\n            onKeyDown={e=>{if(e.key===\"Enter\")apply(input);}}\n            placeholder=\"#1d4ed8\"\n            style={{flex:1,fontSize:13,padding:\"8px 12px\",border:\"1.5px solid #000\",borderRadius:8,outline:\"none\",fontFamily:\"monospace\"}}\n          />\n          <button onClick={()=>apply(input)} style={{fontSize:13,padding:\"8px 16px\",background:\"#111\",color:\"#fff\",borderColor:\"#111\",borderRadius:8,whiteSpace:\"nowrap\"}}>Apply</button>\n        </div>\n        {error&&<div style={{fontSize:12,color:\"#ef4444\",marginTop:6}}>{error}</div>}\n      </div>\n\n      {/* Preview */}\n      <div style={{background:\"var(--color-background-secondary)\",borderRadius:10,padding:\"14px 16px\"}}>\n        <div style={{fontSize:11,color:\"var(--color-text-secondary)\",textTransform:\"uppercase\",letterSpacing:\"0.06em\",fontWeight:500,marginBottom:12}}>Preview</div>\n        <div style={{display:\"flex\",gap:8,flexWrap:\"wrap\",alignItems:\"center\"}}>\n          <button style={{fontSize:12,padding:\"6px 14px\",background:\"#111\",color:\"#fff\",borderColor:\"#111\",borderRadius:6}}>Button</button>\n          <span style={{fontSize:12,background:\"var(--color-background-info)\",color:\"var(--color-text-info)\",borderRadius:20,padding:\"3px 10px\",fontWeight:500}}>Badge</span>\n          <span style={{fontSize:12,color:\"var(--color-text-info)\",fontWeight:500,textDecoration:\"underline\",cursor:\"pointer\"}}>Link text</span>\n          <span style={{display:\"inline-flex\",alignItems:\"center\",justifyContent:\"center\",width:16,height:16,background:\"var(--color-text-info)\",borderRadius:4}}><svg viewBox=\"0 0 12 12\" width=\"9\" height=\"9\"><polyline points=\"1.5,6 4.5,9 10.5,3\" stroke=\"white\" strokeWidth=\"2\" fill=\"none\" strokeLinecap=\"round\" strokeLinejoin=\"round\"/></svg></span>\n        </div>\n      </div>\n\n      <div style={{marginTop:14,display:\"flex\",justifyContent:\"flex-end\"}}>\n        <button onClick={reset} style={{fontSize:12,padding:\"5px 14px\",color:\"var(--color-text-secondary)\",borderColor:\"var(--color-border-tertiary)\",borderRadius:6}}>Reset ke default</button>\n      </div>\n    </div>\n\n    {/* Data Management */}\n    <div style={sectionStyle}>\n      <div style={{fontWeight:500,fontSize:14,marginBottom:4}}>Data</div>\n      <div style={{fontSize:12,color:\"var(--color-text-secondary)\",marginBottom:16}}>Export semua proyek ke file JSON, atau import dari file JSON yang sudah diexport sebelumnya.</div>\n      <DataManagement/>\n    </div>\n\n    {/* Expense Categories */}\n    <div style={sectionStyle}>\n      <div style={{fontWeight:500,fontSize:14,marginBottom:4}}>Kategori Expenses</div>\n      <div style={{fontSize:12,color:\"var(--color-text-secondary)\",marginBottom:20}}>Tambah, hapus, atau ubah urutan kategori yang tampil di halaman Expenses.</div>\n      <ExpenseCategorySettings/>\n    </div>\n\n    {/* Range Settings */}\n    <div style={sectionStyle}>\n      <div style={{fontWeight:500,fontSize:14,marginBottom:4}}>Range Settings</div>\n      <div style={{fontSize:12,color:\"var(--color-text-secondary)\",marginBottom:20}}>Konfigurasi range Area dan Durasi yang dipakai di halaman Analysis. Perubahan langsung tersimpan otomatis.</div>\n      <RangeSettingsPanel/>\n    </div>\n\n  </div>;\n}\n\n// ── Nav ──────────────────────────────────────────────────────────────────────\n\nconst DEFAULT_EXPENSE_CATEGORIES = [\"Software\",\"Tools\",\"Fee Tim\",\"Marketing\",\"Infra\",\"Lainnya\"];\nfunction loadExpenseCategories() {\n  try { const s=window._expenseCats; if(s){const p=JSON.parse(s);if(p.length>0)return p;} } catch(e) {} return seedExpenseCats ? [...seedExpenseCats] : [...DEFAULT_EXPENSE_CATEGORIES];\n}\nfunction saveExpenseCategories(cats) { window._expenseCats=JSON.stringify(cats); }\n\nconst EXPENSE_CAT_COLORS = [\n  {bg:\"#eff6ff\",color:\"#1d4ed8\"},{bg:\"#fef3c7\",color:\"#92400e\"},{bg:\"#f0fdf4\",color:\"#166534\"},\n  {bg:\"#fdf4ff\",color:\"#6b21a8\"},{bg:\"#fff7ed\",color:\"#9a3412\"},{bg:\"#fef2f2\",color:\"#991b1b\"},\n  {bg:\"#ecfdf5\",color:\"#065f46\"},{bg:\"#fffbeb\",color:\"#78350f\"},{bg:\"#f0f9ff\",color:\"#0c4a6e\"},\n  {bg:\"#faf5ff\",color:\"#581c87\"},{bg:\"#fff1f2\",color:\"#881337\"},{bg:\"#f7fee7\",color:\"#365314\"},\n];\nfunction getCatStyle(cats, cat) {\n  const idx = cats.indexOf(cat);\n  if (idx===-1) return {bg:\"var(--color-background-secondary)\",color:\"var(--color-text-secondary)\"};\n  return EXPENSE_CAT_COLORS[idx % EXPENSE_CAT_COLORS.length];\n}\n\nfunction ExpenseCategorySettings() {\n  const [cats, setCats] = useState(loadExpenseCategories);\n  const [newCat, setNewCat] = useState(\"\");\n  const [editingIdx, setEditingIdx] = useState(null);\n  const [editVal, setEditVal] = useState(\"\");\n  const [saved, setSaved] = useState(false);\n  const toastTimer = useRef(null);\n  const editInputRef = useRef(null);\n\n  const flash = () => { setSaved(true); clearTimeout(toastTimer.current); toastTimer.current=setTimeout(()=>setSaved(false),1800); };\n  const update = (next) => { setCats(next); saveExpenseCategories(next); flash(); };\n\n  const add = () => {\n    const val = newCat.trim();\n    if (!val || cats.includes(val)) return;\n    update([...cats, val]);\n    setNewCat(\"\");\n  };\n\n  const remove = (i) => {\n    if (cats.length<=1) return;\n    setEditingIdx(null);\n    update(cats.filter((_,idx)=>idx!==i));\n  };\n\n  const startEdit = (i) => {\n    setEditingIdx(i);\n    setEditVal(cats[i]);\n    setTimeout(()=>editInputRef.current?.focus(),50);\n  };\n\n  const commitEdit = () => {\n    const val = editVal.trim();\n    if (!val || (cats.includes(val) && val!==cats[editingIdx])) { setEditingIdx(null); return; }\n    const next = [...cats];\n    next[editingIdx] = val;\n    update(next);\n    setEditingIdx(null);\n  };\n\n  const cancelEdit = () => { setEditingIdx(null); setEditVal(\"\"); };\n\n  const moveUp   = (i) => { if(i===0) return; const next=[...cats]; [next[i-1],next[i]]=[next[i],next[i-1]]; update(next); };\n  const moveDown = (i) => { if(i===cats.length-1) return; const next=[...cats]; [next[i],next[i+1]]=[next[i+1],next[i]]; update(next); };\n\n  const inpStyle = {fontSize:13,padding:\"4px 10px\",border:\"1.5px solid #000\",borderRadius:6,background:\"var(--color-background-primary)\",color:\"var(--color-text-primary)\",outline:\"none\",minWidth:0};\n  const btnGhost = (color=\"#888\") => ({padding:\"2px 8px\",fontSize:12,border:\"0.5px solid var(--color-border-secondary)\",background:\"transparent\",color,borderRadius:6,cursor:\"pointer\"});\n\n  return <div>\n    <div style={{display:\"flex\",flexDirection:\"column\",gap:6,marginBottom:14}}>\n      {cats.map((cat,i)=>{\n        const cfg = getCatStyle(cats, cat);\n        const isEditing = editingIdx===i;\n        return <div key={i} style={{display:\"flex\",alignItems:\"center\",gap:8}}>\n          {/* Up/down */}\n          <div style={{display:\"flex\",flexDirection:\"column\",gap:1}}>\n            <button onClick={()=>moveUp(i)} disabled={i===0} style={{padding:\"1px 4px\",border:\"none\",background:\"transparent\",cursor:i===0?\"default\":\"pointer\",color:i===0?\"#ddd\":\"var(--color-text-secondary)\",fontSize:10,lineHeight:1}}>▲</button>\n            <button onClick={()=>moveDown(i)} disabled={i===cats.length-1} style={{padding:\"1px 4px\",border:\"none\",background:\"transparent\",cursor:i===cats.length-1?\"default\":\"pointer\",color:i===cats.length-1?\"#ddd\":\"var(--color-text-secondary)\",fontSize:10,lineHeight:1}}>▼</button>\n          </div>\n\n          {/* Badge or inline input */}\n          {isEditing\n            ? <input\n                ref={editInputRef}\n                value={editVal}\n                onChange={e=>setEditVal(e.target.value)}\n                onKeyDown={e=>{if(e.key===\"Enter\"){e.preventDefault();commitEdit();}if(e.key===\"Escape\")cancelEdit();}}\n                style={{...inpStyle,width:140}}\n              />\n            : <span style={{display:\"inline-block\",fontSize:12,fontWeight:500,borderRadius:20,padding:\"3px 12px\",background:cfg.bg,color:cfg.color,minWidth:80,textAlign:\"center\"}}>{cat}</span>\n          }\n\n          {/* Action buttons */}\n          {isEditing ? <>\n            <button onClick={commitEdit} title=\"Simpan\" style={{padding:\"3px 6px\",border:\"none\",background:\"transparent\",cursor:\"pointer\",color:\"var(--color-text-success)\"}}><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></button>\n            <button onClick={cancelEdit} title=\"Batal\" style={{padding:\"3px 6px\",border:\"none\",background:\"transparent\",cursor:\"pointer\",color:\"var(--color-text-secondary)\"}}><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"/><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"/></svg></button>\n          </> : <>\n            <button onClick={()=>startEdit(i)} title=\"Edit\" style={{padding:\"3px 6px\",border:\"none\",background:\"transparent\",cursor:\"pointer\",color:\"var(--color-text-secondary)\"}}><svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"/><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"/></svg></button>\n            <button onClick={()=>remove(i)} disabled={cats.length<=1} title=\"Hapus\" style={{padding:\"3px 6px\",border:\"none\",background:\"transparent\",cursor:cats.length<=1?\"default\":\"pointer\",color:cats.length<=1?\"#ccc\":\"var(--color-text-danger)\"}}><svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"3 6 5 6 21 6\"/><path d=\"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6\"/><path d=\"M10 11v6\"/><path d=\"M14 11v6\"/><path d=\"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2\"/></svg></button>\n          </>}\n        </div>;\n      })}\n    </div>\n\n    {/* Add new */}\n    <div style={{display:\"flex\",gap:8,alignItems:\"center\"}}>\n      <input\n        value={newCat}\n        onChange={e=>setNewCat(e.target.value)}\n        onKeyDown={e=>{if(e.key===\"Enter\"){e.preventDefault();add();}}}\n        placeholder=\"Nama kategori baru...\"\n        style={{flex:1,fontSize:13,padding:\"7px 10px\",border:\"0.5px solid var(--color-border-secondary)\",borderRadius:6,background:\"var(--color-background-primary)\",color:\"var(--color-text-primary)\"}}\n      />\n      <button onClick={add} disabled={!newCat.trim()||cats.includes(newCat.trim())} style={{fontSize:13,padding:\"7px 16px\",borderRadius:6,background:(!newCat.trim()||cats.includes(newCat.trim()))?\"var(--color-background-secondary)\":\"#111\",color:(!newCat.trim()||cats.includes(newCat.trim()))?\"var(--color-text-secondary)\":\"#fff\",border:\"none\",cursor:(!newCat.trim()||cats.includes(newCat.trim()))?\"not-allowed\":\"pointer\"}}>+ Tambah</button>\n    </div>\n    {saved&&<div style={{fontSize:12,color:\"var(--color-text-success)\",marginTop:8}}>✓ Tersimpan</div>}\n  </div>;\n}\n\n\n\nfunction loadExpenses() {\n  try { const s=window._expensesData; if(s){const p=JSON.parse(s);if(p.length>0)return p;} } catch(e){}\n  return seedExpenses;\n}\nfunction saveExpenses(data) { window._expensesData=JSON.stringify(data); }\n\nfunction ExpensesPage({projects}) {\n  const [expenses,setExpenses] = useState(loadExpenses);\n  const [showForm,setShowForm] = useState(false);\n  const [editing,setEditing] = useState(null);\n  const [confirmId,setConfirmId] = useState(null);\n  const [filterMonth,setFilterMonth] = useState(\"All\");\n  const [filterCat,setFilterCat] = useState(\"All\");\n  const [mainTab,setMainTab] = useState(\"pertahun\");\n  const [filterYear,setFilterYear] = useState(\"All\");\n\n  const categories = loadExpenseCategories();\n  const emptyForm = {date:\"\",desc:\"\",category:categories[0]||\"Lainnya\",amount:\"\",notes:\"\"};\n  const [form,setForm] = useState(emptyForm);\n  const [amtLoading,setAmtLoading] = useState(false);\n\n  useEffect(()=>{ saveExpenses(expenses); },[expenses]);\n\n  const allYears = [...new Set(expenses.map(e=>(e.date||\"\").slice(0,4)).filter(Boolean))].sort().reverse();\n  const allMonths = [...new Set(\n    expenses\n      .filter(e=>mainTab===\"alltime\"||(filterYear===\"All\"||(e.date||\"\").startsWith(filterYear)))\n      .map(e=>(e.date||\"\").slice(0,7)).filter(Boolean)\n  )].sort().reverse();\n\n  const tabExpenses = expenses.filter(e=>{\n    if (mainTab===\"pertahun\" && filterYear!==\"All\" && !(e.date||\"\").startsWith(filterYear)) return false;\n    return true;\n  });\n\n  const filtered = tabExpenses.filter(e=>{\n    if (filterMonth!==\"All\" && !(e.date||\"\").startsWith(filterMonth)) return false;\n    if (filterCat!==\"All\" && e.category!==filterCat) return false;\n    return true;\n  });\n\n  const totalNettAll = projects.reduce((s,p)=>s+parseRp(p.priceRp),0);\n  const totalNettTab = mainTab===\"pertahun\" && filterYear!==\"All\"\n    ? projects.filter(p=>(p.startDate||\"\").startsWith(filterYear)).reduce((s,p)=>s+parseRp(p.priceRp),0)\n    : totalNettAll;\n  const totalExpensesTab = tabExpenses.reduce((s,e)=>s+parseRp(e.amount),0);\n  const totalExpensesFiltered = filtered.reduce((s,e)=>s+parseRp(e.amount),0);\n  const netProfit = totalNettTab - totalExpensesTab;\n\n  const openAdd = () => { setEditing(null); setForm(emptyForm); setShowForm(true); };\n  const openEdit = (e) => { setEditing(e.id); setForm({date:e.date,desc:e.desc,category:e.category,amount:e.amount,notes:e.notes||\"\"}); setShowForm(true); };\n  const cancelForm = () => { setShowForm(false); setEditing(null); setForm(emptyForm); };\n\n  const handleAmtBlur = async () => {\n    if (!form.amount.trim()) return;\n    const clean = form.amount.replace(/\\./g,\"\");\n    if (/^\\d+$/.test(clean)) { setForm(f=>({...f,amount:formatRp(clean)})); return; }\n    setAmtLoading(true);\n    const r = await formatRpWithAI(form.amount.trim());\n    setAmtLoading(false);\n    setForm(f=>({...f,amount:r}));\n  };\n\n  const saveForm = () => {\n    if (!form.date||!form.desc||!form.amount) return;\n    if (editing) {\n      setExpenses(es=>es.map(e=>e.id===editing?{...e,...form}:e));\n    } else {\n      setExpenses(es=>[...es,{id:Date.now(),...form}]);\n    }\n    cancelForm();\n  };\n\n  const deleteExpense = () => {\n    setExpenses(es=>es.filter(e=>e.id!==confirmId));\n    setConfirmId(null);\n  };\n\n  const inputStyle = {width:\"100%\",boxSizing:\"border-box\",fontSize:13,padding:\"7px 10px\",border:\"0.5px solid var(--color-border-secondary)\",borderRadius:6,background:\"var(--color-background-primary)\",color:\"var(--color-text-primary)\"};\n  const labelStyle = {fontSize:12,color:\"var(--color-text-secondary)\",display:\"block\",marginBottom:3};\n  const selectStyle = {fontSize:12,padding:\"5px 8px\",border:\"0.5px solid var(--color-border-secondary)\",borderRadius:6,background:\"var(--color-background-primary)\",color:\"var(--color-text-primary)\",cursor:\"pointer\"};\n  const thStyle = {textAlign:\"left\",padding:\"9px 14px\",fontSize:11,fontWeight:600,textTransform:\"uppercase\",letterSpacing:\"0.05em\",color:\"var(--color-text-secondary)\",borderBottom:\"0.5px solid var(--color-border-tertiary)\",background:\"var(--color-background-secondary)\"};\n  const tdStyle = {padding:\"10px 14px\",borderBottom:\"0.5px solid var(--color-border-tertiary)\",fontSize:13,color:\"var(--color-text-primary)\",verticalAlign:\"middle\"};\n\n  return <div>\n    <div style={{fontWeight:500,fontSize:20,marginBottom:16}}>Expenses</div>\n\n    {/* Tab bar — sama persis seperti Analysis */}\n    <div style={{display:\"flex\",gap:0,marginBottom:20,borderBottom:\"0.5px solid var(--color-border-tertiary)\"}}>\n      <button onClick={()=>{setMainTab(\"pertahun\");setFilterMonth(\"All\");}} style={tabBtn(mainTab===\"pertahun\")}>Per Tahun</button>\n      <button onClick={()=>{setMainTab(\"alltime\");setFilterYear(\"All\");setFilterMonth(\"All\");}} style={{...tabBtn(mainTab===\"alltime\"),marginLeft:\"auto\"}}>All Time</button>\n    </div>\n\n    {/* Year filter — hanya muncul di tab Per Tahun */}\n    {mainTab===\"pertahun\"&&<div style={{display:\"flex\",gap:8,alignItems:\"center\",marginBottom:20}}>\n      <span style={{fontSize:12,color:\"var(--color-text-secondary)\"}}>Tahun</span>\n      <div style={{display:\"flex\",gap:4,flexWrap:\"wrap\"}}>\n        <button onClick={()=>setFilterYear(\"All\")} style={{fontSize:12,padding:\"4px 14px\",borderRadius:20,border:\"0.5px solid\",cursor:\"pointer\",background:filterYear===\"All\"?\"#111\":\"transparent\",color:filterYear===\"All\"?\"#fff\":\"var(--color-text-secondary)\",borderColor:filterYear===\"All\"?\"#111\":\"var(--color-border-secondary)\"}}>Semua</button>\n        {allYears.map(y=><button key={y} onClick={()=>{setFilterYear(y);setFilterMonth(\"All\");}} style={{fontSize:12,padding:\"4px 14px\",borderRadius:20,border:\"0.5px solid\",cursor:\"pointer\",background:filterYear===y?\"#111\":\"transparent\",color:filterYear===y?\"#fff\":\"var(--color-text-secondary)\",borderColor:filterYear===y?\"#111\":\"var(--color-border-secondary)\"}}>{y}</button>)}\n        {allYears.length===0&&<span style={{fontSize:12,color:\"var(--color-text-secondary)\"}}>—</span>}\n      </div>\n    </div>}\n\n    {/* Summary cards */}\n    <div style={{display:\"grid\",gridTemplateColumns:\"repeat(3,1fr)\",gap:12,marginBottom:24}}>\n      <div style={{background:\"#f0fdf4\",border:\"1.5px solid #86efac\",borderRadius:10,padding:\"12px 16px\"}}>\n        <div style={{fontSize:11,color:\"#166534\",marginBottom:5,textTransform:\"uppercase\",letterSpacing:\"0.06em\",fontWeight:600}}>Total Income (Nett)</div>\n        <div style={{fontSize:20,fontWeight:500,color:\"#15803d\"}}>Rp {fmtFull(totalNettTab)}</div>\n        <div style={{fontSize:11,color:\"#16a34a\",marginTop:3}}>{mainTab===\"pertahun\"&&filterYear!==\"All\"?`proyek ${filterYear}`:\"semua proyek\"}</div>\n      </div>\n      <div style={{background:\"#fef2f2\",border:\"1.5px solid #fca5a5\",borderRadius:10,padding:\"12px 16px\"}}>\n        <div style={{fontSize:11,color:\"#991b1b\",marginBottom:5,textTransform:\"uppercase\",letterSpacing:\"0.06em\",fontWeight:600}}>Total Expenses</div>\n        <div style={{fontSize:20,fontWeight:500,color:\"#dc2626\"}}>Rp {fmtFull(totalExpensesTab)}</div>\n        <div style={{fontSize:11,color:\"#b91c1c\",marginTop:3}}>{mainTab===\"pertahun\"&&filterYear!==\"All\"?`tahun ${filterYear}`:\"semua waktu\"}</div>\n      </div>\n      <div style={{background:netProfit>=0?\"#eff6ff\":\"#fef2f2\",border:`1.5px solid ${netProfit>=0?\"#93c5fd\":\"#fca5a5\"}`,borderRadius:10,padding:\"12px 16px\"}}>\n        <div style={{fontSize:11,color:netProfit>=0?\"#1e40af\":\"#991b1b\",marginBottom:5,textTransform:\"uppercase\",letterSpacing:\"0.06em\",fontWeight:600}}>Net Profit</div>\n        <div style={{fontSize:20,fontWeight:500,color:netProfit>=0?\"#1d4ed8\":\"#dc2626\"}}>Rp {fmtFull(Math.abs(netProfit))}{netProfit<0?\" (minus)\":\"\"}</div>\n        <div style={{fontSize:11,color:netProfit>=0?\"#3b82f6\":\"#b91c1c\",marginTop:3}}>income – expenses</div>\n      </div>\n    </div>\n\n    {/* Add / Edit Form */}\n    {showForm&&<div style={{border:\"2px solid #000\",borderRadius:12,background:\"var(--color-background-primary)\",padding:\"16px 20px\",marginBottom:20,boxShadow:\"0 2px 8px rgba(0,0,0,0.07)\"}}>\n      <div style={{fontWeight:500,fontSize:14,marginBottom:14}}>{editing?\"Edit Expense\":\"Tambah Expense\"}</div>\n      <div style={{display:\"grid\",gridTemplateColumns:\"1fr 1fr 1fr\",gap:12,marginBottom:12}}>\n        <div>\n          <label style={labelStyle}>Tanggal *</label>\n          <input type=\"date\" value={form.date} onChange={e=>setForm(f=>({...f,date:e.target.value}))} style={inputStyle}/>\n        </div>\n        <div>\n          <label style={labelStyle}>Kategori *</label>\n          <select value={form.category} onChange={e=>setForm(f=>({...f,category:e.target.value}))} style={{...inputStyle,cursor:\"pointer\"}}>\n            {categories.map(c=><option key={c} value={c}>{c}</option>)}\n          </select>\n        </div>\n        <div>\n          <label style={labelStyle}>{amtLoading?\"Jumlah (memformat...)\":\"Jumlah (Rp) *\"}</label>\n          <input value={form.amount} onChange={e=>setForm(f=>({...f,amount:e.target.value}))} onBlur={handleAmtBlur} onKeyDown={e=>{if(e.key===\"Enter\"){e.preventDefault();handleAmtBlur();}}} placeholder=\"Contoh: 5jt, 750rb\" style={{...inputStyle,opacity:amtLoading?0.6:1}}/>\n        </div>\n      </div>\n      <div style={{display:\"grid\",gridTemplateColumns:\"2fr 1fr\",gap:12,marginBottom:14}}>\n        <div>\n          <label style={labelStyle}>Deskripsi *</label>\n          <input value={form.desc} onChange={e=>setForm(f=>({...f,desc:e.target.value}))} placeholder=\"Contoh: Adobe CC Subscription\" style={inputStyle}/>\n        </div>\n        <div>\n          <label style={labelStyle}>Catatan</label>\n          <input value={form.notes} onChange={e=>setForm(f=>({...f,notes:e.target.value}))} placeholder=\"Opsional\" style={inputStyle}/>\n        </div>\n      </div>\n      <div style={{display:\"flex\",gap:8,justifyContent:\"flex-end\"}}>\n        <button onClick={cancelForm} style={{fontSize:13,padding:\"6px 16px\"}}>Batal</button>\n        <button onClick={saveForm} disabled={!form.date||!form.desc||!form.amount} style={{fontSize:13,padding:\"6px 18px\",background:(!form.date||!form.desc||!form.amount)?\"var(--color-background-secondary)\":\"#111\",color:(!form.date||!form.desc||!form.amount)?\"var(--color-text-secondary)\":\"#fff\",borderColor:\"transparent\",borderRadius:8,cursor:(!form.date||!form.desc||!form.amount)?\"not-allowed\":\"pointer\"}}>{editing?\"Simpan Perubahan\":\"Tambah\"}</button>\n      </div>\n    </div>}\n\n    {/* Table */}\n    <div style={{border:\"2px solid #000\",borderRadius:12,overflow:\"clip\",boxShadow:\"0 2px 8px rgba(0,0,0,0.07)\"}}>\n      {/* Table header toolbar */}\n      <div style={{display:\"flex\",alignItems:\"center\",justifyContent:\"space-between\",padding:\"12px 16px\",background:\"var(--color-background-secondary)\",borderBottom:\"0.5px solid var(--color-border-tertiary)\"}}>\n        <div style={{display:\"flex\",alignItems:\"center\",gap:8}}>\n          <span style={{fontWeight:500,fontSize:14}}>Daftar Expenses</span>\n          <span style={{fontSize:12,background:\"var(--color-background-primary)\",border:\"0.5px solid var(--color-border-secondary)\",borderRadius:20,padding:\"1px 9px\",color:\"var(--color-text-secondary)\"}}>{filtered.length}</span>\n        </div>\n        <div style={{display:\"flex\",gap:8,alignItems:\"center\"}}>\n          {mainTab===\"pertahun\"&&<select value={filterMonth} onChange={e=>setFilterMonth(e.target.value)} style={selectStyle}>\n            <option value=\"All\">Bulan (Semua)</option>\n            {allMonths.map(m=><option key={m} value={m}>{m}</option>)}\n          </select>}\n          <select value={filterCat} onChange={e=>setFilterCat(e.target.value)} style={selectStyle}>\n            <option value=\"All\">Kategori (Semua)</option>\n            {categories.map(c=><option key={c} value={c}>{c}</option>)}\n          </select>\n          {!showForm&&<button onClick={openAdd} style={{padding:\"5px 16px\",fontSize:13,display:\"flex\",alignItems:\"center\",gap:5,background:\"#111\",color:\"#fff\",border:\"none\",borderRadius:6,cursor:\"pointer\",fontWeight:500}}><svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.5\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"/><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"/></svg>Tambah</button>}\n        </div>\n      </div>\n\n      {expenses.length===0\n        ? <div style={{textAlign:\"center\",padding:\"4rem 0\",color:\"var(--color-text-secondary)\",fontSize:14}}>Belum ada data expenses. Klik \"Tambah\" untuk mulai.</div>\n        : filtered.length===0\n          ? <div style={{textAlign:\"center\",padding:\"3rem 0\",color:\"var(--color-text-secondary)\",fontSize:14}}>Tidak ada expense yang cocok dengan filter ini.</div>\n          : <div style={{overflowX:\"auto\"}}>\n              <table style={{width:\"100%\",borderCollapse:\"collapse\",fontSize:13}}>\n                <thead>\n                  <tr>\n                    <th style={thStyle}>Tanggal</th>\n                    <th style={thStyle}>Deskripsi</th>\n                    <th style={thStyle}>Kategori</th>\n                    <th style={{...thStyle,textAlign:\"right\"}}>Jumlah (Rp)</th>\n                    <th style={thStyle}>Catatan</th>\n                    <th style={{...thStyle,width:80,minWidth:80}}></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  {[...filtered].sort((a,b)=>(b.date||\"\").localeCompare(a.date||\"\")).map((e,i)=>{\n                    const cfg = getCatStyle(categories, e.category);\n                    return <tr key={e.id} style={{background:i%2===0?\"transparent\":\"var(--color-background-secondary)\"}}>\n                      <td style={{...tdStyle,color:\"var(--color-text-secondary)\",whiteSpace:\"nowrap\"}}>{e.date}</td>\n                      <td style={{...tdStyle,fontWeight:500}}>{e.desc||\"—\"}</td>\n                      <td style={tdStyle}>\n                        <span style={{display:\"inline-block\",fontSize:11,fontWeight:500,borderRadius:20,padding:\"2px 9px\",background:cfg.bg,color:cfg.color}}>{e.category}</span>\n                      </td>\n                      <td style={{...tdStyle,textAlign:\"right\",color:\"var(--color-text-danger)\",fontWeight:500,whiteSpace:\"nowrap\"}}>\n                        {e.amount?`Rp ${e.amount}`:\"—\"}\n                      </td>\n                      <td style={{...tdStyle,color:\"var(--color-text-secondary)\",fontSize:12,maxWidth:160,overflow:\"hidden\",textOverflow:\"ellipsis\",whiteSpace:\"nowrap\"}}>{e.notes||\"—\"}</td>\n                      <td style={{...tdStyle,padding:\"10px 8px\",minWidth:80,whiteSpace:\"nowrap\",overflow:\"visible\"}}>\n                        <div style={{display:\"flex\",gap:4,justifyContent:\"flex-end\"}}>\n                          <button onClick={()=>openEdit(e)} style={{padding:\"3px 6px\",border:\"none\",background:\"transparent\",cursor:\"pointer\",color:\"var(--color-text-secondary)\"}}><svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"/><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"/></svg></button>\n                          <button onClick={()=>setConfirmId(e.id)} style={{padding:\"3px 6px\",border:\"none\",background:\"transparent\",cursor:\"pointer\",color:\"#ef4444\"}}><svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"3 6 5 6 21 6\"/><path d=\"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6\"/><path d=\"M10 11v6\"/><path d=\"M14 11v6\"/><path d=\"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2\"/></svg></button>\n                        </div>\n                      </td>\n                    </tr>;\n                  })}\n                  {filtered.length>0&&<tr>\n                    <td colSpan={3} style={{...tdStyle,textAlign:\"right\",color:\"var(--color-text-secondary)\",fontSize:12,fontWeight:500,borderTop:\"1.5px solid var(--color-border-secondary)\"}}>Total ditampilkan</td>\n                    <td class=\"amount-neg\" style={{textAlign:\"right\",fontWeight:500,color:\"var(--color-text-danger)\",borderTop:\"1.5px solid var(--color-border-secondary)\",whiteSpace:\"nowrap\"}}>Rp {fmtFull(totalExpensesFiltered)}</td>\n                    <td colSpan={2} style={{...tdStyle,borderTop:\"1.5px solid var(--color-border-secondary)\"}}></td>\n                  </tr>}\n                </tbody>\n              </table>\n            </div>\n      }\n    </div>\n    {confirmId!=null&&<ConfirmModal message=\"Hapus expense ini? Tindakan ini tidak bisa dibatalkan.\" onConfirm={deleteExpense} onCancel={()=>setConfirmId(null)}/>}\n  </div>;\n}\n\nfunction QuotePage({projects}) {\n  const allJobTypes = [...new Set(projects.map(p=>p.jobType).filter(Boolean))].sort();\n  const allDesigns  = [...new Set(projects.map(p=>p.design).filter(Boolean))].sort();\n\n  const [scope,    setScope]    = useState(allJobTypes[0]||\"\");\n  const [area,     setArea]     = useState(\"100\");\n  const [design,   setDesign]   = useState(allDesigns[0]||\"\");\n  const [platform, setPlatform] = useState(\"Upwork\");\n\n  const parseRpLocal = v => { if (!v) return 0; return parseInt(String(v).replace(/\\D/g,\"\"))||0; };\n  const fmtRpLocal   = n => Math.round(n).toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g,\".\");\n\n  const similar = projects.filter(p =>\n    p.jobType === scope &&\n    parseRpLocal(p.priceRp) > 0 &&\n    parseFloat(p.area) > 0 &&\n    parseFloat(p.hours) > 0\n  );\n\n  const allScopeProjects = projects.filter(p => p.jobType === scope);\n\n  const areaNum = parseFloat(area)||0;\n  const avgPricePerM2 = similar.length\n    ? similar.reduce((s,p)=>s+parseRpLocal(p.priceRp)/parseFloat(p.area),0) / similar.length\n    : 0;\n  const avgHoursPerM2 = similar.length\n    ? similar.reduce((s,p)=>s+parseFloat(p.hours)/parseFloat(p.area),0) / similar.length\n    : 0;\n\n  const platformMul = platform===\"Upwork\"?1.05:platform===\"Fiverr\"?0.95:1.0;\n  const estPrice  = areaNum > 0 && avgPricePerM2 > 0 ? Math.round(areaNum * avgPricePerM2 * platformMul / 50000) * 50000 : 0;\n  const estHours  = areaNum > 0 && avgHoursPerM2 > 0 ? Math.round(areaNum * avgHoursPerM2 * 10) / 10 : 0;\n  const estRate   = estHours > 0 && estPrice > 0 ? Math.round(estPrice / estHours) : 0;\n  const estLo     = estPrice > 0 ? Math.round(estPrice * 0.75 / 50000) * 50000 : 0;\n  const estHi     = estPrice > 0 ? Math.round(estPrice * 1.25 / 50000) * 50000 : 0;\n\n  const noData = similar.length === 0;\n\n  const inpSt = {fontSize:13,padding:\"7px 10px\",border:\"0.5px solid var(--color-border-secondary)\",borderRadius:8,background:\"var(--color-background-primary)\",color:\"var(--color-text-primary)\",width:\"100%\",boxSizing:\"border-box\"};\n  const chipLbl = {fontSize:10,fontWeight:500,textTransform:\"uppercase\",letterSpacing:\"0.05em\",color:\"var(--color-text-secondary)\",marginBottom:5,display:\"block\"};\n  const cardSt = {background:\"var(--color-background-primary)\",border:\"0.5px solid var(--color-border-tertiary)\",borderRadius:12,padding:\"16px 18px\"};\n\n  return <div>\n    <div style={{display:\"flex\",justifyContent:\"space-between\",alignItems:\"baseline\",marginBottom:20}}>\n      <div style={{fontWeight:500,fontSize:20}}>Quote Calculator</div>\n      <span style={{fontSize:12,color:\"var(--color-text-secondary)\"}}>\n        {projects.length} proyek historis\n      </span>\n    </div>\n\n    <div style={{display:\"grid\",gridTemplateColumns:\"1fr 1fr\",gap:20,marginBottom:20}}>\n\n      {/* Input */}\n      <div style={cardSt}>\n        <div style={{fontWeight:500,fontSize:14,color:\"var(--color-text-primary)\",marginBottom:14}}>Input Proyek</div>\n        <div style={{display:\"flex\",flexDirection:\"column\",gap:12}}>\n          <div>\n            <span style={chipLbl}>Scope of Work</span>\n            <select value={scope} onChange={e=>setScope(e.target.value)} style={inpSt}>\n              {allJobTypes.length===0 && <option value=\"\">Belum ada data</option>}\n              {allJobTypes.map(j=><option key={j} value={j}>{j}</option>)}\n            </select>\n          </div>\n          <div>\n            <span style={chipLbl}>Area (m²)</span>\n            <input type=\"number\" value={area} onChange={e=>setArea(e.target.value)} min=\"1\" placeholder=\"cth. 120\" style={inpSt}/>\n          </div>\n          <div>\n            <span style={chipLbl}>Project Type</span>\n            <select value={design} onChange={e=>setDesign(e.target.value)} style={inpSt}>\n              {allDesigns.length===0 && <option value=\"\">Belum ada data</option>}\n              {allDesigns.map(d=><option key={d} value={d}>{d}</option>)}\n            </select>\n          </div>\n          <div>\n            <span style={chipLbl}>Platform</span>\n            <select value={platform} onChange={e=>setPlatform(e.target.value)} style={inpSt}>\n              {platformOptions.map(p=><option key={p} value={p}>{p}</option>)}\n            </select>\n          </div>\n        </div>\n      </div>\n\n      {/* Output */}\n      <div style={{display:\"flex\",flexDirection:\"column\",gap:12}}>\n\n        <div style={{...cardSt,background:\"#E6F1FB\",border:\"0.5px solid #B5D4F4\"}}>\n          <div style={{fontSize:11,fontWeight:500,textTransform:\"uppercase\",letterSpacing:\"0.05em\",color:\"#185FA5\",marginBottom:8}}>Estimasi Harga</div>\n          {noData\n            ? <div style={{fontSize:13,color:\"#185FA5\"}}>Belum cukup data untuk scope ini</div>\n            : <>\n                <div style={{fontSize:26,fontWeight:500,color:\"#0C447C\",marginBottom:2}}>Rp {fmtRpLocal(estPrice)}</div>\n                <div style={{fontSize:12,color:\"#185FA5\"}}>kisaran Rp {fmtRpLocal(estLo)} – Rp {fmtRpLocal(estHi)}</div>\n              </>}\n        </div>\n\n        <div style={{...cardSt,background:\"#E1F5EE\",border:\"0.5px solid #9FE1CB\"}}>\n          <div style={{fontSize:11,fontWeight:500,textTransform:\"uppercase\",letterSpacing:\"0.05em\",color:\"#085041\",marginBottom:8}}>Estimasi Jam</div>\n          {noData\n            ? <div style={{fontSize:13,color:\"#085041\"}}>Belum cukup data untuk scope ini</div>\n            : <>\n                <div style={{fontSize:26,fontWeight:500,color:\"#085041\",marginBottom:2}}>{estHours} jam</div>\n                <div style={{fontSize:12,color:\"#0F6E56\"}}>{estRate>0?`≈ Rp ${fmtRpLocal(estRate)} / jam`:\"—\"}</div>\n              </>}\n        </div>\n\n        <div style={{...cardSt,background:\"#f4f4f4\"}}>\n          <div style={{fontSize:11,fontWeight:500,textTransform:\"uppercase\",letterSpacing:\"0.05em\",color:\"var(--color-text-secondary)\",marginBottom:8}}>Dasar Perhitungan</div>\n          <div style={{display:\"flex\",flexDirection:\"column\",gap:5}}>\n            {[\n              {label:\"Proyek serupa ditemukan\", val:`${similar.length} proyek`},\n              {label:\"Rata-rata harga/m²\",      val: similar.length ? `Rp ${fmtRpLocal(Math.round(avgPricePerM2))}/m²` : \"—\"},\n              {label:\"Rata-rata jam/m²\",        val: similar.length ? `${Math.round(avgHoursPerM2*100)/100} jam/m²`     : \"—\"},\n              {label:\"Multiplier platform\",     val: platform===\"Upwork\"?\"+5%\":platform===\"Fiverr\"?\"-5%\":\"±0%\"},\n            ].map(({label,val})=><div key={label} style={{display:\"flex\",justifyContent:\"space-between\",fontSize:12}}>\n              <span style={{color:\"var(--color-text-secondary)\"}}>{label}</span>\n              <span style={{fontWeight:500,color:\"var(--color-text-primary)\"}}>{val}</span>\n            </div>)}\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    {/* Similar projects */}\n    <div style={cardSt}>\n      <div style={{fontWeight:500,fontSize:13,color:\"var(--color-text-primary)\",marginBottom:12}}>\n        Proyek Serupa\n        <span style={{fontSize:12,color:\"var(--color-text-secondary)\",fontWeight:400,marginLeft:8}}>scope: {scope||\"—\"}</span>\n      </div>\n      {allScopeProjects.length === 0\n        ? <div style={{fontSize:13,color:\"var(--color-text-secondary)\",padding:\"8px 0\"}}>Belum ada proyek dengan scope ini.</div>\n        : allScopeProjects.map((p,i)=>{\n            const hasData = parseRpLocal(p.priceRp)>0 && parseFloat(p.area)>0 && parseFloat(p.hours)>0;\n            const isLast  = i===allScopeProjects.length-1;\n            return <div key={p.id} style={{display:\"flex\",alignItems:\"center\",justifyContent:\"space-between\",padding:\"10px 0\",borderBottom:isLast?\"none\":\"0.5px solid var(--color-border-tertiary)\"}}>\n              <div style={{display:\"flex\",flexDirection:\"column\",gap:2}}>\n                <div style={{fontSize:13,fontWeight:500,color:\"var(--color-text-primary)\"}}>{p.projectName||\"Untitled\"}</div>\n                <div style={{fontSize:12,color:\"var(--color-text-secondary)\"}}>\n                  {[p.design, p.platform, p.area?`${p.area} m²`:null, p.status].filter(Boolean).join(\" · \")}\n                </div>\n              </div>\n              <div style={{display:\"flex\",flexDirection:\"column\",alignItems:\"flex-end\",gap:2,flexShrink:0}}>\n                <div style={{fontSize:13,fontWeight:500,color:\"var(--color-text-primary)\"}}>\n                  {hasData ? `Rp ${fmtRpLocal(parseRpLocal(p.priceRp))}` : \"—\"}\n                </div>\n                <div style={{fontSize:12,color:hasData?\"var(--color-text-secondary)\":\"var(--color-text-danger)\"}}>\n                  {hasData ? `${p.hours} jam` : \"data tidak lengkap\"}\n                </div>\n              </div>\n            </div>;\n          })\n      }\n    </div>\n  </div>;\n}\n\nconst navItems = [\n  {id:\"dashboard\",label:\"Dashboard\",icon:<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"/></svg>},\n  {id:\"projects\",label:\"Project Cards\",icon:<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\"/><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"/><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"/></svg>},\n  {id:\"analysis\",label:\"Analysis\",icon:<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>},\n  {id:\"expenses\",label:\"Expenses\",icon:<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/></svg>},\n  {id:\"client\",label:\"Client\",icon:<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/></svg>},\n  {id:\"download\",label:\"Download\",icon:<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"/></svg>},\n  {id:\"upwork\",label:\"Upwork\",icon:<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"#14a800\" stroke=\"none\"><path d=\"M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703 0 1.489-1.211 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z\"/></svg>},\n  {id:\"quote\",label:\"Quote Calc\",icon:<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/><circle cx=\"18\" cy=\"18\" r=\"4\"/><line x1=\"16.5\" y1=\"18\" x2=\"19.5\" y2=\"18\"/><line x1=\"18\" y1=\"16.5\" x2=\"18\" y2=\"19.5\"/></svg>},\n  {id:\"resources\",label:\"Resources\",icon:<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\"/><path d=\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\"/></svg>},\n  {id:\"settings\",label:\"Settings\",icon:<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z\"/></svg>},\n];\n\nfunction BigToggle({on,onToggle}) {\n  return <div onClick={onToggle} style={{width:48,height:26,borderRadius:13,background:on?\"#22c55e\":\"#d1d5db\",cursor:\"pointer\",position:\"relative\",transition:\"background 0.2s\",flexShrink:0,border:\"1.5px solid\",borderColor:on?\"#16a34a\":\"#9ca3af\"}}>\n    <div style={{width:20,height:20,borderRadius:\"50%\",background:\"#fff\",position:\"absolute\",top:2,left:on?24:2,transition:\"left 0.2s\",boxShadow:\"0 1px 4px rgba(0,0,0,0.25)\"}}/>\n  </div>;\n}\n\nfunction Toggle({on,onToggle,label}) {\n  return <div style={{display:\"flex\",alignItems:\"center\",gap:8}}><span style={{fontSize:11,color:\"var(--color-text-secondary)\"}}>{label}</span><div onClick={onToggle} style={{width:36,height:20,borderRadius:10,background:on?\"#22c55e\":\"var(--color-border-secondary)\",cursor:\"pointer\",position:\"relative\",transition:\"background 0.2s\"}}><div style={{width:16,height:16,borderRadius:\"50%\",background:\"#fff\",position:\"absolute\",top:2,left:on?18:2,transition:\"left 0.2s\",boxShadow:\"0 1px 3px rgba(0,0,0,0.2)\"}}/></div></div>;\n}\n\nfunction Sidebar({active,onSelect,topbar,onToggle}) {\n  return <div style={{width:220,flexShrink:0,borderRight:\"2px solid #000\",display:\"flex\",flexDirection:\"column\",background:\"var(--color-background-primary)\",position:\"sticky\",top:0,height:\"100vh\",overflowY:\"auto\"}}>\n    {/* Logo / brand area */}\n    <div style={{padding:\"20px 20px 16px\"}}>\n      <div style={{display:\"flex\",alignItems:\"center\",gap:10,marginBottom:16}}>\n        <div style={{width:32,height:32,borderRadius:8,background:\"#111\",display:\"flex\",alignItems:\"center\",justifyContent:\"center\",flexShrink:0}}>\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\"/><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"/><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"/></svg>\n        </div>\n        <div>\n          <div style={{fontWeight:600,fontSize:13,color:\"var(--color-text-primary)\",lineHeight:1.2}}>Project</div>\n          <div style={{fontWeight:600,fontSize:13,color:\"var(--color-text-secondary)\",lineHeight:1.2}}>Manager</div>\n        </div>\n      </div>\n      <div style={{height:\"1px\",background:\"var(--color-border-tertiary)\"}}/>\n    </div>\n\n    {/* Nav items */}\n    <div style={{flex:1,padding:\"4px 12px\",display:\"flex\",flexDirection:\"column\",gap:2}}>\n      <div style={{fontSize:10,fontWeight:600,color:\"var(--color-text-secondary)\",letterSpacing:\"0.08em\",textTransform:\"uppercase\",padding:\"4px 8px\",marginBottom:4}}>Navigation</div>\n      {navItems.map(item=>{\n        const isActive = active===item.id;\n        return <div key={item.id} onClick={()=>onSelect(item.id)}\n          style={{display:\"flex\",alignItems:\"center\",gap:10,padding:\"9px 12px\",cursor:\"pointer\",borderRadius:10,\n            background:isActive?\"#111\":\"transparent\",\n            color:isActive?\"#fff\":\"var(--color-text-secondary)\",\n            fontSize:13,fontWeight:isActive?500:400,\n            transition:\"all 0.15s\"}}\n          onMouseEnter={e=>{if(!isActive){e.currentTarget.style.background=\"var(--color-background-secondary)\";e.currentTarget.style.color=\"var(--color-text-primary)\";}}}\n          onMouseLeave={e=>{if(!isActive){e.currentTarget.style.background=\"transparent\";e.currentTarget.style.color=\"var(--color-text-secondary)\";}}}\n        >\n          <span style={{opacity:isActive?1:0.6}}>{item.icon}</span>\n          {item.label}\n          {isActive&&<span style={{marginLeft:\"auto\",width:6,height:6,borderRadius:\"50%\",background:\"#fff\",opacity:0.7,flexShrink:0}}/>}\n        </div>;\n      })}\n    </div>\n\n    {/* Bottom toggle */}\n    <div style={{padding:\"16px 20px\",borderTop:\"1px solid var(--color-border-tertiary)\"}}>\n      <Toggle on={topbar} onToggle={onToggle} label=\"Top bar\"/>\n    </div>\n  </div>;\n}\n\nfunction Topbar({active,onSelect,topbar,onToggle}) {\n  return <div style={{borderBottom:\"0.5px solid var(--color-border-tertiary)\",padding:\"0 1rem\",display:\"flex\",alignItems:\"center\",gap:4,height:48,flexShrink:0}}><span style={{fontWeight:500,fontSize:14,marginRight:12}}>Menu</span>{navItems.map(item=><div key={item.id} onClick={()=>onSelect(item.id)} style={{display:\"flex\",alignItems:\"center\",gap:6,padding:\"6px 12px\",cursor:\"pointer\",borderRadius:8,background:active===item.id?\"#111\":\"transparent\",color:active===item.id?\"#fff\":\"var(--color-text-primary)\",fontSize:13}} onMouseEnter={e=>{if(active!==item.id)e.currentTarget.style.background=\"var(--color-background-secondary)\";}} onMouseLeave={e=>{if(active!==item.id)e.currentTarget.style.background=\"transparent\";}}>{item.icon}{item.label}</div>)}<div style={{marginLeft:\"auto\"}}><Toggle on={!topbar} onToggle={onToggle} label=\"Sidebar\"/></div></div>;\n}\n\nfunction parseSheetsTSV(text) {\n  const lines = text.split(\"\\\n\").map(l=>l.split(\"\\\t\"));\n  const c = (row,col) => (lines[row]?.[col]||\"\").trim().replace(/^\"|\"$/g,\"\").trim();\n\n  // Row 0: No | Project Name | ... | Platform\n  const projectName = c(0,1);\n  const platform    = c(0,7);\n\n  // Row 3: | Area | Price | Style | Hours | | Start | Priced(USD)\n  const area     = c(3,1).replace(/[^0-9.]/g,\"\");\n  const priceRp  = c(3,2).replace(/^Rp\\\\s*/i,\"\").replace(/\\./g,\"\").replace(/,/g,\"\");\n  const style    = c(3,3);\n  const hours    = c(3,4);\n  const startRaw = c(3,6);\n  const priceUSD = c(3,7).replace(/[^0-9.]/g,\"\");\n\n  const parseDate = s => {\n    if (!s) return \"\";\n    const parts = s.split(\"/\");\n    if (parts.length!==3) return \"\";\n    const [a,b,yr] = parts;\n    return `${yr}-${String(a).padStart(2,\"0\")}-${String(b).padStart(2,\"0\")}`;\n  };\n\n  const startDate = parseDate(startRaw);\n\n  // Row 5 (task row 0): ... | End | Gross Price\n  const endDate    = parseDate(c(5,6));\n  const grossPrice = c(5,7).replace(/[^0-9]/g,\"\");\n\n  // Row 6 (task row 1): ... | Status | Payment\n  const statusRaw = c(6,6)||\"Ongoing\";\n  const status    = statusRaw.charAt(0).toUpperCase()+statusRaw.slice(1);\n\n  // Row 8 (task row 3): notes=col4, Scope of Work=col7\n  const notes   = c(8,4);\n  const jobType = c(8,7);\n\n  // Row 9 (task row 4): Project Type=col6, Client Name=col7\n  const design     = c(9,6);\n  const clientName = c(9,7);\n\n  // Row 10 (task row 5): Job Per Hour=col6, Invitation=col7\n  const jobPerHourRaw = c(10,6).replace(/[^0-9.]/g,\"\");\n  const jobPerHour    = jobPerHourRaw===\"0\"?\"\":jobPerHourRaw;\n  const invitationRaw = c(10,7).toLowerCase();\n  const invitation    = invitationRaw===\"yes\"||invitationRaw===\"true\";\n  const hourlyJob     = jobPerHour!==\"\";\n\n  const taskNames = [\"Layout Furni & Mood Board\",\"Revisi\",\"3d Model & Render\",\"Revisi\",\"Gamker\",\"Revisi\",\"3d Animation\",\"Revisi\"];\n  const tasks = taskNames.map((name,i)=>{\n    const row     = 5+i;\n    const visRaw  = c(row,0).toLowerCase();\n    const visible = visRaw===\"yes\";\n    const doneRaw = c(row,3).toLowerCase();\n    const done    = doneRaw===\"true\"||doneRaw===\"yes\"||doneRaw===\"1\";\n    const deadline = parseDate(c(row,4));\n    return {id:i, name, done, visible, deadline};\n  });\n\n  const nettNum = parseFloat(priceRp)||0;\n  if (!projectName) throw new Error(\"Nama proyek tidak ditemukan\");\n\n  return {\n    id: Date.now(),\n    projectName, platform, clientName, clientType:\"Owner\",\n    area, priceRp: nettNum>0?String(Math.round(nettNum)):\"\",\n    priceUSD, style, hours, startDate, endDate,\n    status, jobType, design, jobPerHour, invitation, team:false, hourlyJob,\n    fee:[], paymentStatus:[], payment:[], notes,\n    grossPrice, address:\"\", tasks,\n  };\n}\n\nfunction ImportSheetsModal({onParsed, onClose}) {\n  const [text, setText] = useState(\"\");\n  const [error, setError] = useState(\"\");\n\n  const handleClose = () => { setText(\"\"); setError(\"\"); onClose(); };\n\n  const handleParse = () => {\n    setError(\"\");\n    try {\n      if (!text.trim()) { setError(\"Paste data dari Google Sheets dulu.\"); return; }\n      const parsed = parseSheetsTSV(text);\n      if (!parsed.projectName) { setError(\"Nama proyek tidak ditemukan. Pastikan format benar.\"); return; }\n      onParsed(parsed);\n    } catch(e) {\n      setError(\"Gagal membaca data. Pastikan copy dari baris pertama proyek.\");\n    }\n  };\n\n  const inp = {width:\"100%\",boxSizing:\"border-box\",fontSize:13,padding:\"7px 10px\",border:\"1.5px solid #ddd\",borderRadius:6,background:\"#fff\",outline:\"none\"};\n\n  return <div style={{position:\"fixed\",inset:0,background:\"rgba(0,0,0,0.4)\",zIndex:9999,display:\"flex\",alignItems:\"flex-start\",justifyContent:\"center\",paddingTop:\"8vh\"}} onClick={handleClose}>\n    <div onClick={e=>e.stopPropagation()} style={{background:\"#fff\",borderRadius:14,padding:\"24px 28px\",width:\"min(480px,92vw)\",boxShadow:\"0 8px 32px rgba(0,0,0,0.2)\"}}>\n      <div style={{fontWeight:500,fontSize:15,marginBottom:4}}>Import dari Google Sheets</div>\n      <div style={{fontSize:12,color:\"#888\",marginBottom:16}}>Select all sel proyek di Sheets → Copy → Paste di bawah, lalu klik Parse untuk mengisi form.</div>\n      <textarea\n        value={text} onChange={e=>{setText(e.target.value);setError(\"\");}}\n        placeholder={\"7\\\tProyek Sarah\\\t\\\t\\\t\\\t\\\t\\\tUpwork\\\n\\\tArea\\\tPrice\\\tStyle\\\tHours\\\t\\\tStart\\\tPriced (USD)\\\n...\"}\n        style={{...inp,height:150,resize:\"vertical\",fontFamily:\"monospace\",fontSize:11}}\n        autoFocus\n      />\n      {error&&<div style={{fontSize:12,color:\"#dc2626\",marginTop:6,padding:\"6px 10px\",background:\"#fef2f2\",borderRadius:6}}>{error}</div>}\n      <div style={{display:\"flex\",gap:8,justifyContent:\"flex-end\",marginTop:14}}>\n        <button onClick={handleClose} style={{fontSize:13,padding:\"6px 16px\"}}>Batal</button>\n        <button onClick={handleParse} style={{fontSize:13,padding:\"6px 16px\",background:\"#111\",color:\"#fff\",border:\"none\",borderRadius:6,cursor:\"pointer\"}}>\n          Parse & Edit →\n        </button>\n      </div>\n    </div>\n  </div>;\n}\n\nexport default function App() {\n  const [projects,setProjects] = useState(()=>{ return seedData; });\n  const [mode,setMode] = useState(\"list\");\n  const [editing,setEditing] = useState(null);\n  const [filter,setFilter] = useState(\"All\");\n  const [activePage,setActivePage] = useState(\"dashboard\");\n  const [topbar,setTopbar] = useState(false);\n  const [confirmId,setConfirmId] = useState(null);\n\n  useEffect(()=>{window._projectData=JSON.stringify(projects);},[projects]);\n  useEffect(()=>{ applyAccent(window._accentColor||seedAccent||DEFAULT_ACCENT); },[]);\n\n  const [search,setSearch] = useState(\"\");\n  const [filterPlatform,setFilterPlatform] = useState(\"All\");\n  const [filterJobType,setFilterJobType] = useState(\"All\");\n  const [filterYear,setFilterYear] = useState(\"All\");\n\n  const [showImport, setShowImport] = useState(false);\n  const savedScrollY = useRef(0);\n\n  const handleImport = (proj, replace, replaceId) => {\n    if (replace && replaceId) {\n      setProjects(ps=>ps.map(p=>p.id===replaceId?{...proj,id:replaceId}:p));\n    } else {\n      setProjects(ps=>[...ps, proj]);\n    }\n    setShowImport(false);\n  };\n\n  const handleParsed = (parsed) => {\n    setShowImport(false);\n    setEditing(parsed);\n    setMode(\"form\");\n  };\n\n  const saveProject = proj => {\n    setProjects(ps => {\n      const exists = ps.some(p=>p.id===proj.id);\n      if (exists) return ps.map(p=>p.id===proj.id?proj:p);\n      return [...ps, proj];\n    });\n    setMode(\"list\");\n    setEditing(null);\n  };\n\n  const deleteProject=id=>{setConfirmId(id);};\n  const confirmDelete=()=>{setProjects(ps=>ps.filter(p=>p.id!==confirmId));setConfirmId(null);};\n  const startEdit=proj=>{savedScrollY.current=window.scrollY;setEditing(proj);setMode(\"form\");};\n\n\n\n  const allYears = [...new Set(projects.map(p=>(p.startDate||\"\").slice(0,4)).filter(Boolean))].sort().reverse();\n  const allJobTypes = [...new Set(projects.map(p=>p.jobType).filter(Boolean))].sort();\n\n  const filtered = projects.filter(p=>{\n    if (filter!==\"All\" && p.status!==filter) return false;\n    if (filterPlatform!==\"All\" && p.platform!==filterPlatform) return false;\n    if (filterJobType!==\"All\" && p.jobType!==filterJobType) return false;\n    if (filterYear!==\"All\" && !(p.startDate||\"\").startsWith(filterYear)) return false;\n    if (search.trim()) {\n      const q = search.trim().toLowerCase();\n      if (!( (p.projectName||\"\").toLowerCase().includes(q) || (p.clientName||\"\").toLowerCase().includes(q) || (p.address||\"\").toLowerCase().includes(q) )) return false;\n    }\n    return true;\n  });\n  const counts=statusOptions.reduce((acc,s)=>({...acc,[s]:projects.filter(p=>p.status===s).length}),{});\n\n  const hasActiveFilters = search.trim()||filterPlatform!==\"All\"||filterJobType!==\"All\"||filterYear!==\"All\"||filter!==\"All\";\n  const resetFilters = ()=>{setSearch(\"\");setFilterPlatform(\"All\");setFilterJobType(\"All\");setFilterYear(\"All\");setFilter(\"All\");};\n\n  const selectStyle = {fontSize:12,padding:\"5px 8px\",border:\"0.5px solid var(--color-border-secondary)\",borderRadius:6,background:\"var(--color-background-primary)\",color:\"var(--color-text-primary)\",cursor:\"pointer\"};\n\n  const projectsPage = <div>\n    <div style={{display:\"flex\",justifyContent:\"space-between\",alignItems:\"center\",marginBottom:20}}>\n      <div><div style={{display:\"flex\",alignItems:\"baseline\",gap:10}}><div style={{fontWeight:500,fontSize:20}}>Project Cards</div><div style={{fontWeight:500,fontSize:28,color:\"var(--color-text-primary)\",lineHeight:1}}>{projects.length}</div></div><div style={{fontSize:12,color:\"var(--color-text-secondary)\",marginTop:2}}>total proyek</div></div>\n      {mode===\"list\"&&<div style={{display:\"flex\",gap:8}}>\n        <button onClick={exportWithSeedData} style={{padding:\"7px 14px\",fontSize:13,display:\"flex\",alignItems:\"center\",gap:6,background:\"var(--color-background-success,#f0fdf4)\",color:\"var(--color-text-success,#166534)\",borderColor:\"var(--color-border-success,#86efac)\"}}>\n          <svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\"/><polyline points=\"17 21 17 13 7 13 7 21\"/><polyline points=\"7 3 7 8 15 8\"/></svg>\n          Simpan File\n        </button>\n        <button onClick={()=>setShowImport(true)} style={{padding:\"7px 14px\",fontSize:13,display:\"flex\",alignItems:\"center\",gap:6}}>\n          <svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"17 8 12 3 7 8\"/><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\"/></svg>\n          Import Sheets\n        </button>\n        <button onClick={()=>{savedScrollY.current=window.scrollY;setEditing(null);setMode(\"form\");}} style={{padding:\"8px 18px\",fontSize:13}}>+ Proyek Baru</button>\n      </div>}\n    </div>\n    {mode===\"form\"&&<ProjectForm initial={editing} allProjects={projects} onSave={saveProject} onCancel={()=>{const sy=savedScrollY.current;setMode(\"list\");setEditing(null);setTimeout(()=>window.scrollTo({top:sy,behavior:\"instant\"}),80);}}/>}\n    {mode===\"list\"&&<div>\n      {/* Search bar */}\n      <div style={{display:\"flex\",gap:8,marginBottom:12,flexWrap:\"wrap\",alignItems:\"center\"}}>\n        <div style={{position:\"relative\",flex:1,minWidth:180}}>\n          <svg style={{position:\"absolute\",left:10,top:\"50%\",transform:\"translateY(-50%)\",pointerEvents:\"none\"}} width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--color-text-secondary)\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"/></svg>\n          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder=\"Cari nama proyek, client, lokasi...\" style={{width:\"100%\",boxSizing:\"border-box\",paddingLeft:32,fontSize:13,border:\"0.5px solid var(--color-border-secondary)\",borderRadius:8,padding:\"7px 10px 7px 32px\",outline:\"none\",background:\"var(--color-background-primary)\"}}/>\n        </div>\n        <select value={filterPlatform} onChange={e=>setFilterPlatform(e.target.value)} style={selectStyle}>\n          <option value=\"All\">Platform (Semua)</option>\n          {platformOptions.map(p=><option key={p} value={p}>{p}</option>)}\n        </select>\n        <select value={filterJobType} onChange={e=>setFilterJobType(e.target.value)} style={selectStyle}>\n          <option value=\"All\">Scope (Semua)</option>\n          {allJobTypes.map(j=><option key={j} value={j}>{j}</option>)}\n        </select>\n        <select value={filterYear} onChange={e=>setFilterYear(e.target.value)} style={selectStyle}>\n          <option value=\"All\">Tahun (Semua)</option>\n          {allYears.map(y=><option key={y} value={y}>{y}</option>)}\n        </select>\n        {hasActiveFilters&&<button onClick={resetFilters} style={{fontSize:12,padding:\"5px 12px\",color:\"var(--color-text-danger)\",borderColor:\"var(--color-border-danger)\",borderRadius:6,whiteSpace:\"nowrap\"}}>✕ Reset</button>}\n      </div>\n      {/* Status filter pills */}\n      <div style={{display:\"flex\",gap:6,marginBottom:16,flexWrap:\"wrap\",alignItems:\"center\"}}>\n        <button onClick={()=>setFilter(\"All\")} style={{fontSize:12,padding:\"4px 14px\",background:filter===\"All\"?\"#111\":\"transparent\",color:filter===\"All\"?\"#fff\":\"var(--color-text-secondary)\",borderColor:filter===\"All\"?\"#111\":\"var(--color-border-secondary)\",borderRadius:20}}>Semua ({projects.length})</button>\n        {statusOptions.map(s=>{const c=STATUS_CFG[s];const act=filter===s;return <button key={s} onClick={()=>setFilter(s)} style={{fontSize:12,padding:\"4px 14px\",background:act?c.bg:\"transparent\",color:act?c.text:\"var(--color-text-secondary)\",borderColor:act?c.dot:\"var(--color-border-tertiary)\",borderRadius:20}}>{s} {counts[s]>0&&`(${counts[s]})`}</button>;})}\n        {hasActiveFilters&&<span style={{fontSize:12,color:\"var(--color-text-secondary)\",marginLeft:4}}>{filtered.length} hasil ditemukan</span>}\n      </div>\n      {filtered.length===0\n        ? <div style={{textAlign:\"center\",padding:\"4rem 0\",color:\"var(--color-text-secondary)\",fontSize:14}}>{projects.length===0?\"Belum ada proyek.\":hasActiveFilters?\"Tidak ada proyek yang cocok dengan filter ini.\":\"Tidak ada proyek dengan status ini.\"}</div>\n        : [...filtered].sort((a,b)=>{ const ds=(b.startDate||\"\").localeCompare(a.startDate||\"\"); return ds!==0?ds:b.id-a.id; }).map((p,i)=><ProjectCard key={p.id} proj={p} allProjects={projects} onEdit={startEdit} onDelete={deleteProject}/>)\n      }\n    </div>}\n  </div>;\n\n  function exportWithSeedData() {\n    const currentProjects = projects;\n    const currentExpenses = (() => { try { const s=window._expensesData; return s?JSON.parse(s):[]; } catch(e){return [];} })();\n    const currentClientMeta = (() => { try { const s=window._clientMeta; return s?JSON.parse(s):{}; } catch(e){return {};} })();\n    const currentExpenseCats = (() => { try { const s=window._expenseCats; return s?JSON.parse(s):null; } catch(e){return null;} })();\n    const currentAccent = window._accentColor||\"\";\n    const currentTarget = (() => { try { const s=window._incomeTarget; return s?JSON.parse(s):null; } catch(e){return null;} })();\n    const currentAreaRanges = (() => { try { const s=window._areaRanges; return s?JSON.parse(s):null; } catch(e){return null;} })();\n    const currentDurasiRanges = (() => { try { const s=window._durasiRanges; return s?JSON.parse(s):null; } catch(e){return null;} })();\n\n    const src = window.__sourceTSX;\n    if (!src) {\n      alert(\"Source belum siap. Tunggu 2-3 detik lalu coba lagi.\");\n      return;\n    }\n\n    const replaceLine = (text, varName, value) => {\n      const re = new RegExp(`^const ${varName} = [\\\\s\\\\S]*?;$`, \"m\");\n      return text.replace(re, `const ${varName} = ${JSON.stringify(value)};`);\n    };\n\n    let out = src;\n    out = replaceLine(out, \"seedData\", currentProjects);\n    out = replaceLine(out, \"seedExpenses\", currentExpenses);\n    out = replaceLine(out, \"seedClientMeta\", currentClientMeta);\n    if (currentExpenseCats) out = replaceLine(out, \"seedExpenseCats\", currentExpenseCats);\n    out = replaceLine(out, \"seedAccent\", currentAccent);\n    if (currentTarget) out = replaceLine(out, \"seedTarget\", currentTarget);\n    if (currentAreaRanges) out = replaceLine(out, \"seedAreaRanges\", currentAreaRanges);\n    if (currentDurasiRanges) out = replaceLine(out, \"seedDurasiRanges\", currentDurasiRanges);\n\n    const blob = new Blob([out], {type:\"text/plain\"});\n    const url = URL.createObjectURL(blob);\n    const a = document.createElement(\"a\");\n    const now = new Date();\n    const stamp = `${now.getFullYear()}${String(now.getMonth()+1).padStart(2,\"0\")}${String(now.getDate()).padStart(2,\"0\")}`;\n    a.href = url;\n    a.download = `project_card_manager_${stamp}.tsx`;\n    a.click();\n    URL.revokeObjectURL(url);\n  }\n\n    const content = <div style={{flex:1,padding:\"1.5rem\",overflowY:\"auto\",minHeight:\"100vh\"}}>{activePage===\"dashboard\"?<DashboardPage projects={projects} setProjects={setProjects}/>:activePage===\"analysis\"?<AnalysisPage projects={projects}/>:activePage===\"expenses\"?<ExpensesPage projects={projects}/>:activePage===\"tabel\"?<TabelPage projects={projects}/>:activePage===\"client\"?<ClientPage projects={projects}/>:activePage===\"download\"?<DownloadPage projects={projects}/>:activePage===\"upwork\"?<UpworkPage projects={projects}/>:activePage===\"quote\"?<QuotePage projects={projects}/>:activePage===\"resources\"?<ResourcesPage/>:activePage===\"settings\"?<SettingsPage/>:projectsPage}</div>;\n\n  const modal = confirmId!=null ? <ConfirmModal message=\"Hapus proyek ini? Tindakan ini tidak bisa dibatalkan.\" onConfirm={confirmDelete} onCancel={()=>setConfirmId(null)}/> : null;\n  if (topbar) return <><div style={{display:\"flex\",flexDirection:\"column\",height:\"100%\"}}><Topbar active={activePage} onSelect={setActivePage} topbar={topbar} onToggle={()=>setTopbar(v=>!v)}/>{content}</div>{modal}{showImport&&<ImportSheetsModal onParsed={handleParsed} onClose={()=>setShowImport(false)}/>}</>;\n  return <><div style={{display:\"flex\",minHeight:\"100vh\",alignItems:\"flex-start\"}}><Sidebar active={activePage} onSelect={setActivePage} topbar={topbar} onToggle={()=>setTopbar(v=>!v)}/>{content}</div>{modal}{showImport&&<ImportSheetsModal onParsed={handleParsed} onClose={()=>setShowImport(false)}/>}</>;\n}\n";

const defaultTasks = ["Layout Furni & Mood Board","Revisi","3d Model & Render","Revisi","Gambar","Revisi","3d Animation","Revisi"];
const statusOptions = ["Ongoing","Completed","Cancelled","Incompleted"];
const defaultJobTypeOptions = ["3D Modelling","3D Modelling + Gamker","Gambar Kerja (AutoCAD)","Gambar Kerja (LayOut)","Interior Design","Interior Design + Gamker"];
const defaultDesignOptions = ["Bar","Office","Residential","Restaurant","Store"];
const platformOptions = ["Upwork","Fiverr","Freelance"];
const clientTypeOptions = ["Owner","Consultant","Contractor","Developer"];

const STATUS_CFG = {
  Ongoing:     { bg:"#fff8ed", text:"#b45309", dot:"#f59e0b" },
  Completed:   { bg:"#f0fdf4", text:"#166534", dot:"#22c55e" },
  Cancelled:   { bg:"#fef2f2", text:"#991b1b", dot:"#ef4444" },
  Incompleted: { bg:"#eff6ff", text:"#1d4ed8", dot:"#3b82f6" },
};

const seedData = [{"id":1700000001,"projectName":"Apartemen Menteng Luxury","address":"Singapore","platform":"Upwork","clientName":"James Whitfield","clientType":"Owner","area":"120","priceRp":"18.000.000","priceUSD":"1200","style":"Modern","hours":"80","startDate":"2024-01-10","endDate":"2024-03-15","status":"Completed","jobType":"Interior Design","design":"Residential","jobPerHour":"","invitation":true,"team":false,"hourlyJob":false,"fee":[],"paymentStatus":[{"name":"DP 50%","lunas":true},{"name":"Pelunasan","lunas":true}],"payment":[],"notes":"Client minta revisi 2x.","grossPrice":"20.000.000","tasks":[{"id":0,"name":"Layout Furni & Mood Board","done":true,"visible":true,"deadline":"2024-01-25"},{"id":1,"name":"Revisi","done":true,"visible":true,"deadline":""},{"id":2,"name":"3d Model & Render","done":true,"visible":true,"deadline":"2024-02-20"},{"id":3,"name":"Revisi","done":true,"visible":false,"deadline":""},{"id":4,"name":"Gambar","done":true,"visible":true,"deadline":"2024-03-10"},{"id":5,"name":"Revisi","done":false,"visible":false,"deadline":""},{"id":6,"name":"3d Animation","done":false,"visible":false,"deadline":""},{"id":7,"name":"Revisi","done":false,"visible":false,"deadline":""}]},{"id":1700000002,"projectName":"Villa Bali Tropic Retreat","address":"Australia","platform":"Upwork","clientName":"Sarah Mitchell","clientType":"Developer","area":"250","priceRp":"32.000.000","priceUSD":"2100","style":"Tropical Modern","hours":"150","startDate":"2024-02-05","endDate":"2024-05-20","status":"Completed","jobType":"3D Modelling","design":"Residential","jobPerHour":"","invitation":false,"team":false,"hourlyJob":false,"fee":[],"paymentStatus":[{"name":"DP 30%","lunas":true},{"name":"Progress 40%","lunas":true},{"name":"Pelunasan","lunas":true}],"payment":[],"notes":"","grossPrice":"35.000.000","tasks":[{"id":0,"name":"Layout Furni & Mood Board","done":true,"visible":true,"deadline":""},{"id":1,"name":"Revisi","done":true,"visible":true,"deadline":""},{"id":2,"name":"3d Model & Render","done":true,"visible":true,"deadline":""},{"id":3,"name":"Revisi","done":true,"visible":true,"deadline":""},{"id":4,"name":"Gambar","done":false,"visible":false,"deadline":""},{"id":5,"name":"Revisi","done":false,"visible":false,"deadline":""},{"id":6,"name":"3d Animation","done":false,"visible":false,"deadline":""},{"id":7,"name":"Revisi","done":false,"visible":false,"deadline":""}]},{"id":1700000003,"projectName":"Kafe Botanic Garden BSD","address":"Jakarta","platform":"Freelance","clientName":"Putri Handayani","clientType":"Owner","area":"85","priceRp":"12.000.000","priceUSD":"","style":"Industrial Botanic","hours":"60","startDate":"2024-03-01","endDate":"2024-04-30","status":"Completed","jobType":"Interior Design + Gamker","design":"Restaurant","jobPerHour":"","invitation":false,"team":false,"hourlyJob":false,"fee":[],"paymentStatus":[{"name":"DP 50%","lunas":true},{"name":"Pelunasan","lunas":true}],"payment":[],"notes":"Konsep hijau dan kayu.","grossPrice":"13.500.000","tasks":[{"id":0,"name":"Layout Furni & Mood Board","done":true,"visible":true,"deadline":""},{"id":1,"name":"Revisi","done":true,"visible":true,"deadline":""},{"id":2,"name":"3d Model & Render","done":true,"visible":true,"deadline":""},{"id":3,"name":"Revisi","done":false,"visible":false,"deadline":""},{"id":4,"name":"Gambar","done":true,"visible":true,"deadline":""},{"id":5,"name":"Revisi","done":true,"visible":true,"deadline":""},{"id":6,"name":"3d Animation","done":false,"visible":false,"deadline":""},{"id":7,"name":"Revisi","done":false,"visible":false,"deadline":""}]},{"id":1700000004,"projectName":"Office Startup Tech Jaksel","address":"Indonesia","platform":"Fiverr","clientName":"Ahmad Kurniawan","clientType":"Contractor","area":"200","priceRp":"28.000.000","priceUSD":"","style":"Modern Minimalist","hours":"120","startDate":"2024-04-10","endDate":"2024-07-15","status":"Completed","jobType":"Gambar Kerja (AutoCAD)","design":"Office","jobPerHour":"","invitation":false,"team":true,"hourlyJob":false,"fee":[{"name":"Anne Rp 3.000.000","lunas":true},{"name":"Budi Rp 2.000.000","lunas":false}],"paymentStatus":[{"name":"DP 40%","lunas":true},{"name":"Progress","lunas":true},{"name":"Pelunasan","lunas":true}],"payment":[],"notes":"","grossPrice":"30.000.000","tasks":[{"id":0,"name":"Layout Furni & Mood Board","done":true,"visible":false,"deadline":""},{"id":1,"name":"Revisi","done":false,"visible":false,"deadline":""},{"id":2,"name":"3d Model & Render","done":false,"visible":false,"deadline":""},{"id":3,"name":"Revisi","done":false,"visible":false,"deadline":""},{"id":4,"name":"Gambar","done":true,"visible":true,"deadline":""},{"id":5,"name":"Revisi","done":true,"visible":true,"deadline":""},{"id":6,"name":"3d Animation","done":false,"visible":false,"deadline":""},{"id":7,"name":"Revisi","done":false,"visible":false,"deadline":""}]},{"id":1700000005,"projectName":"Penthouse SCBD High-End","address":"United Arab Emirates","platform":"Upwork","clientName":"Mohammed Al-Rashid","clientType":"Owner","area":"180","priceRp":"45.000.000","priceUSD":"3000","style":"Contemporary Luxury","hours":"200","startDate":"2024-05-15","endDate":"2024-09-30","status":"Completed","jobType":"Interior Design","design":"Residential","jobPerHour":"","invitation":true,"team":false,"hourlyJob":false,"fee":[],"paymentStatus":[{"name":"DP 50%","lunas":true},{"name":"Milestone 2","lunas":true},{"name":"Pelunasan","lunas":true}],"payment":[],"notes":"Full luxury materials.","grossPrice":"50.000.000","tasks":[{"id":0,"name":"Layout Furni & Mood Board","done":true,"visible":true,"deadline":""},{"id":1,"name":"Revisi","done":true,"visible":true,"deadline":""},{"id":2,"name":"3d Model & Render","done":true,"visible":true,"deadline":""},{"id":3,"name":"Revisi","done":true,"visible":true,"deadline":""},{"id":4,"name":"Gambar","done":true,"visible":true,"deadline":""},{"id":5,"name":"Revisi","done":true,"visible":true,"deadline":""},{"id":6,"name":"3d Animation","done":false,"visible":false,"deadline":""},{"id":7,"name":"Revisi","done":false,"visible":false,"deadline":""}]},{"id":1700000006,"projectName":"Resto Japanese Fusion Surabaya","address":"Indonesia","platform":"Freelance","clientName":"Dewi Santoso","clientType":"Owner","area":"95","priceRp":"14.000.000","priceUSD":"","style":"Japanese Wabi-sabi","hours":"70","startDate":"2024-07-01","endDate":"2024-08-31","status":"Completed","jobType":"3D Modelling","design":"Restaurant","jobPerHour":"","invitation":false,"team":false,"hourlyJob":false,"fee":[],"paymentStatus":[{"name":"DP 50%","lunas":true},{"name":"Pelunasan","lunas":true}],"payment":[],"notes":"","grossPrice":"15.000.000","tasks":[{"id":0,"name":"Layout Furni & Mood Board","done":true,"visible":true,"deadline":""},{"id":1,"name":"Revisi","done":true,"visible":true,"deadline":""},{"id":2,"name":"3d Model & Render","done":true,"visible":true,"deadline":""},{"id":3,"name":"Revisi","done":false,"visible":false,"deadline":""},{"id":4,"name":"Gambar","done":false,"visible":false,"deadline":""},{"id":5,"name":"Revisi","done":false,"visible":false,"deadline":""},{"id":6,"name":"3d Animation","done":false,"visible":false,"deadline":""},{"id":7,"name":"Revisi","done":false,"visible":false,"deadline":""}]},{"id":1700000007,"projectName":"Rumah Minimalis Bandung","address":"United States","platform":"Upwork","clientName":"Kevin Anderson","clientType":"Consultant","area":"140","priceRp":"22.000.000","priceUSD":"1450","style":"Scandinavian","hours":"100","startDate":"2024-08-05","endDate":"2024-11-20","status":"Completed","jobType":"Interior Design","design":"Residential","jobPerHour":"","invitation":true,"team":true,"hourlyJob":false,"fee":[{"name":"Citra Rp 4.500.000","lunas":true}],"paymentStatus":[{"name":"DP 50%","lunas":true},{"name":"Pelunasan","lunas":false}],"payment":[],"notes":"Ada pelunasan belum lunas.","grossPrice":"24.000.000","tasks":[{"id":0,"name":"Layout Furni & Mood Board","done":true,"visible":true,"deadline":""},{"id":1,"name":"Revisi","done":true,"visible":true,"deadline":""},{"id":2,"name":"3d Model & Render","done":true,"visible":true,"deadline":""},{"id":3,"name":"Revisi","done":true,"visible":true,"deadline":""},{"id":4,"name":"Gambar","done":false,"visible":false,"deadline":""},{"id":5,"name":"Revisi","done":false,"visible":false,"deadline":""},{"id":6,"name":"3d Animation","done":false,"visible":false,"deadline":""},{"id":7,"name":"Revisi","done":false,"visible":false,"deadline":""}]},{"id":1700000008,"projectName":"Showroom Mobil BSD City","address":"Indonesia","platform":"Freelance","clientName":"PT Sentosa Mobilindo","clientType":"Developer","area":"300","priceRp":"38.000.000","priceUSD":"","style":"Modern Commercial","hours":"160","startDate":"2024-09-10","endDate":"2025-01-15","status":"Completed","jobType":"3D Modelling + Gamker","design":"Store","jobPerHour":"","invitation":false,"team":false,"hourlyJob":false,"fee":[],"paymentStatus":[{"name":"DP 30%","lunas":true},{"name":"Progress 40%","lunas":true},{"name":"Pelunasan","lunas":true}],"payment":[],"notes":"","grossPrice":"42.000.000","tasks":[{"id":0,"name":"Layout Furni & Mood Board","done":true,"visible":true,"deadline":""},{"id":1,"name":"Revisi","done":true,"visible":true,"deadline":""},{"id":2,"name":"3d Model & Render","done":true,"visible":true,"deadline":""},{"id":3,"name":"Revisi","done":true,"visible":true,"deadline":""},{"id":4,"name":"Gambar","done":true,"visible":true,"deadline":""},{"id":5,"name":"Revisi","done":true,"visible":true,"deadline":""},{"id":6,"name":"3d Animation","done":false,"visible":false,"deadline":""},{"id":7,"name":"Revisi","done":false,"visible":false,"deadline":""}]},{"id":1700000009,"projectName":"Bar & Lounge Seminyak","address":"Australia","platform":"Upwork","clientName":"David Chen","clientType":"Developer","area":"110","priceRp":"19.500.000","priceUSD":"1300","style":"Bohemian Tropical","hours":"90","startDate":"2025-01-20","endDate":"","status":"Ongoing","jobType":"Interior Design","design":"Bar","jobPerHour":"","invitation":true,"team":false,"hourlyJob":false,"fee":[],"paymentStatus":[{"name":"DP 50%","lunas":true},{"name":"Pelunasan","lunas":false}],"payment":[],"notes":"Masih progress render final.","grossPrice":"22.000.000","tasks":[{"id":0,"name":"Layout Furni & Mood Board","done":true,"visible":true,"deadline":"2025-02-05"},{"id":1,"name":"Revisi","done":true,"visible":true,"deadline":""},{"id":2,"name":"3d Model & Render","done":false,"visible":true,"deadline":"2025-04-01"},{"id":3,"name":"Revisi","done":false,"visible":true,"deadline":""},{"id":4,"name":"Gambar","done":false,"visible":false,"deadline":""},{"id":5,"name":"Revisi","done":false,"visible":false,"deadline":""},{"id":6,"name":"3d Animation","done":false,"visible":false,"deadline":""},{"id":7,"name":"Revisi","done":false,"visible":false,"deadline":""}]},{"id":1700000010,"projectName":"Klinik Estetik Menteng","address":"Indonesia","platform":"Freelance","clientName":"dr. Nadia Permata","clientType":"Owner","area":"75","priceRp":"10.500.000","priceUSD":"","style":"Clean Medical","hours":"55","startDate":"2025-02-10","endDate":"","status":"Ongoing","jobType":"Interior Design + Gamker","design":"Office","jobPerHour":"","invitation":false,"team":false,"hourlyJob":false,"fee":[],"paymentStatus":[{"name":"DP 50%","lunas":true},{"name":"Pelunasan","lunas":false}],"payment":[],"notes":"","grossPrice":"12.000.000","tasks":[{"id":0,"name":"Layout Furni & Mood Board","done":true,"visible":true,"deadline":"2025-02-25"},{"id":1,"name":"Revisi","done":false,"visible":true,"deadline":""},{"id":2,"name":"3d Model & Render","done":false,"visible":true,"deadline":"2025-03-15"},{"id":3,"name":"Revisi","done":false,"visible":false,"deadline":""},{"id":4,"name":"Gambar","done":false,"visible":true,"deadline":"2025-04-10"},{"id":5,"name":"Revisi","done":false,"visible":false,"deadline":""},{"id":6,"name":"3d Animation","done":false,"visible":false,"deadline":""},{"id":7,"name":"Revisi","done":false,"visible":false,"deadline":""}]}];
const seedExpenses = [{"id":2700000001,"date":"2024-01-05","desc":"Adobe Creative Cloud","category":"Software","amount":"660.000","notes":"Annual plan"},{"id":2700000002,"date":"2024-02-10","desc":"Sketchup Pro License","category":"Software","amount":"1.200.000","notes":""},{"id":2700000003,"date":"2024-03-15","desc":"Mouse & Keyboard ergonomis","category":"Tools","amount":"850.000","notes":"Logitech MX"},{"id":2700000004,"date":"2024-05-20","desc":"Fee asisten render","category":"Fee Tim","amount":"2.000.000","notes":"Proyek Villa Bali"},{"id":2700000005,"date":"2024-07-01","desc":"V-Ray renderer license","category":"Software","amount":"1.500.000","notes":""},{"id":2700000006,"date":"2024-08-05","desc":"Hard disk eksternal 4TB","category":"Tools","amount":"1.100.000","notes":"Backup proyek"},{"id":2700000007,"date":"2024-09-20","desc":"Fee asisten gambar","category":"Fee Tim","amount":"1.800.000","notes":"Proyek Showroom BSD"},{"id":2700000008,"date":"2024-11-01","desc":"Instagram Ads","category":"Marketing","amount":"500.000","notes":"Boost portfolio"},{"id":2700000009,"date":"2025-01-10","desc":"Upgrade RAM 32GB","category":"Tools","amount":"1.350.000","notes":""},{"id":2700000010,"date":"2025-02-05","desc":"Domain & hosting portfolio","category":"Infra","amount":"300.000","notes":"Renewal tahunan"}];
const seedClientMeta = {};
const seedExpenseCats = null;
const seedAccent = "";
const seedResources = null;
const seedTarget = null;
const seedAreaRanges = null;
const seedDurasiRanges = null;
const seedRates = null;

function emptyProject() {
  return { id:Date.now(), projectName:"", address:"", platform:"Upwork", clientName:"", clientType:"Owner", area:"", priceRp:"", priceUSD:"", style:"", hours:"", startDate:"", endDate:"", status:"Ongoing", jobType:"3D Modelling", design:"Residential", jobPerHour:"", invitation:false, team:false, hourlyJob:false, fee:[], paymentStatus:[], payment:[], notes:"", grossPrice:"", tasks:defaultTasks.map((t,i)=>({id:i,name:t,done:false,visible:false,deadline:""})) };
}

function formatRp(val) {
  if (!val) return "";
  return val.toString().replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,".");
}

function normalizeFeeArr(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.map(f => typeof f==="object" ? f : {name:f,lunas:false});
}

function parseNominal(str) {
  // Normalize: remove spaces, lowercase
  let s = str.replace(/\s/g,"").toLowerCase();
  // Strip "rp" prefix if any
  s = s.replace(/^rp\\.?/,"");
  // Handle multipliers: jt/juta, rb/ribu, m/miliar
  let mul = 1;
  if (/jt$|juta$/.test(s)) { mul=1000000; s=s.replace(/jt$|juta$/,""); }
  else if (/rb$|ribu$/.test(s)) { mul=1000; s=s.replace(/rb$|ribu$/,""); }
  else if (/m$|miliar$/.test(s)) { mul=1000000000; s=s.replace(/m$|miliar$/,""); }
  // Remove thousand separators (dots used as separator)
  s = s.replace(/\./g,"").replace(/,/g,".");
  const num = parseFloat(s);
  if (isNaN(num)) return null;
  return Math.round(num * mul);
}

function formatNominal(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");
}

function projectNum(proj, allProjects) {
  const year = (proj.startDate||"").slice(0,4);
  if (!year) return String(proj.id);
  const yy = year.slice(2);
  const sameYear = [...allProjects]
    .filter(p=>(p.startDate||"").startsWith(year))
    .sort((a,b)=>(a.startDate||"").localeCompare(b.startDate||"")||a.id-b.id);
  const idx = sameYear.findIndex(p=>p.id===proj.id);
  return `${yy}.${idx+1}`;
}

async function formatFeeWithAI(input) {
  // Parse "Nama [Rp] nominal[unit]" locally
  // Strategy: last token that looks like a number is the nominal, rest is name
  const parts = input.trim().split(/\s+/);
  for (let i = parts.length - 1; i >= 1; i--) {
    const nominalStr = parts.slice(i).join(" ");
    const n = parseNominal(nominalStr);
    if (n !== null) {
      const name = parts.slice(0, i).join(" ");
      return `${name} Rp ${formatNominal(n)}`;
    }
  }
  return input;
}

async function formatRpWithAI(input) {
  const n = parseNominal(input.trim());
  if (n !== null) return formatNominal(n);
  return input;
}

const dropStyle = {border:"0.5px solid var(--color-border-secondary)",borderRadius:6,padding:"6px 10px",fontSize:13,cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",background:"var(--color-background-primary)"};
const menuBox = {position:"absolute",top:"100%",left:0,right:0,zIndex:999,background:"#fff",border:"1px solid #ddd",borderRadius:8,marginTop:4,boxShadow:"0 4px 20px rgba(0,0,0,0.15)",overflow:"hidden"};

function useOutsideClose(open, cb) {
  const ref = useRef(null);
  useEffect(()=>{
    if (!open) return;
    const h = e => { if(ref.current&&!ref.current.contains(e.target)) cb(); };
    document.addEventListener("mousedown",h);
    return ()=>document.removeEventListener("mousedown",h);
  },[open]);
  return ref;
}

function StatusBadge({status}) {
  const c = STATUS_CFG[status]||STATUS_CFG["Ongoing"];
  return <span style={{display:"inline-flex",alignItems:"center",gap:5,background:c.bg,color:c.text,borderRadius:20,padding:"3px 10px",fontSize:11,fontWeight:500}}><span style={{width:6,height:6,borderRadius:"50%",background:c.dot,display:"inline-block"}}/>{status}</span>;
}

function PlatformIcon({platform,size=14}) {
  if (platform==="Upwork") return <svg width={size} height={size} viewBox="0 0 24 24" fill="#14a800"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703 0 1.489-1.211 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/></svg>;
  if (platform==="Fiverr") return <img src="data:image/png;base64,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" width={size} height={size} style={{objectFit:"contain",display:"inline-block"}} alt="Fiverr"/>;
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>;
}

function PlatformBadge({platform}) {
  return <span style={{background:"var(--color-background-secondary)",borderRadius:6,padding:"3px 6px",display:"inline-flex",alignItems:"center"}}><PlatformIcon platform={platform} size={13}/></span>;
}

function Chip({label,value}) {
  if (!value) return null;
  return <div style={{display:"flex",flexDirection:"column",gap:2}}><span style={{fontSize:10,color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.05em",fontWeight:500}}>{label}</span><span style={{fontSize:13,color:"var(--color-text-primary)"}}>{value}</span></div>;
}

function Divider() { return <div style={{height:"0.5px",background:"var(--color-border-tertiary)",margin:"12px 0"}}/>; }

function CheckBox({done}) {
  return <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:16,height:16,border:`1.5px solid ${done?"#22c55e":"var(--color-border-secondary)"}`,borderRadius:4,background:done?"#22c55e":"transparent",flexShrink:0}}>{done&&<svg viewBox="0 0 12 12" width="9" height="9"><polyline points="1.5,6 4.5,9 10.5,3" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}</span>;
}

function ConfirmModal({message,onConfirm,onCancel}) {
  return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={onCancel}><div onClick={e=>e.stopPropagation()} style={{background:"#fff",borderRadius:14,padding:"24px 28px",minWidth:280,maxWidth:360,boxShadow:"0 8px 32px rgba(0,0,0,0.18)"}}><div style={{fontWeight:500,fontSize:15,marginBottom:8,color:"var(--color-text-primary)"}}>Konfirmasi</div><div style={{fontSize:13,color:"var(--color-text-secondary)",marginBottom:20}}>{message}</div><div style={{display:"flex",gap:8,justifyContent:"flex-end"}}><button onClick={onCancel} style={{fontSize:13,padding:"6px 16px"}}>Batal</button><button onClick={onConfirm} style={{fontSize:13,padding:"6px 16px",background:"#fef2f2",color:"#991b1b",borderColor:"#fca5a5",borderRadius:6}}>Hapus</button></div></div></div>;
}

function Field({label,children}) {
  return <div style={{marginBottom:10}}><label style={{fontSize:12,color:"var(--color-text-secondary)",display:"block",marginBottom:3}}>{label}</label>{children}</div>;
}

function RpInput({label,value,onChange}) {
  const [loading,setLoading] = useState(false);
  const inp = {width:"100%",boxSizing:"border-box"};
  const handle = async()=>{
    if (!value.trim()) return;
    const clean = value.replace(/\./g,"");
    if (/^\d+$/.test(clean)) { onChange(formatRp(clean)); return; }
    setLoading(true); const f=await formatRpWithAI(value.trim()); setLoading(false); onChange(f);
  };
  return <Field label={loading?`${label} (memformat...)`:label}><input style={{...inp,opacity:loading?0.6:1}} value={value} onChange={e=>onChange(e.target.value)} onBlur={handle} onKeyDown={e=>{if(e.key==="Enter"){e.preventDefault();handle();}}} placeholder="Contoh: 5jt, 2.5jt, 500rb"/></Field>;
}

function EditPencil({onClick}) {
  return <button onClick={onClick} style={{padding:"4px 6px",border:"none",background:"transparent",cursor:"pointer",color:"#888"}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>;
}

function DeleteX({onClick}) {
  return <button onClick={onClick} style={{padding:"4px 6px",border:"none",background:"transparent",cursor:"pointer",color:"#f87171"}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>;
}

function InlineEdit({name,onRename,onClose}) {
  const [val,setVal] = useState(name);
  const commit = ()=>{ if(val.trim()) onRename(val.trim()); onClose(); };
  return <div onClick={e=>e.stopPropagation()} style={{display:"flex",alignItems:"center",gap:4}}><input autoFocus value={val} onChange={e=>setVal(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")commit();if(e.key==="Escape")onClose();}} style={{width:80,fontSize:12,border:"1px solid #93c5fd",borderRadius:4,padding:"2px 4px",outline:"none"}}/><button onClick={commit} style={{fontSize:10,padding:"2px 6px",color:"#1d4ed8",border:"1px solid #93c5fd",borderRadius:4,background:"#eff6ff"}}>OK</button></div>;
}

function EditableOption({label,selected,onSelect,onDelete,onRename}) {
  const [editing,setEditing] = useState(false);
  const [val,setVal] = useState(label);
  const commit = ()=>{ if(val.trim()) onRename(val.trim()); setEditing(false); };
  if (editing) return <div style={{display:"flex",alignItems:"center",gap:6,padding:"4px 8px",background:"#f0f7ff"}}><input autoFocus value={val} onChange={e=>setVal(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")commit();if(e.key==="Escape")setEditing(false);}} style={{flex:1,fontSize:13,border:"1px solid #93c5fd",borderRadius:4,padding:"3px 6px",outline:"none"}}/><button onClick={commit} style={{fontSize:11,padding:"2px 8px",color:"#1d4ed8",border:"1px solid #93c5fd",borderRadius:4,background:"#eff6ff"}}>OK</button><button onClick={()=>setEditing(false)} style={{fontSize:11,padding:"2px 6px",color:"#888",border:"none",background:"transparent"}}>✕</button></div>;
  return <div style={{display:"flex",alignItems:"center",padding:"0 4px 0 12px",background:selected?"#eff6ff":"#fff"}} onMouseEnter={e=>{if(!selected)e.currentTarget.style.background="#f5f5f5";}} onMouseLeave={e=>{if(!selected)e.currentTarget.style.background=selected?"#eff6ff":"#fff";}}><span onClick={onSelect} style={{flex:1,fontSize:13,color:selected?"#1d4ed8":"#222",padding:"7px 0",cursor:"pointer"}}>{label}</span><EditPencil onClick={e=>{e.stopPropagation();setEditing(true);setVal(label);}}/><DeleteX onClick={e=>{e.stopPropagation();onDelete();}}/></div>;
}

function CustomSelect({id,value,onChange,options,openId,setOpenId}) {
  const open = openId===id;
  const ref = useOutsideClose(open,()=>setOpenId(null));
  return <div ref={ref} style={{position:"relative"}}><div onClick={()=>setOpenId(open?null:id)} style={dropStyle}><span>{value}</span><span style={{fontSize:10,color:"var(--color-text-secondary)"}}>▾</span></div>{open&&<div style={menuBox}>{options.map(o=><div key={o} onClick={()=>{onChange(o);setOpenId(null);}} style={{padding:"7px 12px",fontSize:13,cursor:"pointer",background:value===o?"#eff6ff":"#fff",color:value===o?"#1d4ed8":"#222"}} onMouseEnter={e=>{if(value!==o)e.currentTarget.style.background="#f5f5f5";}} onMouseLeave={e=>{if(value!==o)e.currentTarget.style.background="#fff";}}>{o}</div>)}</div>}</div>;
}

function SearchableSelect({id,value,onChange,openId,setOpenId,storageKey,defaultOptions,placeholder}) {
  const [options,setOptions] = useState(()=>{try{const s=window[storageKey];return s?JSON.parse(s):[...defaultOptions];}catch(e){return [...defaultOptions];}});
  const [search,setSearch] = useState("");
  const open = openId===id;
  const ref = useOutsideClose(open,()=>setOpenId(null));
  useEffect(()=>{window[storageKey]=JSON.stringify(options);},[options]);
  const filtered = [...options].sort((a,b)=>a.localeCompare(b)).filter(o=>o.toLowerCase().includes(search.toLowerCase()));
  const canAdd = search.trim()!==""&&!options.some(o=>o.toLowerCase()===search.trim().toLowerCase());
  const select = val=>{onChange(val);setOpenId(null);setSearch("");};
  const addNew = ()=>{const v=search.trim();setOptions(prev=>[...prev,v]);select(v);};
  return <div ref={ref} style={{position:"relative"}}><div onClick={()=>setOpenId(open?null:id)} style={dropStyle}><span style={{color:value?"inherit":"#aaa"}}>{value||placeholder}</span><span style={{fontSize:10,color:"var(--color-text-secondary)"}}>▾</span></div>{open&&<div style={menuBox}><div style={{padding:"6px 8px",borderBottom:"1px solid #eee",background:"#fff"}}><input autoFocus value={search} onChange={e=>setSearch(e.target.value)} placeholder="Cari atau tambah baru..." style={{width:"100%",boxSizing:"border-box",fontSize:12,border:"none",outline:"none",background:"transparent",color:"#222"}}/></div><div style={{maxHeight:180,overflowY:"auto"}}>{filtered.map(o=><EditableOption key={o} label={o} selected={value===o} onSelect={()=>select(o)} onDelete={()=>{setOptions(prev=>prev.filter(x=>x!==o));if(value===o)onChange("");}} onRename={n=>{setOptions(prev=>prev.map(x=>x===o?n:x));if(value===o)onChange(n);}}/>)}{canAdd&&<div onClick={addNew} style={{padding:"7px 12px",fontSize:13,cursor:"pointer",color:"#1d4ed8",borderTop:"1px solid #eee",display:"flex",alignItems:"center",gap:6}}><span style={{fontSize:16}}>+</span> Tambah "{search.trim()}"</div>}{filtered.length===0&&!canAdd&&<div style={{padding:"10px 12px",fontSize:12,color:"#888"}}>Tidak ditemukan</div>}</div></div>}</div>;
}

function FeeAddInput({onAdd}) {
  const [val,setVal] = useState(""); const [loading,setLoading] = useState(false); const [status,setStatus] = useState("");
  const handle = async()=>{if(!val.trim())return;setLoading(true);setStatus("Memformat...");const f=await formatFeeWithAI(val.trim());setStatus("");setLoading(false);onAdd(f);setVal("");};
  return <div style={{borderTop:"1px solid #eee",background:"#fff"}}><div style={{display:"flex",gap:6,padding:"6px 8px"}}><input value={val} onChange={e=>setVal(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")handle();}} placeholder="Contoh: Anne 5jt" style={{flex:1,fontSize:12,border:"1px solid #ddd",borderRadius:4,padding:"4px 8px",outline:"none"}}/><button onClick={handle} disabled={loading} style={{fontSize:12,padding:"4px 10px",color:"#1d4ed8",border:"1px solid #93c5fd",borderRadius:4,background:"#eff6ff",whiteSpace:"nowrap",cursor:"pointer",opacity:loading?0.6:1}}>{loading?"...":"+ Tambah"}</button></div>{status&&<div style={{fontSize:11,color:"#888",padding:"0 8px 6px"}}>{status}</div>}</div>;
}

function FeeSelect({id,value,onChange,openId,setOpenId}) {
  const items = normalizeFeeArr(value);
  const selectedNames = items.map(f=>f.name);
  const options = items.map(f=>f.name);
  const open = openId===id;
  const ref = useOutsideClose(open,()=>setOpenId(null));
  const [editingName, setEditingName] = useState(null);
  const toggleLunas = name=>onChange(items.map(f=>f.name===name?{...f,lunas:!f.lunas}:f));
  const addNew = fmt=>{if(!selectedNames.includes(fmt))onChange([...items,{name:fmt,lunas:false}]);};
  const removeOption = name=>{onChange(items.filter(f=>f.name!==name));};
  const renameOption = (oldName,newName)=>{onChange(items.map(f=>f.name===oldName?{...f,name:newName}:f));};
  return <div ref={ref} style={{position:"relative"}}><div onClick={()=>setOpenId(open?null:id)} style={{...dropStyle,flexWrap:"wrap",gap:4,minHeight:36}}>{items.length===0?<span style={{color:"#aaa",fontSize:13}}>Pilih fee...</span>:items.map(f=><span key={f.name} style={{background:f.lunas?"#f0fdf4":"#eff6ff",color:f.lunas?"#166534":"#1d4ed8",borderRadius:12,padding:"2px 8px",fontSize:12,display:"inline-flex",alignItems:"center",gap:4,textDecoration:f.lunas?"line-through":"none"}}>{f.name}<span onClick={e=>{e.stopPropagation();removeOption(f.name);}} style={{cursor:"pointer",fontSize:14,lineHeight:1}}>×</span></span>)}<span style={{marginLeft:"auto",fontSize:10,color:"var(--color-text-secondary)",flexShrink:0}}>▾</span></div>{open&&<div style={menuBox}><div style={{maxHeight:180,overflowY:"auto"}}>{options.length===0&&<div style={{padding:"10px 12px",fontSize:12,color:"#888"}}>Belum ada fee. Tambah lewat form di bawah.</div>}{options.map(o=>{const isLunas=items.find(f=>f.name===o)?.lunas||false;return <div key={o} style={{display:"flex",alignItems:"center",padding:"0 8px 0 12px",background:"#fff"}} onMouseEnter={e=>e.currentTarget.style.background="#f5f5f5"} onMouseLeave={e=>e.currentTarget.style.background="#fff"}>{editingName===o?<InlineEdit name={o} onRename={n=>renameOption(o,n)} onClose={()=>setEditingName(null)}/>:<><span style={{flex:1,fontSize:13,color:"#222",padding:"7px 0"}}>{o}</span><div onClick={e=>e.stopPropagation()} style={{display:"flex",alignItems:"center",gap:4,marginRight:4}}><input type="checkbox" id={`lunas-${o}`} checked={isLunas} onChange={()=>toggleLunas(o)} style={{cursor:"pointer"}}/><label htmlFor={`lunas-${o}`} style={{fontSize:11,color:"#166534",cursor:"pointer",whiteSpace:"nowrap"}}>Lunas</label></div><EditPencil onClick={e=>{e.stopPropagation();setEditingName(o);}}/><DeleteX onClick={e=>{e.stopPropagation();removeOption(o);}}/></>}</div>;})}</div><FeeAddInput onAdd={addNew}/></div>}</div>;
}

function MilestoneSelect({id,value,onChange,openId,setOpenId,storageKey}) {
  const items = normalizeFeeArr(value);
  const selectedNames = items.map(f=>f.name);
  const [options,setOptions] = useState(()=>{try{const s=window[storageKey];return s?JSON.parse(s):["Milestone 1","Milestone 2","Milestone 3"];}catch(e){return ["Milestone 1","Milestone 2","Milestone 3"];}});
  const [editingName,setEditingName] = useState(null);
  const open = openId===id;
  const ref = useOutsideClose(open,()=>setOpenId(null));
  useEffect(()=>{window[storageKey]=JSON.stringify(options);},[options]);
  const toggleItem = name=>{if(selectedNames.includes(name))onChange(items.filter(f=>f.name!==name));else onChange([...items,{name,lunas:false}]);};
  const toggleLunas = name=>onChange(items.map(f=>f.name===name?{...f,lunas:!f.lunas}:f));
  const addNext = ()=>{const next=`Milestone ${options.length+1}`;setOptions(prev=>[...prev,next]);};
  const removeOption = name=>{setOptions(prev=>prev.filter(x=>x!==name));onChange(items.filter(f=>f.name!==name));};
  const renameOption = (old,nw)=>{setOptions(prev=>prev.map(x=>x===old?nw:x));onChange(items.map(f=>f.name===old?{...f,name:nw}:f));};
  return <div ref={ref} style={{position:"relative"}}><div onClick={()=>setOpenId(open?null:id)} style={{...dropStyle,flexWrap:"wrap",gap:4,minHeight:36}}>{items.length===0?<span style={{color:"#aaa",fontSize:13}}>Pilih milestone...</span>:items.map(f=><span key={f.name} style={{background:f.lunas?"#f0fdf4":"#eff6ff",color:f.lunas?"#166534":"#1d4ed8",borderRadius:12,padding:"2px 8px",fontSize:12,display:"inline-flex",alignItems:"center",gap:4,textDecoration:f.lunas?"line-through":"none"}}>{f.name}<span onClick={e=>{e.stopPropagation();toggleItem(f.name);}} style={{cursor:"pointer",fontSize:14,lineHeight:1}}>×</span></span>)}<span style={{marginLeft:"auto",fontSize:10,color:"var(--color-text-secondary)",flexShrink:0}}>▾</span></div>{open&&<div style={menuBox}><div style={{maxHeight:200,overflowY:"auto"}}>{options.map(o=>{const checked=selectedNames.includes(o);const isLunas=items.find(f=>f.name===o)?.lunas||false;return <div key={o} style={{display:"flex",alignItems:"center",padding:"0 8px 0 12px",background:checked?"#eff6ff":"#fff"}} onMouseEnter={e=>{if(!checked)e.currentTarget.style.background="#f5f5f5";}} onMouseLeave={e=>{if(!checked)e.currentTarget.style.background="#fff";}}>{editingName===o?<InlineEdit name={o} onRename={n=>renameOption(o,n)} onClose={()=>setEditingName(null)}/>:<><span onClick={()=>toggleItem(o)} style={{flex:1,fontSize:13,color:checked?"#1d4ed8":"#222",padding:"7px 0",cursor:"pointer",display:"flex",alignItems:"center",gap:8}}><span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:15,height:15,border:`1.5px solid ${checked?"#1d4ed8":"#ccc"}`,borderRadius:3,background:checked?"#1d4ed8":"#fff",flexShrink:0}}>{checked&&<svg viewBox="0 0 12 12" width="9" height="9"><polyline points="1.5,6 4.5,9 10.5,3" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}</span>{o}</span>{checked&&<div onClick={e=>e.stopPropagation()} style={{display:"flex",alignItems:"center",gap:4,marginRight:4}}><input type="checkbox" id={`ms-${id}-${o}`} checked={isLunas} onChange={()=>toggleLunas(o)} style={{cursor:"pointer"}}/><label htmlFor={`ms-${id}-${o}`} style={{fontSize:11,color:"#166534",cursor:"pointer",whiteSpace:"nowrap"}}>Lunas</label></div>}<EditPencil onClick={e=>{e.stopPropagation();setEditingName(o);}}/><DeleteX onClick={e=>{e.stopPropagation();removeOption(o);}}/></>}</div>;})}</div><div style={{borderTop:"1px solid #eee",padding:"6px 8px"}}><button onClick={addNext} style={{fontSize:12,padding:"4px 12px",color:"#1d4ed8",border:"1px solid #93c5fd",borderRadius:6,background:"#eff6ff",cursor:"pointer",width:"100%"}}>+ Tambah Milestone {options.length+1}</button></div></div>}</div>;
}

function AnalysisTable({columns,rows}) {
  const maxVal = Math.max(...rows.map(r=>r.count),0);
  return <div style={{border:"0.5px solid var(--color-border-tertiary)",borderRadius:12,overflow:"hidden",marginBottom:16}}><table style={{width:"100%",borderCollapse:"collapse"}}><thead><tr style={{background:"var(--color-background-secondary)"}}>{columns.map((c,i)=><th key={i} style={{padding:"10px 16px",fontSize:11,fontWeight:500,color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.05em",textAlign:i===0?"left":"center",borderBottom:"0.5px solid var(--color-border-tertiary)"}}>{c}</th>)}<th style={{padding:"10px 16px",borderBottom:"0.5px solid var(--color-border-tertiary)",width:60}}></th></tr></thead><tbody>{rows.map((row,i)=>{const isTop=row.count>0&&row.count===maxVal;return <tr key={i} style={{borderBottom:"0.5px solid var(--color-border-tertiary)",background:isTop?"#f0fdf4":"transparent"}} onMouseEnter={e=>{if(!isTop)e.currentTarget.style.background="var(--color-background-secondary)";}} onMouseLeave={e=>{e.currentTarget.style.background=isTop?"#f0fdf4":"transparent";}}><td style={{padding:"10px 16px",fontSize:13,color:isTop?"#166534":"var(--color-text-primary)",fontWeight:isTop?500:400}}>{row.label}</td><td style={{padding:"10px 16px",fontSize:13,color:isTop?"#166534":"var(--color-text-primary)",textAlign:"center",fontWeight:isTop?500:400}}>{row.count}{isTop&&<span style={{marginLeft:6,fontSize:10,background:"#22c55e",color:"#fff",borderRadius:10,padding:"1px 7px"}}>terbanyak</span>}</td><td style={{padding:"10px 16px",textAlign:"center"}}><button onClick={row.onDelete} style={{fontSize:11,padding:"2px 8px",color:"var(--color-text-danger)",borderColor:"var(--color-border-danger)",borderRadius:6}}>Hapus</button></td></tr>;})}</tbody></table></div>;
}

const DEFAULT_AREA_RANGES = [[1,50],[51,100],[101,150],[151,200],[201,250],[251,300]];
const DEFAULT_DURASI_RANGES = [[0,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12]];

function loadAreaRanges() { try { const s=window._areaRanges; if(s)return JSON.parse(s); } catch(e){} return seedAreaRanges ? [...seedAreaRanges] : [...DEFAULT_AREA_RANGES]; }
function saveAreaRanges(r) { window._areaRanges=JSON.stringify(r); }
function loadDurasiRanges() { try { const s=window._durasiRanges; if(s)return JSON.parse(s); } catch(e){} return seedDurasiRanges ? [...seedDurasiRanges] : [...DEFAULT_DURASI_RANGES]; }
function saveDurasiRanges(r) { window._durasiRanges=JSON.stringify(r); }
function loadUsdRates() { try { const s=window._usdRates; if(s)return JSON.parse(s); } catch(e){} return seedRates ? {...seedRates} : {}; }
function saveUsdRates(r) { window._usdRates=JSON.stringify(r); }

function AreaTab({projects}) {
  const STEP = 50;
  const autoAddMissingRanges = (existingRanges) => {
    const result = [...existingRanges];
    projects.forEach(p => {
      const a = parseFloat((p.area||"").replace(/[^0-9.]/g,""));
      if (isNaN(a) || a <= 0) return;
      const fits = result.some(([mn,mx]) => a >= mn && a <= mx);
      if (!fits) {
        const lo = Math.floor((a-1) / STEP) * STEP + 1;
        const hi = lo + STEP - 1;
        if (!result.some(([mn,mx]) => mn === lo && mx === hi)) result.push([lo, hi]);
      }
    });
    return result.sort((a,b) => a[0]-b[0]);
  };
  const [ranges,setRanges] = useState(()=>autoAddMissingRanges(loadAreaRanges()));
  const [adding,setAdding] = useState(false);
  const [newMin,setNewMin] = useState(""); const [newMax,setNewMax] = useState("");
  useEffect(()=>{ setRanges(prev=>autoAddMissingRanges(prev)); },[projects.map(p=>p.area).join(",")]);
  const updateRanges = r => { setRanges(r); saveAreaRanges(r); };
  const getCount=(mn,mx)=>projects.filter(p=>{const a=parseFloat((p.area||"").replace(/[^0-9.]/g,""));return !isNaN(a)&&a>=mn&&a<=mx;}).length;
  const addRange=()=>{const mn=parseInt(newMin),mx=parseInt(newMax);if(!isNaN(mn)&&!isNaN(mx)&&mn<mx){updateRanges([...ranges,[mn,mx]].sort((a,b)=>a[0]-b[0]));setNewMin("");setNewMax("");setAdding(false);}};
  return <div><AnalysisTable columns={["Area (m²)","Total Proyek"]} rows={ranges.map(([mn,mx],i)=>({label:`${mn} – ${mx}`,count:getCount(mn,mx),onDelete:()=>updateRanges(ranges.filter((_,j)=>j!==i))}))} />{adding?<div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}><span style={{fontSize:13,color:"var(--color-text-secondary)"}}>Min</span><input value={newMin} onChange={e=>setNewMin(e.target.value)} placeholder="301" style={{width:80,fontSize:13,padding:"5px 8px",border:"0.5px solid var(--color-border-secondary)",borderRadius:6}}/><span style={{fontSize:13,color:"var(--color-text-secondary)"}}>– Max</span><input value={newMax} onChange={e=>setNewMax(e.target.value)} placeholder="350" style={{width:80,fontSize:13,padding:"5px 8px",border:"0.5px solid var(--color-border-secondary)",borderRadius:6}} onKeyDown={e=>{if(e.key==="Enter")addRange();}}/><button onClick={addRange} style={{fontSize:13,padding:"5px 14px",background:"#111",color:"#fff",borderColor:"#111",borderRadius:6}}>Tambah</button><button onClick={()=>{setAdding(false);setNewMin("");setNewMax("");}} style={{fontSize:13,padding:"5px 14px",borderRadius:6}}>Batal</button></div>:<button onClick={()=>setAdding(true)} style={{fontSize:13,padding:"6px 16px"}}>+ Tambah Range Area</button>}</div>;
}

function DurasiTab({projects}) {
  const [ranges,setRanges] = useState(loadDurasiRanges);
  const [adding,setAdding] = useState(false); const [newMax,setNewMax] = useState("");
  const updateRanges = r => { setRanges(r); saveDurasiRanges(r); };
  const getDays=p=>{if(!p.startDate||!p.endDate)return null;const d=(new Date(p.endDate)-new Date(p.startDate))/(1000*60*60*24);return isNaN(d)?null:Math.round(d);};
  const getCount=(mnM,mxM)=>projects.filter(p=>{const d=getDays(p);if(d===null)return false;const months=Math.round(d/30);return months>=mnM&&months<=mxM;}).length;
  const label=([mnM,mxM])=>mnM===0?`≤ ${mxM} bulan`:mnM===mxM?`${mnM} bulan`:`${mnM} – ${mxM} bulan`;
  const addRange=()=>{const mx=parseInt(newMax);if(!isNaN(mx)&&mx>0){const last=ranges.length>0?ranges[ranges.length-1][1]:0;updateRanges([...ranges,[last+1,mx]]);setNewMax("");setAdding(false);}};
  return <div><AnalysisTable columns={["Durasi","Total Proyek"]} rows={ranges.map((r,i)=>({label:label(r),count:getCount(r[0],r[1]),onDelete:()=>updateRanges(ranges.filter((_,j)=>j!==i))}))} />{adding?<div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}><span style={{fontSize:13,color:"var(--color-text-secondary)"}}>Maks (bulan)</span><input value={newMax} onChange={e=>setNewMax(e.target.value)} placeholder="12" style={{width:90,fontSize:13,padding:"5px 8px",border:"0.5px solid var(--color-border-secondary)",borderRadius:6}} onKeyDown={e=>{if(e.key==="Enter")addRange();}}/><button onClick={addRange} style={{fontSize:13,padding:"5px 14px",background:"#111",color:"#fff",borderColor:"#111",borderRadius:6}}>Tambah</button><button onClick={()=>{setAdding(false);setNewMax("");}} style={{fontSize:13,padding:"5px 14px",borderRadius:6}}>Batal</button></div>:<button onClick={()=>setAdding(true)} style={{fontSize:13,padding:"6px 16px"}}>+ Tambah Range Durasi</button>}</div>;
}
function JumlahTab({projects}) {
  const upworkProjects = projects.filter(p=>p.platform==="Upwork");
  const totalUpwork = upworkProjects.length;
  const totalInvitation = upworkProjects.filter(p=>p.invitation).length;
  const totalNonInvitation = totalUpwork - totalInvitation;

  return <div>
    {/* Summary stats */}
    <div style={{display:"flex",gap:12,marginBottom:20,flexWrap:"wrap"}}>
      <div style={{flex:1,minWidth:120,background:"#f0fdf4",border:"1.5px solid #86efac",borderRadius:10,padding:"14px 18px"}}>
        <div style={{fontSize:11,color:"#166534",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:4}}>Total Proyek Upwork</div>
        <div style={{fontSize:28,fontWeight:700,color:"#15803d"}}>{totalUpwork}</div>
      </div>
      <div style={{flex:1,minWidth:120,background:"#eff6ff",border:"1.5px solid #93c5fd",borderRadius:10,padding:"14px 18px"}}>
        <div style={{fontSize:11,color:"#1d4ed8",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:4}}>Invitation</div>
        <div style={{fontSize:28,fontWeight:700,color:"#1d4ed8"}}>{totalInvitation}</div>
        <div style={{fontSize:11,color:"#3b82f6",marginTop:2}}>{totalUpwork>0?Math.round(totalInvitation/totalUpwork*100):0}% dari total</div>
      </div>
      <div style={{flex:1,minWidth:120,background:"#fff8ed",border:"1.5px solid #fcd34d",borderRadius:10,padding:"14px 18px"}}>
        <div style={{fontSize:11,color:"#b45309",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:4}}>Non-Invitation</div>
        <div style={{fontSize:28,fontWeight:700,color:"#b45309"}}>{totalNonInvitation}</div>
        <div style={{fontSize:11,color:"#d97706",marginTop:2}}>{totalUpwork>0?Math.round(totalNonInvitation/totalUpwork*100):0}% dari total</div>
      </div>
    </div>

    {/* Project list */}
    {upworkProjects.length===0
      ? <div style={{fontSize:13,color:"var(--color-text-secondary)",textAlign:"center",padding:"1rem 0"}}>Belum ada proyek Upwork.</div>
      : <div style={{border:"0.5px solid var(--color-border-tertiary)",borderRadius:10,overflow:"hidden"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
            <thead>
              <tr style={{background:"var(--color-background-secondary)",borderBottom:"0.5px solid var(--color-border-tertiary)"}}>
                <th style={{padding:"9px 12px",textAlign:"left",fontWeight:600,fontSize:11,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-text-secondary)"}}>Proyek</th>
                <th style={{padding:"9px 12px",textAlign:"left",fontWeight:600,fontSize:11,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-text-secondary)"}}>Client</th>
                <th style={{padding:"9px 12px",textAlign:"center",fontWeight:600,fontSize:11,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-text-secondary)"}}>Invitation</th>
                <th style={{padding:"9px 12px",textAlign:"left",fontWeight:600,fontSize:11,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-text-secondary)"}}>Status</th>
              </tr>
            </thead>
            <tbody>
              {[...upworkProjects].reverse().map((p,i)=>{
                const cfg = STATUS_CFG[p.status]||STATUS_CFG["Ongoing"];
                return <tr key={p.id} style={{borderBottom:"0.5px solid var(--color-border-tertiary)",background:i%2===0?"transparent":"var(--color-background-secondary)"}}>
                  <td style={{padding:"9px 12px",color:"var(--color-text-primary)",fontWeight:500}}>{p.projectName||"—"}</td>
                  <td style={{padding:"9px 12px",color:"var(--color-text-secondary)"}}>{p.clientName||"—"}</td>
                  <td style={{padding:"9px 12px",textAlign:"center"}}>
                    {p.invitation
                      ? <span style={{background:"#eff6ff",color:"#1d4ed8",borderRadius:20,padding:"2px 10px",fontSize:11,fontWeight:500}}>✓ Invitation</span>
                      : <span style={{color:"var(--color-text-secondary)",fontSize:11}}>—</span>}
                  </td>
                  <td style={{padding:"9px 12px"}}>
                    <span style={{background:cfg.bg,color:cfg.text,borderRadius:20,padding:"2px 10px",fontSize:11,fontWeight:500,display:"inline-flex",alignItems:"center",gap:4}}>
                      <span style={{width:5,height:5,borderRadius:"50%",background:cfg.dot,display:"inline-block"}}/>
                      {p.status}
                    </span>
                  </td>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
    }
  </div>;
}

const tabBtn = (active) => ({padding:"8px 16px",fontSize:13,cursor:"pointer",border:"none",background:"transparent",color:active?"var(--color-text-primary)":"var(--color-text-secondary)",fontWeight:active?600:400,borderBottom:active?"2px solid #111":"2px solid transparent",marginBottom:"-1px"});

const PLATFORM_COLORS = {Upwork:"#14a800",Fiverr:"#1dbf73",Freelance:"#ff6b35"};

function TeamTab({projects}) {
  const totalTeam = projects.filter(p=>p.team).length;
  const totalSolo = projects.length - totalTeam;
  const teamPct = projects.length>0 ? Math.round(totalTeam/projects.length*100) : 0;
  const soloPct = projects.length>0 ? Math.round(totalSolo/projects.length*100) : 0;
  const teamProjects = projects.filter(p=>p.team);
  return <div>
    <div style={{display:"flex",gap:10,marginBottom:20,flexWrap:"wrap"}}>
      <div style={{flex:1,minWidth:120,background:"#eff6ff",border:"1.5px solid #93c5fd",borderRadius:10,padding:"14px 18px"}}>
        <div style={{fontSize:11,color:"#1d4ed8",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:4}}>Team</div>
        <div style={{fontSize:28,fontWeight:700,color:"#1d4ed8",lineHeight:1}}>{totalTeam}</div>
        <div style={{fontSize:11,color:"#3b82f6",marginTop:4}}>{teamPct}% dari total proyek</div>
      </div>
      <div style={{flex:1,minWidth:120,background:"#f0fdf4",border:"1.5px solid #86efac",borderRadius:10,padding:"14px 18px"}}>
        <div style={{fontSize:11,color:"#166534",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:4}}>Solo</div>
        <div style={{fontSize:28,fontWeight:700,color:"#15803d",lineHeight:1}}>{totalSolo}</div>
        <div style={{fontSize:11,color:"#16a34a",marginTop:4}}>{soloPct}% dari total proyek</div>
      </div>
    </div>
    {teamProjects.length===0
      ? <div style={{fontSize:13,color:"var(--color-text-secondary)",textAlign:"center",padding:"1rem 0"}}>Belum ada proyek dengan mode Team.</div>
      : <div style={{border:"0.5px solid var(--color-border-tertiary)",borderRadius:10,overflow:"hidden"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
            <thead><tr style={{background:"var(--color-background-secondary)",borderBottom:"0.5px solid var(--color-border-tertiary)"}}>
              <th style={{padding:"9px 12px",textAlign:"left",fontWeight:600,fontSize:11,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-text-secondary)"}}>Proyek</th>
              <th style={{padding:"9px 12px",textAlign:"left",fontWeight:600,fontSize:11,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-text-secondary)"}}>Client</th>
              <th style={{padding:"9px 12px",textAlign:"left",fontWeight:600,fontSize:11,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-text-secondary)"}}>Platform</th>
              <th style={{padding:"9px 12px",textAlign:"left",fontWeight:600,fontSize:11,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-text-secondary)"}}>Fee Tim</th>
              <th style={{padding:"9px 12px",textAlign:"left",fontWeight:600,fontSize:11,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-text-secondary)"}}>Status</th>
            </tr></thead>
            <tbody>
              {[...teamProjects].reverse().map((p,i)=>{
                const cfg = STATUS_CFG[p.status]||STATUS_CFG["Ongoing"];
                const feeItems = normalizeFeeArr(p.fee);
                return <tr key={p.id} style={{borderBottom:"0.5px solid var(--color-border-tertiary)",background:i%2===0?"transparent":"var(--color-background-secondary)"}}>
                  <td style={{padding:"9px 12px",fontWeight:500,color:"var(--color-text-primary)"}}>{p.projectName||"—"}</td>
                  <td style={{padding:"9px 12px",color:"var(--color-text-secondary)"}}>{p.clientName||"—"}</td>
                  <td style={{padding:"9px 12px"}}><span style={{display:"inline-flex",alignItems:"center",gap:5}}><PlatformIcon platform={p.platform} size={13}/><span style={{fontSize:12,color:"var(--color-text-secondary)"}}>{p.platform}</span></span></td>
                  <td style={{padding:"9px 12px"}}>{feeItems.length>0?<div style={{display:"flex",flexDirection:"column",gap:3}}>{feeItems.map(f=><span key={f.name} style={{fontSize:12,color:f.lunas?"#16a34a":"var(--color-text-primary)",textDecoration:f.lunas?"line-through":"none"}}>{f.name}</span>)}</div>:<span style={{color:"var(--color-text-secondary)",fontSize:12}}>—</span>}</td>
                  <td style={{padding:"9px 12px"}}><span style={{background:cfg.bg,color:cfg.text,borderRadius:20,padding:"2px 10px",fontSize:11,fontWeight:500,display:"inline-flex",alignItems:"center",gap:4}}><span style={{width:5,height:5,borderRadius:"50%",background:cfg.dot,display:"inline-block"}}/>{p.status}</span></td>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
    }
  </div>;
}

function PlatformStackedBar({projects}) {
  const total = projects.length;
  const counts = platformOptions.reduce((acc,p)=>({...acc,[p]:projects.filter(x=>x.platform===p).length}),{});
  if (total===0) return <div style={{color:"var(--color-text-secondary)",fontSize:13,padding:"2rem 0",textAlign:"center"}}>Tidak ada data.</div>;
  const TEXT_COLORS = {Upwork:"#173404",Fiverr:"#04342C",Freelance:"#412402"};
  return <div style={{display:"flex",flexDirection:"column",gap:14}}>
    {platformOptions.map(p=>{
      const pct = total>0 ? Math.round(counts[p]/total*100) : 0;
      const barPct = Math.max(pct, counts[p]>0?2:0);
      return <div key={p}>
        <div style={{display:"flex",justifyContent:"space-between",fontSize:12,color:"var(--color-text-secondary)",marginBottom:6}}>
          <span style={{display:"flex",alignItems:"center",gap:6}}>
            <span style={{width:10,height:10,borderRadius:2,background:PLATFORM_COLORS[p],display:"inline-block",flexShrink:0}}/>
            {p}
          </span>
          <span style={{fontWeight:500,color:"var(--color-text-primary)"}}>{counts[p]} proyek · {pct}%</span>
        </div>
        <div style={{height:28,background:"#f4f4f4",borderRadius:6,overflow:"hidden"}}>
          <div style={{width:`${barPct}%`,height:"100%",background:PLATFORM_COLORS[p],borderRadius:6,display:"flex",alignItems:"center",paddingLeft:counts[p]>0?10:0,transition:"width 0.4s ease",minWidth:counts[p]>0?4:0}}>
            {pct>=10&&<span style={{fontSize:12,fontWeight:500,color:TEXT_COLORS[p],whiteSpace:"nowrap"}}>{pct}%</span>}
          </div>
        </div>
      </div>;
    })}
    <div style={{fontSize:12,color:"var(--color-text-secondary)",marginTop:2}}>Total: {total} proyek</div>
  </div>;
}

function parseRp(v) { if(!v) return 0; return parseFloat(v.replace(/\./g,"").replace(",","."))||0; }

function fmtRp(n) { return n>=1000000?`${(n/1000000).toFixed(1)}jt`:n>=1000?`${(n/1000).toFixed(0)}rb`:n.toString(); }
function fmtUsd(n) { return `$${n.toLocaleString()}`; }

function PlatformIncomeBar({projects}) {
  const [mode, setMode] = useState("rp");

  const data = platformOptions.map(p=>{
    const ps = projects.filter(x=>x.platform===p);
    const rp = ps.reduce((s,x)=>s+parseRp(x.priceRp),0);
    const gross = ps.reduce((s,x)=>s+parseRp(x.grossPrice),0);
    const usd = ps.reduce((s,x)=>s+(parseFloat(x.priceUSD)||0),0);
    return {p, rp, gross, usd};
  }).filter(d=>d.rp||d.gross||d.usd);

  if (data.length===0) return <div style={{color:"var(--color-text-secondary)",fontSize:13,padding:"1rem 0",textAlign:"center"}}>Tidak ada data income.</div>;

  const hasUsd = data.some(d=>d.usd>0);
  const maxRp = Math.max(...data.map(d=>d.gross||d.rp),1);
  const maxUsd = Math.max(...data.map(d=>d.usd),1);

  const btnBase = {fontSize:11,padding:"3px 10px",borderRadius:20,cursor:"pointer",border:"0.5px solid",transition:"all 0.15s"};
  const btnActive = {...btnBase,background:"var(--color-text-primary)",color:"var(--color-background-primary)",borderColor:"var(--color-text-primary)"};
  const btnInactive = {...btnBase,background:"transparent",color:"var(--color-text-secondary)",borderColor:"var(--color-border-secondary)"};

  return <div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
      <span style={{fontSize:11,fontWeight:500,color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em"}}>Total Income</span>
      {hasUsd&&<div style={{display:"flex",gap:4}}>
        <button style={mode==="rp"?btnActive:btnInactive} onClick={()=>setMode("rp")}>Rp</button>
        <button style={mode==="usd"?btnActive:btnInactive} onClick={()=>setMode("usd")}>USD</button>
      </div>}
    </div>

    <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:14}}>
      {data.map(d=>{
        const isRp = mode==="rp";
        const gross = isRp ? (d.gross||d.rp) : 0;
        const val   = isRp ? d.rp : d.usd;
        const max   = isRp ? maxRp : maxUsd;
        const barPct = Math.round(val/max*100);
        const grossPct = isRp && gross ? Math.round(gross/max*100) : 0;
        if (!val && !gross) return null;
        const label = isRp ? `Rp ${fmtRp(gross||val)}` : `$${d.usd.toLocaleString()}`;
        const nettLabel = isRp && gross && gross!==val ? `nett ${fmtRp(val)}` : null;
        return <div key={d.p} style={{display:"flex",alignItems:"center",gap:10}}>
          <span style={{display:"flex",alignItems:"center",gap:5,fontSize:12,color:"var(--color-text-secondary)",whiteSpace:"nowrap",minWidth:68}}>
            <span style={{width:8,height:8,borderRadius:2,background:PLATFORM_COLORS[d.p],display:"inline-block",flexShrink:0}}/>
            {d.p}
          </span>
          <div style={{flex:1,height:18,background:"#f4f4f4",borderRadius:4,overflow:"hidden",position:"relative"}}>
            {isRp&&grossPct>barPct&&<div style={{position:"absolute",height:"100%",width:`${grossPct}%`,background:PLATFORM_COLORS[d.p],borderRadius:4,opacity:0.25}}/>}
            <div style={{position:"absolute",height:"100%",width:`${barPct}%`,background:PLATFORM_COLORS[d.p],borderRadius:4}}/>
          </div>
          <div style={{textAlign:"right",whiteSpace:"nowrap",minWidth:70}}>
            <span style={{fontSize:13,fontWeight:500,color:"var(--color-text-primary)"}}>{label}</span>
            {nettLabel&&<div style={{fontSize:10,color:"var(--color-text-secondary)"}}>nett {nettLabel}</div>}
          </div>
        </div>;
      })}
    </div>
    {mode==="rp"&&(()=>{
      const totalGross = data.reduce((s,d)=>s+(d.gross||d.rp),0);
      const totalNett  = data.reduce((s,d)=>s+d.rp,0);
      return <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
        <div style={{background:"#f4f4f4",borderRadius:8,padding:"10px 14px"}}>
          <div style={{fontSize:11,color:"#888",marginBottom:4}}>Total Gross</div>
          <div style={{fontSize:18,fontWeight:500,color:"#222"}}>Rp {fmtRp(totalGross)}</div>
        </div>
        <div style={{background:"#f4f4f4",borderRadius:8,padding:"10px 14px"}}>
          <div style={{fontSize:11,color:"#888",marginBottom:4}}>Total Nett</div>
          <div style={{fontSize:18,fontWeight:500,color:"#222"}}>Rp {fmtRp(totalNett)}</div>
        </div>
      </div>;
    })()}
    {mode==="usd"&&(()=>{
      const totalUsd = data.reduce((s,d)=>s+d.usd,0);
      return <div style={{background:"#f4f4f4",borderRadius:8,padding:"10px 14px"}}>
        <div style={{fontSize:11,color:"#888",marginBottom:4}}>Total USD</div>
        <div style={{fontSize:18,fontWeight:500,color:"#222"}}>${totalUsd.toLocaleString()}</div>
      </div>;
    })()}
  </div>;
}

const CLIENT_TYPE_CFG = {
  "Owner":          {color:"#378ADD", bg:"#eff6ff", text:"#1d4ed8"},
  "Business Owner": {color:"#378ADD", bg:"#eff6ff", text:"#1d4ed8"},
  "Developer":      {color:"#1D9E75", bg:"#f0fdf4", text:"#166534"},
  "Consultant":     {color:"#EF9F27", bg:"#fef3c7", text:"#92400e"},
  "Contractor":     {color:"#D85A30", bg:"#faece7", text:"#993c1d"},
};
function getTypeColor(t) {
  if (!t) return {color:"#888780",bg:"var(--color-background-secondary)",text:"var(--color-text-secondary)"};
  if (CLIENT_TYPE_CFG[t]) return CLIENT_TYPE_CFG[t];
  const PALETTES = [
    {color:"#7F77DD",bg:"#EEEDFE",text:"#3C3489"},
    {color:"#D4537E",bg:"#FBEAF0",text:"#72243E"},
    {color:"#639922",bg:"#EAF3DE",text:"#27500A"},
    {color:"#BA7517",bg:"#FAEEDA",text:"#633806"},
    {color:"#0F6E56",bg:"#E1F5EE",text:"#085041"},
    {color:"#993556",bg:"#FBEAF0",text:"#4B1528"},
    {color:"#185FA5",bg:"#E6F1FB",text:"#042C53"},
  ];
  let hash = 0;
  for (let i = 0; i < t.length; i++) hash = (hash * 31 + t.charCodeAt(i)) >>> 0;
  return PALETTES[hash % PALETTES.length];
}

function ClientOrderList({projects}) {
  const [view, setView] = useState("nama");
  const [expanded, setExpanded] = useState(null);
  const donutRef = useRef(null);
  const donutChart = useRef(null);

  const clients = Object.entries(
    projects.reduce((acc,p)=>{
      const name = p.clientName||"(Tanpa Nama)";
      if (!acc[name]) acc[name]={name,clientType:p.clientType||"",count:0,totalGrossRp:0,totalNettRp:0,totalUSD:0,proyek:[]};
      acc[name].count++;
      acc[name].totalGrossRp += parseRp(p.grossPrice);
      acc[name].totalNettRp  += parseRp(p.priceRp);
      acc[name].totalUSD     += parseFloat(p.priceUSD)||0;
      if (!acc[name].clientType && p.clientType) acc[name].clientType = p.clientType;
      acc[name].proyek.push(p);
      return acc;
    },{})
  ).map(([,v])=>v).sort((a,b)=>b.count-a.count || (b.totalGrossRp+b.totalUSD*16000)-(a.totalGrossRp+a.totalUSD*16000));

  const byType = Object.entries(
    projects.reduce((acc,p)=>{
      const t = p.clientType||"(Tanpa Tipe)";
      if (!acc[t]) acc[t]={type:t,count:0,totalNettRp:0,totalGrossRp:0};
      acc[t].count++;
      acc[t].totalNettRp  += parseRp(p.priceRp);
      acc[t].totalGrossRp += parseRp(p.grossPrice);
      return acc;
    },{})
  ).map(([,v])=>v).sort((a,b)=>b.count-a.count);

  useEffect(()=>{
    if (view!=="tipe"||!donutRef.current) return;
    if (donutChart.current){donutChart.current.destroy();donutChart.current=null;}
    const init = ()=>{
      if (!window.Chart) return;
      donutChart.current = new window.Chart(donutRef.current,{
        type:"doughnut",
        data:{
          labels: byType.map(t=>t.type),
          datasets:[{ data:byType.map(t=>t.count), backgroundColor:byType.map(t=>getTypeColor(t.type).color), borderWidth:2, borderColor:"#fff", hoverOffset:4 }]
        },
        options:{ responsive:true, maintainAspectRatio:false, cutout:"68%", plugins:{legend:{display:false}, tooltip:{callbacks:{label:ctx=>`${ctx.label}: ${ctx.parsed}x`}}} }
      });
    };
    if (window.Chart) init();
    else { const s=document.createElement("script"); s.src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"; s.onload=init; document.head.appendChild(s); }
    return ()=>{ if(donutChart.current){donutChart.current.destroy();donutChart.current=null;} };
  },[view, JSON.stringify(byType)]);

  if (clients.length===0) return <div style={{fontSize:13,color:"var(--color-text-secondary)",textAlign:"center",padding:"1rem 0"}}>Tidak ada data.</div>;

  const anyUSD = clients.some(c=>c.totalUSD>0);
  const colW = {gross:90, nett:90, usd:70, count:36};
  const labelSt = {fontSize:10,color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.05em",fontWeight:500};
  const pillBtn = (active) => ({fontSize:12,padding:"4px 14px",borderRadius:20,border:"0.5px solid",cursor:"pointer",transition:"all 0.15s",background:active?"#111":"transparent",color:active?"#fff":"var(--color-text-secondary)",borderColor:active?"#111":"var(--color-border-secondary)"});

  return <div style={{display:"flex",flexDirection:"column",gap:10}}>
    {/* Toggle */}
    <div style={{display:"flex",gap:6}}>
      <button onClick={()=>setView("nama")} style={pillBtn(view==="nama")}>Per Nama</button>
      <button onClick={()=>setView("tipe")} style={pillBtn(view==="tipe")}>Per Tipe</button>
    </div>

    {/* VIEW: PER NAMA */}
    {view==="nama"&&<div style={{display:"flex",flexDirection:"column",gap:6}}>
      <div style={{display:"flex",alignItems:"center",gap:10,padding:"0 12px 4px",borderBottom:"0.5px solid var(--color-border-tertiary)"}}>
        <span style={{width:20,flexShrink:0}}/>
        <span style={{flex:1}}/>
        <span style={{...labelSt,width:colW.gross,textAlign:"right"}}>Gross</span>
        <span style={{...labelSt,width:colW.nett,textAlign:"right"}}>Nett</span>
        {anyUSD&&<span style={{...labelSt,width:colW.usd,textAlign:"right"}}>USD</span>}
        <span style={{width:colW.count}}/>
      </div>
      {clients.map((c,i)=>{
        const isOpen = expanded===c.name;
        const typeCfg = getTypeColor(c.clientType);
        return <div key={c.name} style={{borderRadius:8,overflow:"hidden",border:"0.5px solid transparent",transition:"border-color 0.2s",...(isOpen?{border:"0.5px solid var(--color-border-secondary)"}:{})}}>
          <div onClick={()=>setExpanded(isOpen?null:c.name)}
            style={{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",background:isOpen?"#dbeafe":"var(--color-background-secondary)",cursor:"pointer",transition:"background 0.15s"}}
            onMouseEnter={e=>{e.currentTarget.style.background="#e0e7ff";}}
            onMouseLeave={e=>{e.currentTarget.style.background=isOpen?"#dbeafe":"var(--color-background-secondary)";}}>
            <span style={{fontSize:11,fontWeight:600,color:"var(--color-text-secondary)",width:20,textAlign:"right",flexShrink:0}}>#{i+1}</span>
            <span style={{display:"flex",flexDirection:"column",gap:2,flex:1,minWidth:0,overflow:"hidden"}}>
              <span style={{fontSize:13,color:isOpen?"var(--color-text-info)":"var(--color-text-primary)",fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{c.name}</span>
              <span style={{display:"flex",alignItems:"center",gap:4}}>
                {c.clientType&&<span style={{fontSize:10,fontWeight:500,borderRadius:20,padding:"1px 7px",background:typeCfg.bg,color:typeCfg.text,flexShrink:0}}>{c.clientType}</span>}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isOpen?"#fff":"var(--color-text-secondary)"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,transform:isOpen?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s"}}><polyline points="6 9 12 15 18 9"/></svg>
              </span>
            </span>
            <span style={{fontSize:12,fontWeight:600,color:"var(--color-text-primary)",width:colW.gross,textAlign:"right",whiteSpace:"nowrap"}}>{c.totalGrossRp>0?`Rp ${fmtRp(c.totalGrossRp)}`:"—"}</span>
            <span style={{fontSize:12,fontWeight:400,color:"var(--color-text-secondary)",width:colW.nett,textAlign:"right",whiteSpace:"nowrap"}}>{c.totalNettRp>0?`Rp ${fmtRp(c.totalNettRp)}`:"—"}</span>
            {anyUSD&&<span style={{fontSize:12,fontWeight:600,color:"#047857",width:colW.usd,textAlign:"right",whiteSpace:"nowrap"}}>{c.totalUSD>0?`$${c.totalUSD.toLocaleString()}`:""}</span>}
            <span style={{fontSize:12,fontWeight:500,background:c.count>1?"#eff6ff":"var(--color-background-primary)",color:c.count>1?"#1d4ed8":"var(--color-text-secondary)",borderRadius:20,padding:"2px 8px",width:colW.count,textAlign:"center",flexShrink:0}}>{c.count}x</span>
          </div>
          {isOpen&&<div style={{background:"var(--color-background-primary)",borderTop:"0.5px solid var(--color-border-tertiary)",padding:"8px 12px 10px"}}>
            <div style={{display:"flex",flexDirection:"column",gap:6,paddingLeft:30}}>
              {c.proyek.map((p,j)=><div key={p.id} style={{display:"flex",alignItems:"flex-start",gap:8,padding:"7px 10px",borderRadius:6,background:"var(--color-background-secondary)"}}>
                <span style={{fontSize:11,color:"var(--color-text-secondary)",flexShrink:0,marginTop:1}}>#{j+1}</span>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:13,fontWeight:500,color:"var(--color-text-primary)",marginBottom:4}}>{p.projectName||"Untitled"}</div>
                  <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
                    {p.design&&<span style={{fontSize:11,background:"#eff6ff",color:"#1d4ed8",borderRadius:4,padding:"1px 7px"}}>{p.design}</span>}
                    {p.jobType&&<span style={{fontSize:11,background:"#f0fdf4",color:"#166534",borderRadius:4,padding:"1px 7px"}}>{p.jobType}</span>}
                    {p.status&&<span style={{fontSize:11,background:STATUS_CFG[p.status]?.bg||"#f5f5f5",color:STATUS_CFG[p.status]?.text||"#555",borderRadius:4,padding:"1px 7px"}}>{p.status}</span>}
                  </div>
                </div>
                {(p.grossPrice||p.priceRp||p.priceUSD)&&<div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1,flexShrink:0}}>
                  {p.grossPrice&&<span style={{fontSize:11,fontWeight:600,color:"var(--color-text-primary)",whiteSpace:"nowrap"}}>Rp {p.grossPrice}</span>}
                  {p.priceRp&&p.grossPrice&&p.priceRp!==p.grossPrice&&<span style={{fontSize:11,color:"var(--color-text-secondary)",whiteSpace:"nowrap"}}>Nett Rp {p.priceRp}</span>}
                  {p.priceRp&&!p.grossPrice&&<span style={{fontSize:11,fontWeight:600,color:"var(--color-text-primary)",whiteSpace:"nowrap"}}>Rp {p.priceRp}</span>}
                  {p.priceUSD&&<span style={{fontSize:11,fontWeight:600,color:"#047857",whiteSpace:"nowrap"}}>${p.priceUSD}</span>}
                </div>}
              </div>)}
            </div>
          </div>}
        </div>;
      })}
    </div>}

    {/* VIEW: PER TIPE */}
    {view==="tipe"&&<div>
      <div style={{display:"flex",gap:20,alignItems:"center"}}>
        <div style={{position:"relative",width:130,height:130,flexShrink:0}}>
          <canvas ref={donutRef}/>
        </div>
        <div style={{flex:1,display:"flex",flexDirection:"column",gap:7}}>
          {byType.map(t=>{
            const cfg = getTypeColor(t.type);
            return <div key={t.type} style={{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",borderRadius:8,background:"var(--color-background-secondary)"}}>
              <span style={{width:10,height:10,borderRadius:2,background:cfg.color,flexShrink:0}}/>
              <span style={{fontSize:13,fontWeight:500,color:"var(--color-text-primary)",flex:1}}>{t.type}</span>
              <span style={{fontSize:12,color:"var(--color-text-secondary)",whiteSpace:"nowrap"}}>{t.totalNettRp>0?`Rp ${fmtRp(t.totalNettRp)}`:"—"}</span>
              <span style={{fontSize:12,fontWeight:500,borderRadius:20,padding:"2px 8px",background:cfg.bg,color:cfg.text,flexShrink:0}}>{t.count}x</span>
            </div>;
          })}
        </div>
      </div>
    </div>}
  </div>;
}

function ProjectTypeScopeTable({projects}) {
  if (projects.length===0) return <div style={{fontSize:13,color:"var(--color-text-secondary)",textAlign:"center",padding:"1rem 0"}}>Tidak ada data.</div>;
  // Group by design+jobType and count
  const grouped = Object.values(projects.reduce((acc,p)=>{
    const key = `${p.jobType||"—"}__${p.design||"—"}`;
    if (!acc[key]) acc[key]={design:p.design||"—",jobType:p.jobType||"—",count:0};
    acc[key].count++;
    return acc;
  },{})).sort((a,b)=>a.jobType.localeCompare(b.jobType)||a.design.localeCompare(b.design));
  return <div style={{overflowX:"auto"}}>
    <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
      <thead>
        <tr style={{borderBottom:"2px solid #000"}}>
          <th style={{padding:"8px 12px",textAlign:"left",fontWeight:600,fontSize:11,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-text-secondary)"}}>Scope of Work</th>
          <th style={{padding:"8px 12px",textAlign:"left",fontWeight:600,fontSize:11,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-text-secondary)"}}>Project Type</th>
          <th style={{padding:"8px 12px",textAlign:"center",fontWeight:600,fontSize:11,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-text-secondary)"}}>Count</th>
        </tr>
      </thead>
      <tbody>
        {grouped.map((row,i)=><tr key={i} style={{borderBottom:"0.5px solid var(--color-border-tertiary)",background:i%2===0?"transparent":"var(--color-background-secondary)"}}>
          <td style={{padding:"8px 12px",color:"var(--color-text-primary)"}}>{row.jobType}</td>
          <td style={{padding:"8px 12px",color:"var(--color-text-primary)"}}>{row.design}</td>
          <td style={{padding:"8px 12px",textAlign:"center"}}><span style={{fontWeight:600,fontSize:13,background:row.count>1?"#eff6ff":"var(--color-background-secondary)",color:row.count>1?"#1d4ed8":"var(--color-text-secondary)",borderRadius:20,padding:"2px 10px"}}>{row.count}</span></td>
        </tr>)}
      </tbody>
    </table>
  </div>;
}

function HargaM2Tab({projects}) {
  const valid = projects.filter(p=>p.area&&parseFloat(p.area)>0&&parseRp(p.grossPrice)>0);
  const scopes = ["Semua",...[...new Set(valid.map(p=>p.jobType).filter(Boolean))]];
  const [scope, setScope] = useState("Semua");

  const filtered = valid.filter(p=>scope==="Semua"||p.jobType===scope);

  if (valid.length===0) return <div style={{fontSize:13,color:"var(--color-text-secondary)",textAlign:"center",padding:"1rem 0"}}>Tidak ada proyek dengan data area & gross.</div>;

  const prices = filtered.map(p=>Math.round(parseRp(p.grossPrice)/parseFloat(p.area)));
  const avg = prices.length ? Math.round(prices.reduce((s,v)=>s+v,0)/prices.length) : 0;
  const min = prices.length ? Math.min(...prices) : 0;
  const max = prices.length ? Math.max(...prices) : 0;

  const btnBase = {fontSize:11,padding:"4px 12px",borderRadius:20,border:"0.5px solid",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.15s"};
  const btnActive = {...btnBase,background:"#222",color:"#fff",borderColor:"#222"};
  const btnInactive = {...btnBase,background:"transparent",color:"var(--color-text-secondary)",borderColor:"var(--color-border-secondary)"};

  return <div>
    <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16}}>
      {scopes.map(s=><button key={s} style={scope===s?btnActive:btnInactive} onClick={()=>setScope(s)}>{s}</button>)}
    </div>

    {filtered.length===0
      ? <div style={{fontSize:13,color:"var(--color-text-secondary)",textAlign:"center",padding:"1rem 0"}}>Tidak ada proyek dengan scope ini.</div>
      : <>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:16}}>
            {[["Rata-rata",avg],["Terendah",min],["Tertinggi",max]].map(([label,val])=>(
              <div key={label} style={{background:"#f4f4f4",borderRadius:8,padding:"10px 14px"}}>
                <div style={{fontSize:11,color:"#888",marginBottom:4}}>{label}</div>
                <div style={{fontSize:18,fontWeight:500,color:"#222"}}>Rp {fmtRp(val)}</div>
                <div style={{fontSize:10,color:"#aaa",marginTop:2}}>per m²</div>
              </div>
            ))}
          </div>
          <div style={{display:"flex",flexDirection:"column"}}>
            {filtered.map((p,i)=>{
              const priceM2 = Math.round(parseRp(p.grossPrice)/parseFloat(p.area));
              const isLast = i===filtered.length-1;
              return <div key={p.id} style={{padding:"10px 0",borderBottom:isLast?"none":"0.5px solid var(--color-border-tertiary)"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                  <div>
                    <div style={{fontSize:13,fontWeight:500,color:"var(--color-text-primary)",marginBottom:5}}>{p.projectName||"Untitled"}</div>
                    <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
                      {p.jobType&&<span style={{fontSize:11,background:"#f0fdf4",color:"#166534",borderRadius:4,padding:"2px 7px"}}>{p.jobType}</span>}
                      {p.design&&<span style={{fontSize:11,background:"#eff6ff",color:"#1d4ed8",borderRadius:4,padding:"2px 7px"}}>{p.design}</span>}
                    </div>
                  </div>
                  <div style={{textAlign:"right",flexShrink:0,marginLeft:12}}>
                    <div style={{fontSize:14,fontWeight:500,color:"var(--color-text-primary)"}}>Rp {fmtRp(priceM2)}/m²</div>
                    <div style={{fontSize:11,color:"var(--color-text-secondary)",marginTop:2}}>{p.area} m² · Rp {fmtRp(parseRp(p.grossPrice))}</div>
                  </div>
                </div>
              </div>;
            })}
          </div>
        </>
    }
  </div>;
}

function IncomeVsExpenses({projects}) {
  const canvasRef = useRef(null);
  const chartRef  = useRef(null);
  const expenses  = loadExpenses();

  const allMonths = [...new Set([
    ...projects.map(p=>(p.startDate||"").slice(0,7)),
    ...expenses.map(e=>(e.date||"").slice(0,7))
  ].filter(Boolean))].sort();

  const labels    = allMonths.map(m=>{ const [,mo]=m.split("-"); return ["","Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"][parseInt(mo)]; });
  const incomeData   = allMonths.map(m=>projects.filter(p=>(p.startDate||"").startsWith(m)).reduce((s,p)=>s+parseRp(p.priceRp),0));
  const expenseData  = allMonths.map(m=>expenses.filter(e=>(e.date||"").startsWith(m)).reduce((s,e)=>s+parseRp(e.amount),0));

  useEffect(()=>{
    if (!canvasRef.current||allMonths.length===0) return;
    if (chartRef.current){chartRef.current.destroy();chartRef.current=null;}
    const init = () => {
      if (!window.Chart) return;
      chartRef.current = new window.Chart(canvasRef.current,{
        type:"line",
        data:{ labels, datasets:[
          { label:"Income (Nett)", data:incomeData,  borderColor:"#22c55e", backgroundColor:"rgba(34,197,94,0.10)", fill:true, tension:0.35, pointRadius:3, pointBackgroundColor:"#22c55e", borderWidth:2 },
          { label:"Expenses",     data:expenseData, borderColor:"#ef4444", backgroundColor:"rgba(239,68,68,0.07)",  fill:true, tension:0.35, pointRadius:3, pointBackgroundColor:"#ef4444", borderWidth:2 }
        ]},
        options:{
          responsive:true, maintainAspectRatio:false,
          layout:{padding:{top:16}},
          plugins:{
            legend:{display:false},
            tooltip:{callbacks:{
              label: ctx=>`${ctx.dataset.label}: Rp ${fmtRp(ctx.parsed.y)}`,
              footer: items=>{
                const inc = items.find(i=>i.datasetIndex===0)?.parsed.y||0;
                const exp = items.find(i=>i.datasetIndex===1)?.parsed.y||0;
                return `Profit: Rp ${fmtRp(inc-exp)}`;
              }
            }}
          },
          scales:{
            x:{grid:{color:"rgba(128,128,128,0.08)"},ticks:{font:{size:11},color:"#888"}},
            y:{grid:{color:"rgba(128,128,128,0.08)"},ticks:{font:{size:10},color:"#888",callback:v=>v>=1000000?`${(v/1000000).toFixed(0)}jt`:v>=1000?`${Math.round(v/1000)}rb`:`${v}`},min:0}
          }
        }
      });
    };
    if (window.Chart) init();
    else { const s=document.createElement("script"); s.src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"; s.onload=init; document.head.appendChild(s); }
    return ()=>{ if(chartRef.current){chartRef.current.destroy();chartRef.current=null;} };
  },[JSON.stringify(incomeData),JSON.stringify(expenseData)]);

  if (allMonths.length===0) return <div style={{fontSize:13,color:"var(--color-text-secondary)",textAlign:"center",padding:"1rem 0"}}>Belum ada data income atau expenses.</div>;

  const totalIncome   = incomeData.reduce((s,v)=>s+v,0);
  const totalExpenses = expenseData.reduce((s,v)=>s+v,0);
  const totalProfit   = totalIncome - totalExpenses;

  return <div>
    <div style={{display:"flex",gap:14,marginBottom:12,fontSize:12,color:"var(--color-text-secondary)",flexWrap:"wrap",alignItems:"center"}}>
      <span style={{display:"flex",alignItems:"center",gap:5}}><span style={{width:10,height:10,borderRadius:2,background:"#22c55e",display:"inline-block"}}/>Income (Nett)</span>
      <span style={{display:"flex",alignItems:"center",gap:5}}><span style={{width:10,height:10,borderRadius:2,background:"#ef4444",display:"inline-block"}}/>Expenses</span>
      <span style={{marginLeft:"auto",display:"flex",gap:16}}>
        <span>Total income <strong style={{color:"#22c55e"}}>Rp {fmtRp(totalIncome)}</strong></span>
        <span>Total expenses <strong style={{color:"#ef4444"}}>Rp {fmtRp(totalExpenses)}</strong></span>
        <span>Profit <strong style={{color:totalProfit>=0?"var(--color-text-primary)":"#ef4444"}}>Rp {fmtRp(Math.abs(totalProfit))}{totalProfit<0?" (minus)":""}</strong></span>
      </span>
    </div>
    <div style={{position:"relative",width:"100%",height:200}}>
      <canvas ref={canvasRef}/>
    </div>
  </div>;
}

function loadTargets() {
  try { const s=window._incomeTargets; if(s)return JSON.parse(s); } catch(e){}
  // migrate old single-target format
  try { const s=window._incomeTarget; if(s){const t=JSON.parse(s);if(t&&t.year&&t.amount>0)return {[t.year]:t.amount};} } catch(e){}
  if(seedTarget&&seedTarget.year&&seedTarget.amount>0) return {[seedTarget.year]:seedTarget.amount};
  return {};
}
function saveTargets(t) { window._incomeTargets=JSON.stringify(t); }
function fmtFull(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."); }

function IncomeTarget({projects, year: propYear}) {
  const [targets, setTargets] = useState(loadTargets);
  const [editing, setEditing] = useState(false);
  const [editYear, setEditYear] = useState(String(new Date().getFullYear()));
  const [inputVal, setInputVal] = useState("");
  const [amtLoading, setAmtLoading] = useState(false);
  const canvasRef = useRef(null);
  const chartRef  = useRef(null);

  // All years that have projects OR have a target set
  const projectYears = [...new Set(projects.map(p=>(p.startDate||"").slice(0,4)).filter(Boolean))].sort().reverse();
  const targetYears  = Object.keys(targets).sort().reverse();
  const allYears = [...new Set([...projectYears, ...targetYears])].sort().reverse();
  const currentYear  = String(new Date().getFullYear());
  // if a year is passed from the parent Analysis tab, follow it; else use own state
  const [ownYear, setOwnYear] = useState(()=>allYears[0]||currentYear);
  const selYear = propYear || ownYear;
  const setSelYear = (y) => { if(!propYear) setOwnYear(y); };

  const targetAmt  = targets[selYear]||0;
  const MONTHS = ["","Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];

  // Income per month for selected year (cumulative)
  const monthlyIncome = Array.from({length:12},(_,i)=>{
    const mo = String(i+1).padStart(2,"0");
    return projects
      .filter(p=>(p.startDate||"").startsWith(`${selYear}-${mo}`))
      .reduce((s,p)=>s+parseRp(p.priceRp),0);
  });
  const totalNett = monthlyIncome.reduce((s,v)=>s+v,0);
  const pct = targetAmt>0 ? Math.min(100, Math.round(totalNett/targetAmt*100)) : 0;
  const remaining = Math.max(0, targetAmt - totalNett);

  // Find which month target was achieved (cumulative sum crosses target)
  const achievedMonth = (() => {
    if (!targetAmt) return null;
    let cum = 0;
    for (let i=0; i<12; i++) {
      cum += monthlyIncome[i];
      if (cum >= targetAmt) return i+1; // 1-indexed month
    }
    return null;
  })();

  // Months left in year (only for current year)
  const now = new Date();
  const isCurrentYear = selYear === currentYear;
  const monthsLeft = isCurrentYear ? 12 - now.getMonth() : 0;
  const perMonth = monthsLeft>0 && remaining>0 ? Math.round(remaining/monthsLeft) : 0;

  useEffect(()=>{ saveTargets(targets); },[targets]);

  useEffect(()=>{
    if (!canvasRef.current) return;
    if (chartRef.current){chartRef.current.destroy();chartRef.current=null;}
    const init = ()=>{
      if (!canvasRef.current||!window.Chart) return;
      chartRef.current = new window.Chart(canvasRef.current,{
        type:"doughnut",
        data:{ datasets:[{ data:[totalNett, Math.max(0,targetAmt-totalNett)], backgroundColor:["#22c55e","#e5e7eb"], borderWidth:0, hoverOffset:0 }]},
        options:{ responsive:true, maintainAspectRatio:false, cutout:"72%", plugins:{legend:{display:false},tooltip:{enabled:false}} }
      });
    };
    if (window.Chart) init();
    else { const s=document.createElement("script"); s.src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"; s.onload=init; document.head.appendChild(s); }
    return ()=>{ if(chartRef.current){chartRef.current.destroy();chartRef.current=null;} };
  },[totalNett, targetAmt]);

  const handleAmtBlur = async () => {
    if (!inputVal.trim()) return;
    const n = parseNominal(inputVal.trim());
    if (n!==null) { setInputVal(fmtFull(n)); return; }
    setAmtLoading(true);
    const r = await formatRpWithAI(inputVal.trim());
    setAmtLoading(false);
    const n2 = parseNominal(r);
    setInputVal(n2!==null ? fmtFull(n2) : r);
  };

  const saveEdit = () => {
    const n = parseNominal(inputVal.trim()) ?? parseRp(inputVal);
    const yr = editYear.trim();
    if (n>0 && yr) {
      setTargets(prev=>({...prev,[yr]:n}));
      if (!allYears.includes(yr)) setSelYear(yr);
    }
    setEditing(false);
  };

  const deleteTarget = (yr) => {
    setTargets(prev=>{ const next={...prev}; delete next[yr]; return next; });
    if (selYear===yr) setSelYear(allYears.filter(y=>y!==yr)[0]||currentYear);
  };

  const inpSt = {fontSize:13,padding:"6px 10px",border:"0.5px solid var(--color-border-secondary)",borderRadius:6,background:"var(--color-background-primary)",color:"var(--color-text-primary)",outline:"none"};

  // Edit form
  if (editing) return <div style={{display:"flex",flexDirection:"column",gap:10,maxWidth:360}}>
    <div style={{fontSize:13,fontWeight:500,marginBottom:2}}>Set Target Income</div>
    <div style={{display:"flex",gap:8}}>
      <div style={{flex:1}}>
        <div style={{fontSize:12,color:"var(--color-text-secondary)",marginBottom:4}}>Target (Rp)</div>
        <input value={inputVal} onChange={e=>setInputVal(e.target.value)} onBlur={handleAmtBlur}
          onKeyDown={e=>{if(e.key==="Enter")saveEdit();if(e.key==="Escape")setEditing(false);}}
          placeholder={amtLoading?"Memformat...":"Contoh: 120jt"} style={{...inpSt,width:"100%"}}/>
      </div>
      <div style={{width:90}}>
        <div style={{fontSize:12,color:"var(--color-text-secondary)",marginBottom:4}}>Tahun</div>
        <input value={editYear} onChange={e=>setEditYear(e.target.value)} style={{...inpSt,width:"100%"}}/>
      </div>
    </div>
    <div style={{display:"flex",gap:8}}>
      <button onClick={saveEdit} style={{fontSize:13,padding:"6px 16px",background:"#111",color:"#fff",border:"none",borderRadius:6,cursor:"pointer"}}>Simpan</button>
      <button onClick={()=>setEditing(false)} style={{fontSize:13,padding:"6px 14px"}}>Batal</button>
    </div>
  </div>;

  // No targets at all
  if (allYears.length===0 || (allYears.length===1&&!targets[allYears[0]])) return <div style={{textAlign:"center",padding:"1rem 0"}}>
    <div style={{fontSize:13,color:"var(--color-text-secondary)",marginBottom:12}}>Belum ada target income yang ditetapkan.</div>
    <button onClick={()=>{setInputVal("");setEditYear(currentYear);setEditing(true);}} style={{fontSize:13,padding:"6px 18px"}}>+ Set Target</button>
  </div>;

  return <div>
    {/* Year selector + add button — only shown when not controlled by parent */}
    {!propYear && <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:16,flexWrap:"wrap"}}>
      {allYears.map(y=>(
        <button key={y} onClick={()=>setSelYear(y)} style={{
          fontSize:12,padding:"3px 14px",borderRadius:20,cursor:"pointer",border:"1.5px solid",
          background:selYear===y?"#111":"transparent",
          color:selYear===y?"#fff":"var(--color-text-secondary)",
          borderColor:selYear===y?"#111":"var(--color-border-secondary)",
          fontWeight:selYear===y?500:400,transition:"all 0.15s"
        }}>{y}</button>
      ))}
      <button onClick={()=>{setInputVal("");setEditYear(selYear);setEditing(true);}} style={{
        fontSize:12,padding:"3px 12px",borderRadius:20,border:"1.5px dashed var(--color-border-secondary)",
        background:"transparent",color:"var(--color-text-secondary)",cursor:"pointer",marginLeft:2
      }}>+ Tahun baru</button>
    </div>}

    {/* No target for selected year */}
    {!targetAmt ? <div style={{textAlign:"center",padding:"1rem 0"}}>
      <div style={{fontSize:13,color:"var(--color-text-secondary)",marginBottom:10}}>Belum ada target untuk tahun {selYear}.</div>
      <button onClick={()=>{setInputVal("");setEditYear(selYear);setEditing(true);}} style={{fontSize:13,padding:"6px 18px"}}>+ Set Target {selYear}</button>
    </div> : <div style={{display:"flex",alignItems:"center",gap:24,flexWrap:"wrap"}}>
      {/* Donut */}
      <div style={{position:"relative",width:140,height:140,flexShrink:0}}>
        <canvas ref={canvasRef}/>
        <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",pointerEvents:"none"}}>
          <span style={{fontSize:24,fontWeight:500,color:"var(--color-text-primary)"}}>{pct}%</span>
          <span style={{fontSize:11,color:"var(--color-text-secondary)"}}>tercapai</span>
        </div>
      </div>

      {/* Stats */}
      <div style={{flex:1,minWidth:200,display:"flex",flexDirection:"column",gap:8}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
          <div style={{background:"var(--color-background-secondary)",borderRadius:8,padding:"10px 14px"}}>
            <div style={{fontSize:11,color:"var(--color-text-secondary)",marginBottom:4}}>Target {selYear}</div>
            <div style={{fontSize:16,fontWeight:500,color:"var(--color-text-primary)"}}>Rp {fmtFull(targetAmt)}</div>
          </div>
          <div style={{background:"var(--color-background-secondary)",borderRadius:8,padding:"10px 14px"}}>
            <div style={{fontSize:11,color:"var(--color-text-secondary)",marginBottom:4}}>Sudah masuk</div>
            <div style={{fontSize:16,fontWeight:500,color:"#22c55e"}}>Rp {fmtFull(totalNett)}</div>
          </div>
        </div>

        {/* Achieved or remaining */}
        {achievedMonth
          ? <div style={{background:"#f0fdf4",border:"1.5px solid #86efac",borderRadius:8,padding:"10px 14px",display:"flex",alignItems:"center",gap:8}}>
              <span style={{fontSize:18}}>🎯</span>
              <div>
                <div style={{fontSize:13,fontWeight:500,color:"#166534"}}>Target tercapai di bulan {MONTHS[achievedMonth]}!</div>
                <div style={{fontSize:11,color:"#16a34a",marginTop:2}}>Total {selYear}: Rp {fmtFull(totalNett)}</div>
              </div>
            </div>
          : <div style={{background:"var(--color-background-secondary)",borderRadius:8,padding:"10px 14px"}}>
              <div style={{fontSize:11,color:"var(--color-text-secondary)",marginBottom:4}}>Sisa target</div>
              <div style={{fontSize:15,fontWeight:500,color:"var(--color-text-primary)"}}>Rp {fmtFull(remaining)}</div>
              {perMonth>0&&<div style={{fontSize:11,color:"var(--color-text-secondary)",marginTop:3}}>≈ Rp {fmtFull(perMonth)}/bulan · {monthsLeft} bulan tersisa</div>}
            </div>
        }

        {/* Edit / delete actions */}
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          <button onClick={()=>{setInputVal(fmtFull(targetAmt));setEditYear(selYear);setEditing(true);}} style={{fontSize:12,padding:"4px 12px"}}>Ubah target</button>
          <button onClick={()=>deleteTarget(selYear)} style={{fontSize:12,padding:"4px 12px",color:"var(--color-text-danger)",borderColor:"var(--color-border-danger)"}}>Hapus</button>
        </div>
      </div>
    </div>}
  </div>;
}

function AnalysisTabContent({projects, allProjects, year, editMode, order, setOrder, isMonth=false}) {
  const allCards = [
    {id:"incomemonthly",    title:"Income per Bulan per Platform",      render:()=><IncomeStackedBar projects={projects}/>,              defaultOpen:true,  excludeMonth:true},
    {id:"platform",         title:"Total Proyek",                        render:()=><PlatformStackedBar projects={projects}/>,             defaultOpen:true},
    {id:"income",           title:"Total Income per Platform",           render:()=><PlatformIncomeBar projects={projects}/>,              defaultOpen:true},
    {id:"incomevsexpenses", title:"Income vs Expenses",                  render:()=><IncomeVsExpenses projects={projects}/>,               defaultOpen:true,  excludeMonth:true},
    {id:"incometarget",    title:"Target Income",                        render:()=><IncomeTarget projects={projects} year={year}/>,                    defaultOpen:false, excludeMonth:true},
    {id:"monthly",          title:"Jumlah Proyek & Total Hours per Bulan", render:()=><MonthlyComboChart projects={projects} year={year}/>, defaultOpen:false, requireYear:true, excludeMonth:true},
    {id:"clients",     title:"Client Orders",                      render:()=><ClientOrderList projects={projects}/>,              defaultOpen:false},
    {id:"scopetype",   title:"Project Type & Scope of Work",       render:()=><ProjectTypeScopeTable projects={projects}/>,        defaultOpen:false},
    {id:"team",       title:"Team vs Solo",                        render:()=><TeamTab projects={allProjects||projects}/>,           defaultOpen:true},
    {id:"hargam2",     title:"Harga /m²",                         render:()=><HargaM2Tab projects={projects}/>,                   defaultOpen:false},
    {id:"area",        title:"Area",                               render:()=><AreaTab projects={projects}/>,                      defaultOpen:false},
    {id:"durasi",      title:"Durasi Pengerjaan",                  render:()=><DurasiTab projects={projects}/>,                    defaultOpen:false},
  ];

  const [dragging, setDragging] = useState(null);
  const [dragOver, setDragOver] = useState(null);

  const visible = order
    .map(id=>allCards.find(c=>c.id===id))
    .filter(c=>c && (!c.requireYear || year) && (!isMonth || !c.excludeMonth));

  const onDragStart = (e, id) => { setDragging(id); e.dataTransfer.effectAllowed="move"; };
  const onDragOver  = (e, id) => { e.preventDefault(); e.dataTransfer.dropEffect="move"; if(id!==dragging) setDragOver(id); };
  const onDrop = (e, targetId) => {
    e.preventDefault();
    if (!dragging||dragging===targetId) { setDragging(null); setDragOver(null); return; }
    const newOrder=[...order];
    const fromIdx=newOrder.indexOf(dragging), toIdx=newOrder.indexOf(targetId);
    newOrder.splice(fromIdx,1); newOrder.splice(toIdx,0,dragging);
    setOrder(newOrder); setDragging(null); setDragOver(null);
  };
  const onDragEnd = () => { setDragging(null); setDragOver(null); };

  return <div style={{display:"flex",flexDirection:"column",gap:12}}>
    {visible.map(card=>(
      <div
        key={card.id}
        draggable={editMode}
        onDragStart={editMode?e=>onDragStart(e,card.id):undefined}
        onDragOver={editMode?e=>onDragOver(e,card.id):undefined}
        onDrop={editMode?e=>onDrop(e,card.id):undefined}
        onDragEnd={editMode?onDragEnd:undefined}
        style={{opacity:dragging===card.id?0.4:1, outline:dragOver===card.id?"2px dashed #aaa":"none", outlineOffset:2, borderRadius:12, cursor:editMode?"grab":"default", transition:"opacity 0.15s"}}
      >
        <CollapsibleCard title={card.title} defaultOpen={card.defaultOpen} dragIcon={editMode?"⠿":null}>
          {card.render()}
        </CollapsibleCard>
      </div>
    ))}
  </div>;
}

function AllTimeTab({projects, editMode, order, setOrder}) {
  return <AnalysisTabContent projects={projects} allProjects={projects} editMode={editMode} order={order} setOrder={setOrder}/>;
}

const MONTH_LABELS = ["","Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];

function MonthlyComboChart({projects, year}) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  const months = Array.from({length:12},(_,i)=>i+1);
  const data = months.map(m=>{
    const key = `${year}-${String(m).padStart(2,"0")}`;
    const ps = projects.filter(p=>(p.startDate||"").startsWith(key));
    const count = ps.length;
    const hours = ps.reduce((s,p)=>s+(parseFloat(p.hours)||0),0);
    return {m, label:MONTH_LABELS[m], count, hours};
  });

  // Hanya tampilkan bulan yang ada datanya
  const activeData = data.filter(d=>d.count>0||d.hours>0);
  const labels = activeData.map(d=>d.label);
  const countData = activeData.map(d=>d.count);
  const hoursData = activeData.map(d=>d.hours);

  useEffect(()=>{
    if (!canvasRef.current) return;
    // Destroy existing chart
    if (chartRef.current) { chartRef.current.destroy(); chartRef.current=null; }

    // Dynamically load Chart.js if not present
    const initChart = () => {
      if (!window.Chart) return;

      const labelPlugin = {
        id: "labelPlugin",
        afterDatasetsDraw(chart) {
          const {ctx} = chart;
          chart.data.datasets.forEach((ds, i) => {
            const meta = chart.getDatasetMeta(i);
            meta.data.forEach((el, j) => {
              const val = ds.data[j];
              if (!val) return;
              const x = el.x;
              const top = el.y;
              ctx.save();
              ctx.font = "500 10px sans-serif";
              ctx.textAlign = "center";
              ctx.textBaseline = "bottom";
              if (ds.yAxisID === "yHours") {
                ctx.fillStyle = "#b45309";
                ctx.fillText(val, x, top - 3);
              } else {
                ctx.fillStyle = "#185FA5";
                ctx.fillText(val, x, top - 3);
              }
              ctx.restore();
            });
          });
        }
      };

      chartRef.current = new window.Chart(canvasRef.current, {
        type: "bar",
        plugins: [labelPlugin],
        data: {
          labels,
          datasets: [
            {
              label: "Jumlah Proyek",
              data: countData,
              backgroundColor: "#378ADD",
              borderRadius: 4,
              yAxisID: "yCount",
              order: 1,
              barPercentage: 0.3,
              categoryPercentage: 0.65,
            },
            {
              label: "Total Hours",
              data: hoursData,
              backgroundColor: "#EF9F27",
              borderRadius: 4,
              yAxisID: "yHours",
              order: 2,
              barPercentage: 0.5,
              categoryPercentage: 0.65,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: { padding: { top: 16 } },
          plugins: { legend: { display: false } },
          scales: {
            x: {
              grid: { color: "rgba(128,128,128,0.1)" },
              ticks: { font: { size: 11 }, color: "#888" }
            },
            yCount: {
              position: "left",
              grid: { color: "rgba(128,128,128,0.1)" },
              ticks: { font: { size: 11 }, color: "#378ADD", stepSize: 1, precision: 0 },
              title: { display: true, text: "Jumlah Proyek", font: { size: 11 }, color: "#378ADD" },
              min: 0,
            },
            yHours: {
              position: "right",
              grid: { drawOnChartArea: false },
              ticks: { font: { size: 11 }, color: "#EF9F27" },
              title: { display: true, text: "Total Hours", font: { size: 11 }, color: "#EF9F27" },
              min: 0,
            }
          }
        }
      });
    };

    if (window.Chart) {
      initChart();
    } else {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js";
      script.onload = initChart;
      document.head.appendChild(script);
    }

    return () => { if (chartRef.current) { chartRef.current.destroy(); chartRef.current=null; } };
  }, [year, JSON.stringify(activeData)]);

  if (activeData.length===0) return <div style={{fontSize:13,color:"var(--color-text-secondary)",textAlign:"center",padding:"2rem 0"}}>Tidak ada data untuk tahun ini.</div>;

  return <div>
    <div style={{display:"flex",gap:16,marginBottom:12,flexWrap:"wrap"}}>
      <div style={{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--color-text-secondary)"}}><span style={{width:12,height:12,borderRadius:3,background:"#378ADD",display:"inline-block"}}/> Jumlah Proyek (kiri)</div>
      <div style={{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--color-text-secondary)"}}><span style={{width:12,height:12,borderRadius:3,background:"#EF9F27",display:"inline-block"}}/> Total Hours (kanan)</div>
    </div>
    <div style={{position:"relative",width:"100%",height:220}}>
      <canvas ref={canvasRef}/>
    </div>
  </div>;
}

function PerTahunTab({projects, editMode, order, setOrder}) {
  const years = [...new Set(projects.map(p=>(p.startDate||"").slice(0,4)).filter(Boolean))].sort().reverse();
  const [year,setYear] = useState(years[0]||"");
  const [rates, setRates] = useState(loadUsdRates);
  const filtered = year ? projects.filter(p=>
    (p.startDate||"").startsWith(year) || (p.endDate||"").startsWith(year)
  ) : [];
  const rateVal = year ? (rates[year]||"") : "";
  const handleRateChange = (val) => {
    const cleaned = val.replace(/[^0-9.]/g,"");
    const updated = {...rates, [year]: cleaned};
    setRates(updated);
    saveUsdRates(updated);
  };
  const fmtRateDisplay = (val) => {
    if (!val) return "";
    const n = parseFloat(String(val).replace(/\./g,"").replace(",","."));
    if (isNaN(n)) return val;
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");
  };
  return <div>
    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16,flexWrap:"wrap"}}>
      <span style={{fontWeight:500,fontSize:14}}>Tahun</span>
      <select value={year} onChange={e=>setYear(e.target.value)} style={{fontSize:13,padding:"4px 8px",border:"0.5px solid var(--color-border-secondary)",borderRadius:6}}>
        {years.length===0&&<option value="">—</option>}
        {years.map(y=><option key={y} value={y}>{y}</option>)}
      </select>
      {year&&<div style={{display:"flex",alignItems:"center",gap:0,marginLeft:4,border:"1px solid var(--color-border-secondary)",borderRadius:8,overflow:"hidden",background:"var(--color-background-primary)"}}>
        <span style={{fontSize:12,color:"var(--color-text-secondary)",whiteSpace:"nowrap",padding:"4px 8px 4px 10px",background:"var(--color-background-secondary)",borderRight:"1px solid var(--color-border-secondary)"}}>rates (1$) = Rp</span>
        <input
          value={rateVal}
          onChange={e=>handleRateChange(e.target.value)}
          onBlur={e=>{
            const n = parseInt(String(e.target.value).replace(/\./g,"").replace(",","."));
            if (!isNaN(n)&&n>0) {
              const formatted = n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");
              const updated = {...rates,[year]:formatted};
              setRates(updated);
              saveUsdRates(updated);
            }
          }}
          placeholder="16.000"
          style={{width:"auto",minWidth:30,fontSize:13,padding:"4px 4px",border:"none",background:"transparent",color:"var(--color-text-primary)",outline:"none",textAlign:"left",flex:"0 1 auto"}}
        />
      </div>}
    </div>
    <AnalysisTabContent projects={filtered} year={year} usdRate={rateVal?parseFloat(String(rateVal).replace(/\./g,""))||0:0} editMode={editMode} order={order} setOrder={setOrder}/>
  </div>;
}

function PerBulanTab({projects, editMode, order, setOrder}) {
  const months = [...new Set(projects.map(p=>(p.startDate||"").slice(0,7)).filter(Boolean))].sort().reverse();
  const [month,setMonth] = useState(months[0]||"");
  const filtered = month ? projects.filter(p=>(p.startDate||"").startsWith(month)) : [];
  const label = m => { if(!m) return "—"; const [y,mo]=m.split("-"); return `${["","Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"][parseInt(mo)]} ${y}`; };
  return <div>
    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
      <span style={{fontWeight:500,fontSize:14}}>Bulan</span>
      <select value={month} onChange={e=>setMonth(e.target.value)} style={{fontSize:13,padding:"4px 8px",border:"0.5px solid var(--color-border-secondary)",borderRadius:6}}>
        {months.length===0&&<option value="">—</option>}
        {months.map(m=><option key={m} value={m}>{label(m)}</option>)}
      </select>
    </div>
    <AnalysisTabContent projects={filtered} editMode={editMode} order={order} setOrder={setOrder} isMonth={true}/>
  </div>;
}

function YearComparisonModal({projects, onClose}) {
  const allYears = [...new Set(projects.map(p=>(p.startDate||"").slice(0,4)).filter(Boolean))].sort().reverse();
  const [yr1, setYr1] = useState(allYears[1]||allYears[0]||"");
  const [yr2, setYr2] = useState(allYears[0]||"");
  const canvasRef = useRef(null);
  const chartRef  = useRef(null);
  const canvasRef2 = useRef(null);
  const chartRef2  = useRef(null);

  const p1 = projects.filter(p=>(p.startDate||"").startsWith(yr1));
  const p2 = projects.filter(p=>(p.startDate||"").startsWith(yr2));

  const parseGross = v => { if (!v) return 0; return parseInt(String(v).replace(/\D/g,""))||0; };
  const parseFee   = arr => normalizeFeeArr(arr).reduce((s,f)=>{ const n=parseInt(String(f.name||"").replace(/\D/g,""))||0; return s+n; },0);

  const stat = (ps) => ({
    income:    ps.reduce((s,p)=>s+parseRp(p.priceRp),0),
    gross:     ps.reduce((s,p)=>s+parseGross(p.grossPrice),0),
    expenses:  ps.reduce((s,p)=>s+parseFee(p.fee),0),
    count:     ps.length,
    completed: ps.filter(p=>p.status==="Completed").length,
    hours:     ps.reduce((s,p)=>s+(parseFloat(p.hours)||0),0),
  });
  const s1 = stat(p1), s2 = stat(p2);

  const delta = (a,b) => {
    if (!a||!b) return null;
    const d = Math.round((b-a)/a*100);
    return {pct:d, up:d>=0};
  };

  const months = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];
  const monthIncome = (ps, m) => ps.filter(p=>(p.startDate||"").slice(5,7)===String(m+1).padStart(2,"0")).reduce((s,p)=>s+parseRp(p.priceRp),0);
  const monthCount  = (ps, m) => ps.filter(p=>(p.startDate||"").slice(5,7)===String(m+1).padStart(2,"0")).length;

  const dep = [yr1, yr2, JSON.stringify(p1.map(p=>p.id)), JSON.stringify(p2.map(p=>p.id))];

  useEffect(()=>{
    if (!canvasRef.current) return;
    if (chartRef.current){chartRef.current.destroy();chartRef.current=null;}
    const init = () => {
      if (!window.Chart||!canvasRef.current) return;
      chartRef.current = new window.Chart(canvasRef.current,{
        type:"bar",
        data:{ labels:months, datasets:[
          { label:yr1||"Tahun 1", data:months.map((_,i)=>monthIncome(p1,i)), backgroundColor:"#378ADD", borderRadius:2, barPercentage:0.75, categoryPercentage:0.65 },
          { label:yr2||"Tahun 2", data:months.map((_,i)=>monthIncome(p2,i)), backgroundColor:"#1D9E75", borderRadius:2, barPercentage:0.75, categoryPercentage:0.65 }
        ]},
        options:{
          responsive:true, maintainAspectRatio:false, layout:{padding:{top:8}},
          plugins:{ legend:{display:false}, tooltip:{callbacks:{label:ctx=>`${ctx.dataset.label}: Rp ${fmtRp(ctx.parsed.y)}`}} },
          scales:{
            x:{ grid:{color:"rgba(128,128,128,0.08)"}, ticks:{font:{size:10},color:"#888",autoSkip:false,maxRotation:0} },
            y:{ grid:{color:"rgba(128,128,128,0.08)"}, ticks:{font:{size:10},color:"#888",callback:v=>v>=1000000?`${(v/1000000).toFixed(0)}jt`:v>=1000?`${Math.round(v/1000)}rb`:`${v}`}, min:0 }
          }
        }
      });
    };
    if (window.Chart) init();
    else { const s=document.createElement("script"); s.src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"; s.onload=init; document.head.appendChild(s); }
    return ()=>{ if(chartRef.current){chartRef.current.destroy();chartRef.current=null;} };
  },dep);

  useEffect(()=>{
    if (!canvasRef2.current) return;
    if (chartRef2.current){chartRef2.current.destroy();chartRef2.current=null;}
    const init = () => {
      if (!window.Chart||!canvasRef2.current) return;
      chartRef2.current = new window.Chart(canvasRef2.current,{
        type:"bar",
        data:{ labels:months, datasets:[
          { label:yr1||"Tahun 1", data:months.map((_,i)=>monthCount(p1,i)), backgroundColor:"#378ADD", borderRadius:2, barPercentage:0.75, categoryPercentage:0.65 },
          { label:yr2||"Tahun 2", data:months.map((_,i)=>monthCount(p2,i)), backgroundColor:"#1D9E75", borderRadius:2, barPercentage:0.75, categoryPercentage:0.65 }
        ]},
        options:{
          responsive:true, maintainAspectRatio:false, layout:{padding:{top:8}},
          plugins:{ legend:{display:false}, tooltip:{callbacks:{label:ctx=>`${ctx.dataset.label}: ${ctx.parsed.y} proyek`}} },
          scales:{
            x:{ grid:{color:"rgba(128,128,128,0.08)"}, ticks:{font:{size:10},color:"#888",autoSkip:false,maxRotation:0} },
            y:{ grid:{color:"rgba(128,128,128,0.08)"}, ticks:{font:{size:10},color:"#888",stepSize:1}, min:0 }
          }
        }
      });
    };
    if (window.Chart) init(); else setTimeout(init, 500);
    return ()=>{ if(chartRef2.current){chartRef2.current.destroy();chartRef2.current=null;} };
  },dep);

  const selSt = {fontSize:13,padding:"6px 10px",border:"1.5px solid #000",borderRadius:8,background:"var(--color-background-primary)",color:"var(--color-text-primary)",cursor:"pointer",fontWeight:500};
  const metricSt = {background:"var(--color-background-secondary)",borderRadius:8,padding:"10px 14px",flex:1};
  const rowSt = {display:"flex",alignItems:"center",justifyContent:"space-between",padding:"9px 14px",background:"var(--color-background-primary)",borderRadius:8,border:"0.5px solid var(--color-border-tertiary)"};

  const DeltaBadge = ({a,b}) => {
    const d = delta(a,b);
    if (!d) return null;
    return <span style={{fontSize:10,fontWeight:500,borderRadius:20,padding:"2px 7px",background:d.up?"#f0fdf4":"#fef2f2",color:d.up?"#166534":"#991b1b",marginLeft:6}}>{d.up?"+":""}{d.pct}%</span>;
  };

  return <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.55)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"}}>
    <div onClick={e=>e.stopPropagation()} style={{background:"rgba(255,255,255,0.92)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",borderRadius:16,padding:"24px 28px",width:"100%",maxWidth:640,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 8px 40px rgba(0,0,0,0.18)"}}>

      {/* Header */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20}}>
        <span style={{fontWeight:500,fontSize:16}}>Perbandingan Tahun</span>
        <button onClick={onClose} style={{padding:"4px 6px",border:"none",background:"transparent",cursor:"pointer",color:"var(--color-text-secondary)"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
      </div>

      {/* Year selectors */}
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span style={{width:10,height:10,borderRadius:2,background:"#378ADD",display:"inline-block",flexShrink:0}}/>
          <select value={yr1} onChange={e=>setYr1(e.target.value)} style={selSt}>
            {allYears.map(y=><option key={y} value={y}>{y}</option>)}
          </select>
        </div>
        <span style={{fontSize:13,color:"var(--color-text-secondary)"}}>vs</span>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span style={{width:10,height:10,borderRadius:2,background:"#1D9E75",display:"inline-block",flexShrink:0}}/>
          <select value={yr2} onChange={e=>setYr2(e.target.value)} style={selSt}>
            {allYears.map(y=><option key={y} value={y}>{y}</option>)}
          </select>
        </div>
      </div>

      {/* KPI cards */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:20}}>
        {[
          {label:"Total Income", a:s1.income, b:s2.income, fmt:v=>`Rp ${fmtRp(v)}`},
          {label:"Jumlah Proyek", a:s1.count, b:s2.count, fmt:v=>`${v} proyek`},
          {label:"Total Hours", a:s1.hours, b:s2.hours, fmt:v=>`${Math.round(v)} jam`},
        ].map(({label,a,b,fmt})=><div key={label} style={{...metricSt,background:"#E6F1FB"}}>
          <div style={{fontSize:11,color:"#185FA5",marginBottom:6,textTransform:"uppercase",letterSpacing:"0.05em",fontWeight:500}}>{label}</div>
          <div style={{display:"flex",flexDirection:"column",gap:4}}>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <span style={{width:8,height:8,borderRadius:2,background:"#378ADD",display:"inline-block",flexShrink:0}}/>
              <span style={{fontSize:13,fontWeight:500,color:"var(--color-text-primary)"}}>{fmt(a)}</span>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <span style={{width:8,height:8,borderRadius:2,background:"#1D9E75",display:"inline-block",flexShrink:0}}/>
              <span style={{fontSize:13,fontWeight:500,color:"var(--color-text-primary)"}}>{fmt(b)}</span>
              <DeltaBadge a={a} b={b}/>
            </div>
          </div>
        </div>)}
      </div>

      {/* Ringkasan Keuangan */}
      <div style={{fontSize:11,color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",fontWeight:500,marginBottom:8}}>Ringkasan Keuangan</div>
      <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:20}}>
        {[
          {label:"Gross Income",   a:s1.gross,    b:s2.gross,    fmt:v=>`Rp ${fmtRp(v)}`, danger:false},
          {label:"Nett Income",    a:s1.income,   b:s2.income,   fmt:v=>`Rp ${fmtRp(v)}`, danger:false},
          {label:"Total Expenses", a:s1.expenses, b:s2.expenses, fmt:v=>`Rp ${fmtRp(v)}`, danger:true},
        ].map(({label,a,b,fmt,danger})=><div key={label} style={rowSt}>
          <span style={{fontSize:12,color:"var(--color-text-secondary)",fontWeight:500,minWidth:110}}>{label}</span>
          <div style={{display:"flex",gap:20,alignItems:"center"}}>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <span style={{width:8,height:8,borderRadius:2,background:"#378ADD",display:"inline-block",flexShrink:0}}/>
              <span style={{fontSize:13,fontWeight:500,color:danger?"var(--color-text-danger)":"var(--color-text-primary)"}}>{fmt(a)}</span>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <span style={{width:8,height:8,borderRadius:2,background:"#1D9E75",display:"inline-block",flexShrink:0}}/>
              <span style={{fontSize:13,fontWeight:500,color:danger?"var(--color-text-danger)":"var(--color-text-primary)"}}>{fmt(b)}</span>
              <DeltaBadge a={a} b={b}/>
            </div>
          </div>
        </div>)}
      </div>

      {/* Bar chart income per bulan */}
      <div style={{fontSize:11,color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",fontWeight:500,marginBottom:10}}>Income per bulan</div>
      <div style={{position:"relative",width:"100%",height:180}}>
        <canvas ref={canvasRef}/>
      </div>

      {/* Bar chart total proyek per bulan */}
      <div style={{fontSize:11,color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",fontWeight:500,margin:"20px 0 10px"}}>Total proyek per bulan</div>
      <div style={{position:"relative",width:"100%",height:140}}>
        <canvas ref={canvasRef2}/>
      </div>

      {/* Proyek breakdown — dot + angka */}
      <div style={{marginTop:20,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16}}>
        {[
          {label:"Per Platform", cats:["Upwork","Fiverr","Freelance"],  field:"platform"},
          {label:"Per Status",   cats:statusOptions,                     field:"status"},
          {label:"Per Scope",    cats:[...new Set(projects.map(p=>p.jobType).filter(Boolean))].sort(), field:"jobType"},
        ].map(({label,cats,field})=><div key={label}>
          <div style={{fontSize:11,color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",fontWeight:500,marginBottom:8}}>{label}</div>
          <div style={{display:"flex",flexDirection:"column",gap:7}}>
            {cats.map(cat=>{
              const c1 = p1.filter(p=>p[field]===cat).length;
              const c2 = p2.filter(p=>p[field]===cat).length;
              if (c1===0&&c2===0) return null;
              return <div key={cat} style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <span style={{fontSize:12,color:"var(--color-text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:80}}>{cat}</span>
                <div style={{display:"flex",gap:8,alignItems:"center",flexShrink:0}}>
                  <span style={{fontSize:13,fontWeight:500,color:"#378ADD"}}>{c1}</span>
                  <span style={{fontSize:11,color:"var(--color-text-tertiary)"}}>/</span>
                  <span style={{fontSize:13,fontWeight:500,color:"#1D9E75"}}>{c2}</span>
                </div>
              </div>;
            })}
          </div>
        </div>)}
      </div>

    </div>
  </div>;
}

function AnalysisPage({projects}) {
  const [mainTab,setMainTab] = useState("pertahun");
  const [showCompare, setShowCompare] = useState(false);

  window._analysisOrder = null;
  const defaultOrder = ["incomemonthly","platform","income","incomevsexpenses","incometarget","monthly","clients","scopetype","team","hargam2","area","durasi","upwork"];
  const [order, setOrder] = useState(()=>{
    try {
      const s=window._analysisOrder;
      if (!s) return defaultOrder;
      const saved = JSON.parse(s);
      const newCards = defaultOrder.filter(id=>!saved.includes(id));
      if (newCards.length===0) return saved;
      const result = [...saved];
      newCards.forEach(id=>{
        const idx = defaultOrder.indexOf(id);
        const anchor = defaultOrder.slice(0,idx).reverse().find(a=>result.includes(a));
        const insertAt = anchor ? result.indexOf(anchor)+1 : 0;
        result.splice(insertAt,0,id);
      });
      return result;
    } catch(e){ return defaultOrder; }
  });
  const [editMode, setEditMode] = useState(false);
  useEffect(()=>{ window._analysisOrder=JSON.stringify(order); },[order]);

  return <div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16}}>
      <div style={{fontWeight:500,fontSize:20}}>Analysis</div>
      <div style={{display:"flex",gap:8}}>
        <button
          onClick={()=>setShowCompare(true)}
          style={{fontSize:12,padding:"4px 14px",borderRadius:20,border:"0.5px solid",cursor:"pointer",background:"transparent",color:"var(--color-text-secondary)",borderColor:"var(--color-border-secondary)"}}>
          ⇄ Bandingkan Tahun
        </button>
        <button
          onClick={()=>setEditMode(v=>!v)}
          style={{fontSize:12,padding:"4px 14px",borderRadius:20,border:"0.5px solid",cursor:"pointer",
            background:editMode?"#222":"transparent",
            color:editMode?"#fff":"var(--color-text-secondary)",
            borderColor:editMode?"#222":"var(--color-border-secondary)"}}>
          {editMode?"✓ Selesai":"⠿ Atur Urutan"}
        </button>
      </div>
    </div>
    {showCompare&&<YearComparisonModal projects={projects} onClose={()=>setShowCompare(false)}/>}
    <div style={{display:"flex",gap:0,marginBottom:20,borderBottom:"0.5px solid var(--color-border-tertiary)"}}>
      {[["pertahun","Per Tahun"],["perbulan","Per Bulan"]].map(([id,label])=>
        <button key={id} onClick={()=>setMainTab(id)} style={tabBtn(mainTab===id)}>{label}</button>
      )}
      <button onClick={()=>setMainTab("alltime")} style={{...tabBtn(mainTab==="alltime"),marginLeft:"auto"}}> All Time</button>
    </div>
    {mainTab==="alltime"&&<AllTimeTab projects={projects} editMode={editMode} order={order} setOrder={setOrder}/>}
    {mainTab==="pertahun"&&<PerTahunTab projects={projects} editMode={editMode} order={order} setOrder={setOrder}/>}
    {mainTab==="perbulan"&&<PerBulanTab projects={projects} editMode={editMode} order={order} setOrder={setOrder}/>}
  </div>;
}

function CollapsibleCard({title,children,defaultOpen=true,dragIcon=null}) {
  const [open,setOpen] = useState(defaultOpen);
  return <div style={{border:"2px solid #000",borderRadius:12,overflow:"hidden",boxShadow:"0 2px 8px rgba(0,0,0,0.07)"}}>
    <div onClick={()=>setOpen(v=>!v)} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",cursor:"pointer",background:"var(--color-background-secondary)",userSelect:"none"}}>
      <span style={{display:"flex",alignItems:"center",gap:8}}>
        {dragIcon&&<span style={{fontSize:16,letterSpacing:2,color:"#bbb",cursor:"grab"}} onClick={e=>e.stopPropagation()}>{dragIcon}</span>}
        <span style={{fontWeight:500,fontSize:14}}>{title}</span>
      </span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{transform:open?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s"}}><polyline points="6 9 12 15 18 9"/></svg>
    </div>
    {open&&<div style={{padding:"16px"}}>{children}</div>}
  </div>;
}

function TabelPage({projects}) {
  return <div>
    <div style={{fontWeight:500,fontSize:20,marginBottom:20}}>Tabel</div>
    <CollapsibleCard title="Area">
      <AreaTab projects={projects}/>
    </CollapsibleCard>
    <CollapsibleCard title="Durasi Pengerjaan" defaultOpen={false}>
      <DurasiTab projects={projects}/>
    </CollapsibleCard>
  </div>;
}

const COUNTRY_ISO = {
  "Afghanistan":"004",  "Albania":"008",  "Algeria":"012",  "Angola":"024",  "Argentina":"032",
  "Armenia":"051",  "Australia":"036",  "Austria":"040",  "Azerbaijan":"031",  "Bahamas":"044",
  "Bahrain":"048",  "Bangladesh":"050",  "Barbados":"052",  "Belarus":"112",  "Belgium":"056",
  "Bolivia":"068",  "Bosnia":"070",  "Botswana":"072",  "Brazil":"076",  "Brunei":"096",
  "Bulgaria":"100",  "Cambodia":"116",  "Cameroon":"120",  "Canada":"124",  "Chile":"152",
  "China":"156",  "Colombia":"170",  "Costa Rica":"188",  "Croatia":"191",  "Cuba":"192",
  "Cyprus":"196",  "Czech Republic":"203",  "Denmark":"208",  "Dominican Republic":"214",  "Ecuador":"218",
  "Egypt":"818",  "El Salvador":"222",  "Estonia":"233",  "Ethiopia":"231",  "Fiji":"242",
  "Finland":"246",  "France":"250",  "Georgia":"268",  "Germany":"276",  "Ghana":"288",
  "Greece":"300",  "Guatemala":"320",  "Haiti":"332",  "Honduras":"340",  "Hong Kong":"344",
  "Hungary":"348",  "Iceland":"352",  "India":"356",  "Indonesia":"360",  "Iran":"364",
  "Iraq":"368",  "Ireland":"372",  "Israel":"376",  "Italy":"380",  "Ivory Coast":"384",
  "Jamaica":"388",  "Japan":"392",  "Jordan":"400",  "Kazakhstan":"398",  "Kenya":"404",
  "Kuwait":"414",  "Kyrgyzstan":"417",  "Laos":"418",  "Lebanon":"422",  "Libya":"434",
  "Luxembourg":"442",  "Madagascar":"450",  "Malaysia":"458",  "Maldives":"462",  "Malta":"470",
  "Mexico":"484",  "Moldova":"498",  "Mongolia":"496",  "Morocco":"504",  "Mozambique":"508",
  "Myanmar":"104",  "Namibia":"516",  "Nepal":"524",  "Netherlands":"528",  "New Zealand":"554",
  "Nicaragua":"558",  "Nigeria":"566",  "North Macedonia":"807",  "Norway":"578",  "Oman":"512",
  "Pakistan":"586",  "Palestine":"275",  "Panama":"591",  "Papua New Guinea":"598",  "Paraguay":"600",
  "Peru":"604",  "Philippines":"608",  "Poland":"616",  "Portugal":"620",  "Qatar":"634",
  "Romania":"642",  "Russia":"643",  "Rwanda":"646",  "Saudi Arabia":"682",  "Senegal":"686",
  "Serbia":"688",  "Singapore":"702",  "Slovakia":"703",  "Slovenia":"705",  "Somalia":"706",
  "South Africa":"710",  "South Korea":"410",  "Spain":"724",  "Sri Lanka":"144",  "Sudan":"729",
  "Sweden":"752",  "Switzerland":"756",  "Syria":"760",  "Taiwan":"158",  "Tajikistan":"762",
  "Tanzania":"834",  "Thailand":"764",  "Trinidad and Tobago":"780",  "Tunisia":"788",  "Turkey":"792",
  "Turkmenistan":"795",  "UAE":"784",  "Uganda":"800",  "Ukraine":"804",  "United Kingdom":"826",
  "United States":"840",  "Uruguay":"858",  "Uzbekistan":"860",  "Venezuela":"862",  "Vietnam":"704",
  "Yemen":"887",  "Zambia":"894",  "Zimbabwe":"716",
};

function ClientMapTab({projects}) {
  const mapRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const [libLoaded, setLibLoaded] = useState(false);

  const countryCounts = {};
  projects.forEach(p => {
    const addr = (p.address||"").trim();
    if (!addr) return;
    const iso = COUNTRY_ISO[addr];
    if (!iso) return;
    if (!countryCounts[iso]) countryCounts[iso] = {count:0, projects:[], name:addr};
    countryCounts[iso].count++;
    countryCounts[iso].projects.push(p);
  });

  const maxCount = Math.max(1, ...Object.values(countryCounts).map(v=>v.count));
  const colorScale = (count) => {
    const t = count / maxCount;
    const light = [181,212,244];
    const dark  = [12,68,124];
    return `rgb(${Math.round(light[0]+(dark[0]-light[0])*t)},${Math.round(light[1]+(dark[1]-light[1])*t)},${Math.round(light[2]+(dark[2]-light[2])*t)})`;
  };

  const sortedCountries = Object.entries(countryCounts).sort((a,b)=>b[1].count-a[1].count);

  useEffect(()=>{
    const loadLib = (src, key, cb) => {
      if (window[key]) { cb(); return; }
      const s = document.createElement("script");
      s.src = src; s.onload = cb;
      document.head.appendChild(s);
    };
    loadLib("https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js","d3",()=>{
      loadLib("https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js","topojson",()=>{
        setLibLoaded(true);
      });
    });
  },[]);

  useEffect(()=>{
    if (!libLoaded || !mapRef.current) return;
    const d3 = window.d3;
    const topojson = window.topojson;
    const container = mapRef.current;
    while (container.firstChild) container.removeChild(container.firstChild);
    const w = container.offsetWidth || 560;
    const h = Math.round(w * 0.5);
    const svg = d3.select(container).append("svg")
      .attr("viewBox",`0 0 ${w} ${h}`)
      .attr("width","100%");
    const proj = d3.geoNaturalEarth1().scale(w/6.4).translate([w/2, h/2]);
    const path = d3.geoPath(proj);
    d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then(world=>{
      const features = topojson.feature(world, world.objects.countries).features;
      svg.selectAll("path").data(features).join("path")
        .attr("d", path)
        .attr("fill", d => {
          const iso = String(d.id).padStart(3,"0");
          return countryCounts[iso] ? colorScale(countryCounts[iso].count) : "#e2e8f0";
        })
        .attr("stroke","#fff")
        .attr("stroke-width", 0.4)
        .style("cursor", d => countryCounts[String(d.id).padStart(3,"0")] ? "pointer" : "default")
        .on("mouseover", function(e,d) {
          const iso = String(d.id).padStart(3,"0");
          if (countryCounts[iso]) d3.select(this).attr("fill","#185FA5");
        })
        .on("mouseout", function(e,d) {
          const iso = String(d.id).padStart(3,"0");
          d3.select(this).attr("fill", countryCounts[iso] ? colorScale(countryCounts[iso].count) : "#e2e8f0");
        })
        .on("click", (e,d) => {
          const iso = String(d.id).padStart(3,"0");
          if (countryCounts[iso]) setSelected(s => s===iso ? null : iso);
        });
    });
  },[libLoaded, JSON.stringify(countryCounts)]);

  const sel = selected ? countryCounts[selected] : null;
  const cardSt = {background:"var(--color-background-primary)",border:"0.5px solid var(--color-border-tertiary)",borderRadius:12,padding:"14px 16px"};

  return <div style={{display:"flex",flexDirection:"column",gap:14}}>
    {/* Full-width map */}
    <div style={{border:"0.5px solid var(--color-border-tertiary)",borderRadius:12,overflow:"hidden",background:"#f0f4f8",width:"100%"}}>
      <div ref={mapRef} style={{width:"100%"}}/>
      {!libLoaded&&<div style={{padding:"3rem",textAlign:"center",fontSize:13,color:"#888"}}>Memuat peta...</div>}
    </div>

    {/* Bottom: sebaran klien list + selected detail side by side */}
    <div style={{display:"grid",gridTemplateColumns:sel?"1fr 1fr":"1fr",gap:14}}>
      <div style={cardSt}>
        <div style={{fontSize:11,color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.05em",fontWeight:500,marginBottom:10}}>Sebaran Klien</div>
        {sortedCountries.length===0
          ? <div style={{fontSize:12,color:"var(--color-text-secondary)"}}>Belum ada data lokasi.</div>
          : <div style={{display:"flex",flexWrap:"wrap",gap:"2px 0"}}>
              {sortedCountries.map(([iso,data])=><div key={iso} onClick={()=>setSelected(s=>s===iso?null:iso)}
                style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"5px 10px 5px 0",
                  cursor:"pointer",width:"50%",borderBottom:"0.5px solid var(--color-border-tertiary)",
                  background:selected===iso?"var(--color-background-secondary)":"transparent"}}>
                <div style={{display:"flex",alignItems:"center",gap:7}}>
                  <span style={{width:10,height:10,borderRadius:2,background:colorScale(data.count),display:"inline-block",flexShrink:0,border:"0.5px solid rgba(0,0,0,0.1)"}}/>
                  <span style={{fontSize:12,color:"var(--color-text-primary)",fontWeight:selected===iso?500:400}}>{data.name}</span>
                </div>
                <span style={{fontSize:12,fontWeight:500,color:"var(--color-text-secondary)"}}>{data.count}×</span>
              </div>)}
            </div>
        }
        <div style={{marginTop:10,fontSize:11,color:"var(--color-text-tertiary)"}}>Abu-abu = tidak ada proyek · Klik negara untuk detail</div>
      </div>

      {sel&&<div style={cardSt}>
        <div style={{fontSize:11,color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.05em",fontWeight:500,marginBottom:10}}>{sel.name} · {sel.count} proyek</div>
        <div style={{display:"flex",flexDirection:"column",gap:6}}>
          {sel.projects.map(p=><div key={p.id} style={{fontSize:12,borderBottom:"0.5px solid var(--color-border-tertiary)",paddingBottom:5}}>
            <div style={{fontWeight:500,color:"var(--color-text-primary)"}}>{p.clientName||"—"}</div>
            <div style={{color:"var(--color-text-secondary)",marginTop:2}}>{p.projectName||"—"}</div>
          </div>)}
        </div>
      </div>}
    </div>
  </div>;
}

function ClientPage({projects:allProjects=[]}) {
  // clientMeta stores extra info (note, rating) keyed by lowercase name
  const [clientMeta, setClientMeta] = useState(()=>{
    try{const s=window._clientMeta;if(s){const p=JSON.parse(s);if(Object.keys(p).length>0)return p;}}catch(e){}
    // migrate from old _clientData if exists
    try{const s=window._clientData;if(s){const arr=JSON.parse(s);const m={};arr.forEach(c=>{if(c.name)m[c.name.toLowerCase()]={note:c.note||"",rating:c.rating||0};});return m;}}catch(e){}
    return seedClientMeta;
  });
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({type:"",name:"",platform:"",note:"",rating:0});
  const [aiLoading, setAiLoading] = useState(false);
  const aiTimer = useRef(null);
  const [filterRating, setFilterRating] = useState("all");

  useEffect(()=>{window._clientMeta=JSON.stringify(clientMeta);},[clientMeta]);

  // Derive clients directly from allProjects — always fresh, no stale names
  // Group by clientName (case-insensitive), take latest project info
  const clients = (() => {
    const map = new Map();
    // Sort projects by startDate ascending so latest overwrites earlier
    const sorted = [...allProjects].sort((a,b)=>(a.startDate||"").localeCompare(b.startDate||"")||a.id-b.id);
    for (const p of sorted) {
      const name = (p.clientName||"").trim();
      if (!name) continue;
      const key = name.toLowerCase();
      const existing = map.get(key);
      map.set(key, {
        key,
        name, // always use latest spelling from project card
        type: p.clientType||"",
        platform: p.platform||"",
        latestDate: p.startDate||"",
        projectCount: (existing?.projectCount||0)+1,
        id: existing?.id||(p.id*1000+Math.random()*999|0),
      });
    }
    // Attach meta (note, rating) and sort by latestDate descending
    return [...map.values()]
      .map(c=>({...c, note:(clientMeta[c.key]||{}).note||"", rating:(clientMeta[c.key]||{}).rating||0}))
      .sort((a,b)=>b.latestDate.localeCompare(a.latestDate)||a.name.localeCompare(b.name));
  })();

  const openAdd = () => { setEditing(null); setForm({type:"",name:"",platform:"",note:"",rating:0}); setModal(true); };
  const openEdit = (c) => { setEditing(c.key); setForm({type:c.type||"",name:c.name||"",platform:c.platform||"",note:c.note||"",rating:c.rating||0}); setModal(true); };
  const save = () => {
    if (editing) setClientMeta(m=>({...m,[editing]:{...(m[editing]||{}),note:form.note,rating:form.rating}}));
    setModal(false);
  };

  const setRating = (key, rating) => setClientMeta(m=>({...m,[key]:{...(m[key]||{}),rating}}));

  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);
  const showToast = (msg, undoFn=null) => { clearTimeout(toastTimer.current); setToast({msg,undoFn}); toastTimer.current=setTimeout(()=>setToast(null),4000); };
  const del = (key) => {
    const c = clients.find(x=>x.key===key);
    showToast(`"${c?.name||"Client"}" dihapus (hapus dari Project Card untuk menghilangkan dari list)`);
  };

  const inp = {width:"100%",boxSizing:"border-box",fontSize:13,padding:"7px 10px",border:"1.5px solid #000",borderRadius:6,background:"#fff",outline:"none"};

  const handleNameChange = (name) => {
    setForm(f=>({...f,name}));
    clearTimeout(aiTimer.current);
    if (name.trim().length < 2) return;
    aiTimer.current = setTimeout(async()=>{
      setAiLoading(true);
      try {
        const res = await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:100,system:`You are a helper that detects client type and platform from a client name.\
Reply ONLY with a JSON object like: {"type":"Owner","platform":"Upwork"}\
Type must be one of: Owner, Consultant, Contractor, Developer\
Platform must be one of: Upwork, Fiverr, Freelance\
Use context clues from the name (e.g. foreign names → Upwork/Fiverr, local names → Freelance).\
If unclear, make your best guess. No explanation, just JSON.`,messages:[{role:"user",content:`Client name: "${name}"`}]})});
        const data = await res.json();
        const text = data.content?.[0]?.text||"{}";
        const parsed = JSON.parse(text.replace(/```json|```/g,"").trim());
        setForm(f=>({...f, type:f.type||parsed.type||f.type, platform:f.platform||parsed.platform||f.platform}));
      } catch(e){}
      setAiLoading(false);
    }, 800);
  };

  const [clientTab, setClientTab] = useState("tabel");

  const filtered = clients.filter(c=>{
    if (filterRating==="5") return c.rating===5;
    if (filterRating==="4") return (c.rating||0)>=4;
    if (filterRating==="3") return (c.rating||0)>=3;
    if (filterRating==="unrated") return !c.rating;
    return true;
  });
  const totalClients = clients.length;

  const thSt = {padding:"10px 14px",fontWeight:600,fontSize:11,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-text-secondary)"};
  const tabPill = (active) => ({fontSize:12,padding:"4px 14px",borderRadius:20,border:"1.5px solid",cursor:"pointer",background:active?"#111":"transparent",color:active?"#fff":"var(--color-text-secondary)",borderColor:active?"#111":"var(--color-border-secondary)"});

  return <div>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <div style={{display:"flex",alignItems:"baseline",gap:10}}><div style={{fontWeight:500,fontSize:20}}>Client</div><div style={{fontWeight:500,fontSize:28,color:"var(--color-text-primary)",lineHeight:1}}>{totalClients}</div></div>
        <div style={{display:"flex",gap:6}}>
          <button style={tabPill(clientTab==="tabel")} onClick={()=>setClientTab("tabel")}>Tabel</button>
          <button style={tabPill(clientTab==="peta")} onClick={()=>setClientTab("peta")}>Peta</button>
        </div>
      </div>
      <div style={{display:"flex",gap:8,alignItems:"center"}}>
        {clientTab==="tabel"&&<select value={filterRating} onChange={e=>setFilterRating(e.target.value)} style={{fontSize:12,padding:"5px 8px",border:"0.5px solid var(--color-border-secondary)",borderRadius:6,background:"var(--color-background-primary)",color:"var(--color-text-primary)",cursor:"pointer"}}>
          <option value="all">Rating (Semua)</option>
          <option value="5">★ 5 saja</option>
          <option value="4">★ 4+</option>
          <option value="3">★ 3+</option>
          <option value="unrated">Belum dirating</option>
        </select>}
        {clientTab==="tabel"&&<button onClick={openAdd} style={{fontSize:13,padding:"7px 18px"}}>+ Add Client</button>}
      </div>
    </div>

    {toast&&<div style={{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",background:"#111",color:"#fff",borderRadius:10,padding:"10px 18px",fontSize:13,display:"flex",alignItems:"center",gap:12,zIndex:99999,boxShadow:"0 4px 16px rgba(0,0,0,0.25)"}}>
      <span>{toast.msg}</span>
      {toast.undoFn&&<button onClick={toast.undoFn} style={{fontSize:12,padding:"3px 10px",background:"#fff",color:"#111",border:"none",borderRadius:6,cursor:"pointer",fontWeight:500}}>Undo</button>}
    </div>}

    {clientTab==="peta"&&<ClientMapTab projects={allProjects}/>}

    {clientTab==="tabel"&&<div style={{border:"2px solid #000",borderRadius:12,overflow:"hidden",boxShadow:"0 2px 8px rgba(0,0,0,0.07)"}}>
      <table style={{width:"100%",borderCollapse:"collapse",fontSize:13,tableLayout:"fixed"}}>
        <thead>
          <tr style={{background:"var(--color-background-secondary)",borderBottom:"2px solid #000"}}>
            <th style={{...thSt,width:32}}>No</th>
            <th style={{...thSt,width:52,textAlign:"center"}}>Platform</th>
            <th style={{...thSt,width:110}}>Type</th>
            <th style={{...thSt,width:100}}>Name</th>
            <th style={{...thSt,width:120,textAlign:"center"}}>Rating</th>
            <th style={thSt}>Note</th>
            <th style={{...thSt,width:72,textAlign:"right"}}></th>
          </tr>
        </thead>
        <tbody>
          {filtered.length===0
            ? <tr><td colSpan={7} style={{padding:"2rem",textAlign:"center",color:"var(--color-text-secondary)",fontSize:13}}>{clients.length===0?"Belum ada client. Klik \"+ Add Client\" untuk menambah.":"Tidak ada client yang cocok dengan filter ini."}</td></tr>
            : filtered.map((c,i)=><tr key={c.key} style={{borderBottom:"0.5px solid var(--color-border-tertiary)",background:i%2===0?"transparent":"var(--color-background-secondary)"}}>
                <td style={{padding:"10px 14px",color:"var(--color-text-secondary)",fontWeight:500}}>{i+1}</td>
                <td style={{padding:"10px 14px",textAlign:"center"}}><div style={{display:"flex",justifyContent:"center"}}>{c.platform?<PlatformIcon platform={c.platform} size={16}/>:<span style={{color:"var(--color-text-secondary)"}}>—</span>}</div></td>
                <td style={{padding:"10px 14px"}}>{c.type?<span style={{fontSize:11,fontWeight:500,borderRadius:20,padding:"2px 9px",background:getTypeColor(c.type).bg,color:getTypeColor(c.type).text}}>{c.type}</span>:"—"}</td>
                <td style={{padding:"10px 14px",fontWeight:500}}>{c.name||"—"}{c.projectCount>1&&<span style={{fontSize:10,color:"var(--color-text-secondary)",marginLeft:5,fontWeight:400}}>({c.projectCount}×)</span>}</td>
                <td style={{padding:"6px 14px",textAlign:"center"}}>
                  <div style={{display:"flex",gap:1,justifyContent:"center",alignItems:"center"}}>
                    {[1,2,3,4,5].map(star=>(
                      <span key={star} onClick={()=>setRating(c.key, c.rating===star?0:star)}
                        style={{fontSize:18,cursor:"pointer",color:(c.rating||0)>=star?"#f59e0b":"var(--color-border-secondary)",lineHeight:1,transition:"color 0.1s"}}
                        onMouseEnter={e=>e.currentTarget.style.color="#f59e0b"}
                        onMouseLeave={e=>e.currentTarget.style.color=(c.rating||0)>=star?"#f59e0b":"var(--color-border-secondary)"}>★</span>
                    ))}
                    {!c.rating&&<span style={{fontSize:11,color:"var(--color-text-secondary)",marginLeft:4,fontStyle:"italic"}}>—</span>}
                  </div>
                </td>
                <td style={{padding:"10px 14px",color:"var(--color-text-secondary)",wordBreak:"break-word"}}>{c.note||"—"}</td>
                <td style={{padding:"10px 12px",textAlign:"right",whiteSpace:"nowrap"}}>
                  <div style={{display:"flex",gap:2,justifyContent:"flex-end"}}>
                    <button onClick={()=>openEdit(c)} title="Edit" style={{padding:"4px 5px",border:"none",background:"transparent",cursor:"pointer",color:"#888"}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                  </div>
                </td>
              </tr>)
          }
        </tbody>
      </table>
    </div>}

    {modal&&<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={()=>setModal(false)}>
      <div onClick={e=>e.stopPropagation()} style={{background:"#fff",borderRadius:14,padding:"24px 28px",minWidth:340,maxWidth:420,boxShadow:"0 8px 32px rgba(0,0,0,0.18)"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:16}}>
          <span style={{fontWeight:500,fontSize:15}}>{editing?"Edit Client":"Add Client"}</span>
          {aiLoading&&<span style={{fontSize:11,color:"var(--color-text-info)",background:"var(--color-background-info)",borderRadius:20,padding:"2px 10px",display:"flex",alignItems:"center",gap:4}}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>AI detecting...</span>}
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          <Field label="Name">
            <div style={{position:"relative"}}>
              <input style={{...inp,paddingRight:aiLoading?32:10}} value={form.name} onChange={e=>handleNameChange(e.target.value)} placeholder="Nama client"/>
              {aiLoading&&<span style={{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",fontSize:10,color:"var(--color-text-info)"}}>✦</span>}
            </div>
          </Field>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            <Field label={<span style={{display:"flex",alignItems:"center",gap:4}}>Type {form.type&&!aiLoading&&<span style={{fontSize:9,color:"#22c55e"}}>✓ auto</span>}</span>}>
              <select style={{...inp,cursor:"pointer"}} value={form.type} onChange={e=>setForm(f=>({...f,type:e.target.value}))}>
                <option value="">Pilih type...</option>
                {clientTypeOptions.map(o=><option key={o} value={o}>{o}</option>)}
              </select>
            </Field>
            <Field label={<span style={{display:"flex",alignItems:"center",gap:4}}>Platform {form.platform&&!aiLoading&&<span style={{fontSize:9,color:"#22c55e"}}>✓ auto</span>}</span>}>
              <select style={{...inp,cursor:"pointer"}} value={form.platform} onChange={e=>setForm(f=>({...f,platform:e.target.value}))}>
                <option value="">Pilih platform...</option>
                {platformOptions.map(o=><option key={o} value={o}>{o}</option>)}
              </select>
            </Field>
          </div>
          <Field label="Rating">
            <div style={{display:"flex",gap:4,alignItems:"center",padding:"4px 0"}}>
              {[1,2,3,4,5].map(star=>(
                <span key={star} onClick={()=>setForm(f=>({...f,rating:f.rating===star?0:star}))}
                  style={{fontSize:24,cursor:"pointer",color:(form.rating||0)>=star?"#f59e0b":"#d1d5db",lineHeight:1,transition:"color 0.1s"}}>★</span>
              ))}
              {form.rating>0&&<span style={{fontSize:12,color:"var(--color-text-secondary)",marginLeft:4}}>{form.rating}.0</span>}
            </div>
          </Field>
          <Field label="Note"><textarea style={{...inp,height:72,resize:"vertical"}} value={form.note} onChange={e=>setForm(f=>({...f,note:e.target.value}))} placeholder="Catatan..."/></Field>
        </div>
        <div style={{display:"flex",gap:8,justifyContent:"flex-end",marginTop:20}}>
          <button onClick={()=>setModal(false)} style={{fontSize:13,padding:"6px 16px"}}>Batal</button>
          <button onClick={save} style={{fontSize:13,padding:"6px 16px",background:"#111",color:"#fff",borderColor:"#111"}}>Simpan</button>
        </div>
      </div>
    </div>}
  </div>;
}

function DownloadPage({projects}) {
  const years = [...new Set(projects.map(p=>(p.startDate||"").slice(0,4)).filter(Boolean))].sort().reverse();
  const months = [...new Set(projects.map(p=>(p.startDate||"").slice(0,7)).filter(Boolean))].sort().reverse();
  const [selYear,setSelYear] = useState(years[0]||"");
  const [selMonth,setSelMonth] = useState(months[0]||"");
  const mlabel = m=>{if(!m)return"—";const[y,mo]=m.split("-");return`${["","Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"][parseInt(mo)]} ${y}`;};

  const buildHTML = (list, title) => {
    const feeStr = f => normalizeFeeArr(f).map(x=>`${x.name}${x.lunas?" <span style='color:#16a34a'>✓</span>":""}`).join(", ")||"—";
    const psStr  = p => normalizeFeeArr(p).map(x=>`${x.name}${x.lunas?" <span style='color:#16a34a'>✓</span>":""}`).join(", ")||"—";
    const taskStr = t => {
      const vis = t.filter(x=>x.visible);
      if (!vis.length) return "—";
      return vis.map(x=>`<span style='${x.done?"text-decoration:line-through;opacity:0.5;":""}'>${x.name}${x.deadline?" <span style='color:#b45309;font-size:10px'>(${x.deadline})</span>":""}</span>`).join(" &nbsp;·&nbsp; ");
    };
    const statusCfg = {
      "Ongoing":     {bg:"#fff8ed",color:"#b45309",dot:"#f59e0b"},
      "Completed":   {bg:"#f0fdf4",color:"#166534",dot:"#22c55e"},
      "Cancelled":   {bg:"#fef2f2",color:"#991b1b",dot:"#ef4444"},
      "Incompleted": {bg:"#eff6ff",color:"#1d4ed8",dot:"#3b82f6"},
    };
    const chip = (label, val) => val ? `<div class="chip"><div class="chip-label">${label}</div><div class="chip-val">${val}</div></div>` : "";
    const rows = list.map((p,i)=>{
      const sc = statusCfg[p.status]||statusCfg["Ongoing"];
      const vis = p.tasks.filter(t=>t.visible);
      const done = vis.filter(t=>t.done).length;
      const pct = vis.length ? Math.round(done/vis.length*100) : 0;
      const tags = [p.invitation?"Invitation":null, p.team?"Team":null, p.hourlyJob?"Hourly":null].filter(Boolean);
      return `
      <div class="card">
        <div class="card-top">
          <div class="card-left">
            <div class="card-title">${p.projectName||"Untitled"} <span class="card-num">${projectNum(p,list)}</span></div>
            ${p.address?`<div class="card-sub">${p.address}</div>`:""}
          </div>
          <div class="card-badges">
            <span class="plat">${p.platform}</span>
            <span class="status-badge" style="background:${sc.bg};color:${sc.color};">
              <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${sc.dot};margin-right:4px;"></span>${p.status}
            </span>
          </div>
        </div>
        <div class="chips">
          ${chip("Client",p.clientName)}
          ${chip("Client Type",p.clientType)}
          ${chip("Scope of Work",p.jobType)}
          ${chip("Project Type",p.design)}
          ${chip("Style",p.style)}
          ${chip("Start",p.startDate)}
          ${chip("End",p.endDate)}
          ${chip("Hours",p.hours?p.hours+" jam":"")}
          ${chip("Area",p.area?p.area+" m²":"")}
        </div>
        ${p.notes?`<div class="notes-row"><span class="field-lbl">Notes</span><span>${p.notes}</span></div>`:""}
        ${vis.length?`
        <div class="tasks-box">
          <div class="tasks-header">
            <span class="tasks-lbl">Tasks</span>
            <span class="tasks-count">${done}/${vis.length} selesai</span>
          </div>
          <div class="progress-bg"><div class="progress-fill" style="width:${pct}%"></div></div>
          <div class="tasks-list">${taskStr(p.tasks)}</div>
        </div>`:""}
        <div class="price-row">
          ${p.grossPrice?`<div class="price-item"><div class="field-lbl">Gross Price</div><div class="price-val">Rp ${p.grossPrice}</div></div>`:""}
          ${p.priceRp?`<div class="price-item"><div class="field-lbl">Nett Price</div><div class="price-val">Rp ${p.priceRp}</div></div>`:""}
          ${p.priceUSD?`<div class="price-item"><div class="field-lbl">Priced (USD)</div><div class="price-val">$${p.priceUSD}</div></div>`:""}
          ${p.jobPerHour?`<div class="price-item"><div class="field-lbl">Job/Hour</div><div class="price-val">$${p.jobPerHour}</div></div>`:""}
          ${tags.length?`<div style="margin-left:auto;display:flex;gap:6px;flex-wrap:wrap;align-items:center;">${tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>`:""}
        </div>
        ${normalizeFeeArr(p.paymentStatus).length?`<div class="ps-box"><span class="field-lbl" style="color:#16a34a;">Payment Status</span> &nbsp;${psStr(p.paymentStatus)}</div>`:""}
        ${normalizeFeeArr(p.fee).length?`<div class="ps-box"><span class="field-lbl">Fee</span> &nbsp;${feeStr(p.fee)}</div>`:""}
      </div>`;
    }).join("");

    return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${title}</title><style>
      *{box-sizing:border-box;margin:0;padding:0;}
      body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:13px;padding:32px 40px;color:#111;background:#f8f8f8;}
      h1{font-size:20px;font-weight:500;margin-bottom:4px;}
      .meta{color:#888;font-size:12px;margin-bottom:28px;}
      .card{background:#fff;border:2px solid #000;border-radius:14px;padding:18px 20px;margin-bottom:18px;page-break-inside:avoid;}
      .card-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px;}
      .card-title{font-size:15px;font-weight:500;}
      .card-num{font-size:12px;color:#888;font-weight:400;margin-left:6px;}
      .card-sub{font-size:12px;color:#888;margin-top:2px;}
      .card-badges{display:flex;gap:6px;align-items:center;flex-shrink:0;margin-left:12px;}
      .plat{font-size:11px;background:#f3f4f6;color:#374151;border-radius:6px;padding:2px 8px;font-weight:500;}
      .status-badge{font-size:11px;border-radius:20px;padding:3px 10px;font-weight:500;display:inline-flex;align-items:center;}
      .chips{display:grid;grid-template-columns:repeat(4,1fr);gap:10px 16px;margin-bottom:12px;}
      .chip .chip-label{font-size:10px;color:#888;text-transform:uppercase;letter-spacing:0.05em;font-weight:500;margin-bottom:2px;}
      .chip .chip-val{font-size:13px;color:#111;}
      .notes-row{font-size:13px;color:#111;margin-bottom:10px;padding-top:8px;border-top:0.5px solid #eee;}
      .notes-row .field-lbl{font-size:10px;color:#888;text-transform:uppercase;font-weight:500;margin-right:8px;}
      .tasks-box{background:#fffbeb;border:1.5px solid #fcd34d;border-radius:8px;padding:10px 12px;margin-bottom:10px;}
      .tasks-header{display:flex;align-items:center;gap:8px;margin-bottom:6px;}
      .tasks-lbl{font-size:10px;color:#b45309;text-transform:uppercase;font-weight:600;letter-spacing:0.05em;}
      .tasks-count{font-size:11px;color:#92400e;background:#fef3c7;border-radius:20px;padding:1px 8px;font-weight:500;}
      .progress-bg{height:4px;background:#fde68a;border-radius:4px;margin-bottom:8px;overflow:hidden;}
      .progress-fill{height:100%;background:#f59e0b;border-radius:4px;}
      .tasks-list{font-size:12px;color:#78350f;line-height:1.8;}
      .price-row{display:flex;gap:20px;flex-wrap:wrap;align-items:flex-end;padding-top:10px;border-top:0.5px solid #eee;margin-top:8px;}
      .price-item .field-lbl{font-size:10px;color:#888;text-transform:uppercase;font-weight:500;margin-bottom:2px;}
      .price-item .price-val{font-size:14px;font-weight:500;}
      .tag{font-size:11px;border-radius:6px;padding:3px 10px;}
      .tag:nth-child(1){background:#f0fdf4;color:#166534;}
      .tag:nth-child(2){background:#eff6ff;color:#1d4ed8;}
      .tag:nth-child(3){background:#fdf2f8;color:#86198f;}
      .ps-box{font-size:12px;color:#374151;margin-top:8px;padding-top:8px;border-top:0.5px solid #eee;}
      .field-lbl{font-size:10px;color:#888;text-transform:uppercase;font-weight:500;letter-spacing:0.04em;}
      hr{border:none;border-top:0.5px solid #eee;margin:8px 0;}
      @media print{body{padding:0;background:#fff;}.card{page-break-inside:avoid;}}
    </style><script>window.onload=function(){window.print();}</script></head><body>
      <h1>${title}</h1>
      <div class="meta">Total: ${list.length} proyek &nbsp;·&nbsp; ${new Date().toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})}</div>
      ${rows}
    </body></html>`;
  };

  const download = (list, title) => {
    const html = buildHTML(list, title);
    const encoded = "data:text/html;charset=utf-8," + encodeURIComponent(html);
    const a = document.createElement("a");
    a.href = encoded;
    a.download = `${title}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const btnStyle = {fontSize:13,padding:"10px 20px",display:"flex",alignItems:"center",gap:8,cursor:"pointer",borderRadius:8,border:"2px solid #000",background:"#fff",fontWeight:500,width:"100%",justifyContent:"flex-start"};
  const secStyle = {border:"2px solid #000",borderRadius:12,padding:"20px",marginBottom:16,boxShadow:"0 2px 8px rgba(0,0,0,0.07)"};

  return <div>
    <div style={{fontWeight:500,fontSize:20,marginBottom:20}}>Download</div>

    {/* All Time */}
    <div style={secStyle}>
      <div style={{fontWeight:500,fontSize:14,marginBottom:4}}>All Time</div>
      <div style={{fontSize:12,color:"var(--color-text-secondary)",marginBottom:14}}>Semua {projects.length} proyek</div>
      <button style={btnStyle} onClick={()=>download(projects,"Project Cards — All Time")}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download Project Cards (.html)
      </button>
    </div>

    {/* Per Tahun */}
    <div style={secStyle}>
      <div style={{fontWeight:500,fontSize:14,marginBottom:4}}>Per Tahun</div>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
        <select value={selYear} onChange={e=>setSelYear(e.target.value)} style={{fontSize:13,padding:"5px 10px",border:"1.5px solid #000",borderRadius:6}}>
          {years.length===0&&<option value="">—</option>}
          {years.map(y=><option key={y} value={y}>{y}</option>)}
        </select>
        <span style={{fontSize:12,color:"var(--color-text-secondary)"}}>{projects.filter(p=>(p.startDate||"").startsWith(selYear)).length} proyek</span>
      </div>
      <button style={btnStyle} onClick={()=>download(projects.filter(p=>(p.startDate||"").startsWith(selYear)),`Project Cards — ${selYear}`)}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download Project Cards (.html)
      </button>
    </div>

    {/* Per Bulan */}
    <div style={secStyle}>
      <div style={{fontWeight:500,fontSize:14,marginBottom:4}}>Per Bulan</div>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
        <select value={selMonth} onChange={e=>setSelMonth(e.target.value)} style={{fontSize:13,padding:"5px 10px",border:"1.5px solid #000",borderRadius:6}}>
          {months.length===0&&<option value="">—</option>}
          {months.map(m=><option key={m} value={m}>{mlabel(m)}</option>)}
        </select>
        <span style={{fontSize:12,color:"var(--color-text-secondary)"}}>{projects.filter(p=>(p.startDate||"").startsWith(selMonth)).length} proyek</span>
      </div>
      <button style={btnStyle} onClick={()=>download(projects.filter(p=>(p.startDate||"").startsWith(selMonth)),`Project Cards — ${mlabel(selMonth)}`)}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download Project Cards (.html)
      </button>
    </div>
  </div>;
}

function UpworkPage({projects}) {
  const STORAGE_KEY = "_upworkProposals";
  const monthNames = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];

  const upworkProjects = projects.filter(p=>p.platform==="Upwork");

  // Build set of all year-months that have upwork projects or saved proposal data
  const allMonths = [...new Set([
    ...upworkProjects.map(p=>(p.startDate||"").slice(0,7)),
    ...Object.keys(JSON.parse(window[STORAGE_KEY]||"{}"))
  ].filter(Boolean))].sort().reverse();

  const [proposals, setProposals] = useState(()=>{
    try { return JSON.parse(window[STORAGE_KEY]||"{}"); } catch(e){ return {}; }
  });
  const [editingMonth, setEditingMonth] = useState(null);
  const [editVal, setEditVal] = useState("");
  const [newMonth, setNewMonth] = useState("");
  const [newVal, setNewVal] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const saveProposals = (updated) => {
    setProposals(updated);
    window[STORAGE_KEY] = JSON.stringify(updated);
  };

  const startEdit = (month) => { setEditingMonth(month); setEditVal(String(proposals[month]||"")); };
  const commitEdit = (month) => {
    const n = parseInt(editVal)||0;
    const updated = {...proposals, [month]: n};
    if (!n) { delete updated[month]; }
    saveProposals(updated);
    setEditingMonth(null);
  };
  const addMonth = () => {
    if (!newMonth) return;
    const n = parseInt(newVal)||0;
    saveProposals({...proposals, [newMonth]: n});
    setNewMonth(""); setNewVal(""); setShowAddForm(false);
  };
  const deleteMonth = (month) => {
    const updated = {...proposals};
    delete updated[month];
    saveProposals(updated);
  };

  // Merged list of months
  const mergedMonths = [...new Set([
    ...Object.keys(proposals),
    ...upworkProjects.map(p=>(p.startDate||"").slice(0,7)).filter(Boolean)
  ])].sort().reverse();

  const monthLabel = m => {
    if (!m) return "—";
    const [y,mo] = m.split("-");
    return `${monthNames[parseInt(mo)-1]} ${y}`;
  };

  const rows = mergedMonths.map(m=>{
    const sent    = proposals[m]||0;
    const won     = upworkProjects.filter(p=>(p.startDate||"").startsWith(m)).length;
    const invWon  = upworkProjects.filter(p=>(p.startDate||"").startsWith(m)&&p.invitation).length;
    const rate    = sent>0 ? Math.round(won/sent*100) : null;
    return {m, sent, won, invWon, rate};
  });

  const totalSent  = rows.reduce((s,r)=>s+r.sent,0);
  const totalWon   = rows.reduce((s,r)=>s+r.won,0);
  const totalInv   = rows.reduce((s,r)=>s+r.invWon,0);
  const totalRate  = totalSent>0 ? Math.round(totalWon/totalSent*100) : null;

  const totalUpwork     = upworkProjects.length;
  const totalInvitation = upworkProjects.filter(p=>p.invitation).length;
  const totalNonInv     = totalUpwork - totalInvitation;
  const totalHourly     = upworkProjects.filter(p=>p.hourlyJob).length;
  const hourlyPct       = totalUpwork>0 ? Math.round(totalHourly/totalUpwork*100) : 0;

  const allYearsAn     = [...new Set(upworkProjects.map(p=>(p.startDate||"").slice(0,4)).filter(Boolean))].sort().reverse();
  const allMonthsAn    = [...new Set(upworkProjects.map(p=>(p.startDate||"").slice(0,7)).filter(Boolean))].sort().reverse();
  const [filterMode,   setFilterMode]  = useState("all");
  const [filterYear,   setFilterYear]  = useState(allYearsAn[0]||"");
  const [filterMonth2, setFilterMonth2] = useState(allMonthsAn[0]||"");

  // Conversion rate table filter
  const allYearsCR  = [...new Set(mergedMonths.map(m=>m.slice(0,4)).filter(Boolean))].sort().reverse();
  const [crFilterMode,  setCrFilterMode]  = useState("all");
  const [crFilterYear,  setCrFilterYear]  = useState(allYearsCR[0]||"");
  const [crFilterMonth, setCrFilterMonth] = useState(mergedMonths[0]||"");

  const filteredRows = crFilterMode==="year" && crFilterYear
    ? rows.filter(r=>r.m.startsWith(crFilterYear))
    : crFilterMode==="month" && crFilterMonth
      ? rows.filter(r=>r.m===crFilterMonth)
      : rows;

  const crTotalSent = filteredRows.reduce((s,r)=>s+r.sent,0);
  const crTotalWon  = filteredRows.reduce((s,r)=>s+r.won,0);
  const crTotalInv  = filteredRows.reduce((s,r)=>s+r.invWon,0);
  const crTotalRate = crTotalSent>0 ? Math.round(crTotalWon/crTotalSent*100) : null;

  const filteredAn = filterMode==="year" && filterYear
    ? upworkProjects.filter(p=>(p.startDate||"").startsWith(filterYear))
    : filterMode==="month" && filterMonth2
      ? upworkProjects.filter(p=>(p.startDate||"").startsWith(filterMonth2))
      : upworkProjects;

  const fInv    = filteredAn.filter(p=>p.invitation).length;
  const fNonInv = filteredAn.length - fInv;
  const fHourly = filteredAn.filter(p=>p.hourlyJob).length;
  const fFixed  = filteredAn.length - fHourly;

  const cardSt = {background:"var(--color-background-primary)",border:"0.5px solid var(--color-border-tertiary)",borderRadius:12,padding:"16px 18px"};
  const thSt   = {padding:"9px 12px",textAlign:"left",fontWeight:500,fontSize:11,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-text-secondary)"};
  const inpSt  = {fontSize:13,padding:"4px 8px",border:"0.5px solid var(--color-border-secondary)",borderRadius:6,background:"var(--color-background-primary)",color:"var(--color-text-primary)",width:72,textAlign:"center"};
  const selSt  = {fontSize:12,padding:"4px 8px",border:"0.5px solid var(--color-border-secondary)",borderRadius:6,background:"var(--color-background-primary)",color:"var(--color-text-primary)",cursor:"pointer"};
  const pillSt = (active) => ({fontSize:12,padding:"4px 14px",borderRadius:20,border:"0.5px solid",cursor:"pointer",background:active?"#111":"transparent",color:active?"#fff":"var(--color-text-secondary)",borderColor:active?"#111":"var(--color-border-secondary)"});

  return <div>
    <div style={{fontWeight:500,fontSize:20,marginBottom:20}}>Upwork</div>

    {/* Summary KPI */}
    <div style={{display:"grid",gridTemplateColumns:"repeat(5,minmax(0,1fr))",gap:10,marginBottom:20}}>
      {[
        {label:"Total Proyek",    val:totalUpwork,   sub:null,                      bg:"#f4f4f4",        tc:"var(--color-text-primary)",   sc:"var(--color-text-secondary)"},
        {label:"Invitation",      val:totalInvitation, sub:`${totalUpwork>0?Math.round(totalInvitation/totalUpwork*100):0}% dari total`, bg:"#eff6ff", tc:"#1d4ed8", sc:"#3b82f6"},
        {label:"Non-Invitation",  val:totalNonInv,   sub:`${totalUpwork>0?Math.round(totalNonInv/totalUpwork*100):0}% dari total`,      bg:"#fff8ed", tc:"#b45309", sc:"#d97706"},
        {label:"Conversion Rate", val:totalRate!==null?`${totalRate}%`:"—", sub:totalSent>0?`${totalWon} menang / ${totalSent} proposal`:totalSent===0?"Belum ada data proposal":null, bg:"#E1F5EE", tc:"#085041", sc:"#0F6E56"},,
        {label:"Hourly Job", val:totalHourly, sub:`${hourlyPct}% dari total · ${totalUpwork-totalHourly} fixed`, bg:"#fdf4ff", tc:"#7e22ce", sc:"#9333ea"},
      ].map(({label,val,sub,bg,tc,sc})=><div key={label} style={{background:bg,borderRadius:8,padding:"12px 14px"}}>
        <div style={{fontSize:11,fontWeight:500,textTransform:"uppercase",letterSpacing:"0.05em",color:sc,marginBottom:6}}>{label}</div>
        <div style={{fontSize:26,fontWeight:500,color:tc,lineHeight:1,marginBottom:sub?4:0}}>{val}</div>
        {sub&&<div style={{fontSize:11,color:sc}}>{sub}</div>}
      </div>)}
    </div>

    {/* Conversion rate table */}
    <div style={{...cardSt,marginBottom:20}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:showAddForm?12:14,flexWrap:"wrap",gap:10}}>
        <div style={{fontWeight:500,fontSize:14}}>Proposal per Bulan</div>
        <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}>
          <button style={pillSt(crFilterMode==="all")}   onClick={()=>setCrFilterMode("all")}>Semua</button>
          <button style={pillSt(crFilterMode==="year")}  onClick={()=>setCrFilterMode("year")}>Per Tahun</button>
          {crFilterMode==="year"&&<select value={crFilterYear} onChange={e=>setCrFilterYear(e.target.value)} style={selSt}>
            {allYearsCR.map(y=><option key={y} value={y}>{y}</option>)}
          </select>}
          <button style={pillSt(crFilterMode==="month")} onClick={()=>setCrFilterMode("month")}>Per Bulan</button>
          {crFilterMode==="month"&&<select value={crFilterMonth} onChange={e=>setCrFilterMonth(e.target.value)} style={selSt}>
            {mergedMonths.map(m=><option key={m} value={m}>{monthLabel(m)}</option>)}
          </select>}
          <button onClick={()=>{setShowAddForm(v=>!v);setNewMonth("");setNewVal("");}} style={{fontSize:12,padding:"5px 14px"}}>{showAddForm?"Batal":"+ Tambah Bulan"}</button>
        </div>
      </div>
      {showAddForm&&<div style={{display:"flex",gap:10,alignItems:"flex-end",marginBottom:14,padding:"12px 14px",background:"var(--color-background-secondary)",borderRadius:8}}>
        <div style={{display:"flex",flexDirection:"column",gap:4}}>
          <span style={{fontSize:11,color:"var(--color-text-secondary)",fontWeight:500}}>Bulan</span>
          <input type="month" value={newMonth} onChange={e=>setNewMonth(e.target.value)} style={{...inpSt,width:160,textAlign:"left"}}/>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:4}}>
          <span style={{fontSize:11,color:"var(--color-text-secondary)",fontWeight:500}}>Jumlah Proposal</span>
          <input type="number" value={newVal} onChange={e=>setNewVal(e.target.value)} placeholder="cth. 10" min="0" style={{...inpSt,width:120,textAlign:"left"}}
            onKeyDown={e=>{if(e.key==="Enter")addMonth();}}/>
        </div>
        <button onClick={addMonth} style={{fontSize:12,padding:"7px 18px",background:"#111",color:"#fff",borderColor:"#111"}}>Simpan</button>
      </div>}
      {filteredRows.length===0
        ? <div style={{fontSize:13,color:"var(--color-text-secondary)",textAlign:"center",padding:"2rem 0"}}>Tambah data proposal untuk melihat conversion rate.</div>
        : <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
            <thead>
              <tr style={{borderBottom:"0.5px solid var(--color-border-tertiary)"}}>
                <th style={thSt}>Bulan</th>
                <th style={{...thSt,textAlign:"center"}}>Proposal Terkirim</th>
                <th style={{...thSt,textAlign:"center"}}>Proyek Didapat</th>
                <th style={{...thSt,textAlign:"center"}}>Dari Invitation</th>
                <th style={{...thSt,textAlign:"center"}}>Conversion Rate</th>
                <th style={{...thSt,width:40}}></th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((r,i)=>{
                const isLast = i===filteredRows.length-1;
                const rateBg = r.rate===null?"transparent":r.rate>=30?"#E1F5EE":r.rate>=15?"#fff8ed":"#fef2f2";
                const rateColor = r.rate===null?"var(--color-text-secondary)":r.rate>=30?"#085041":r.rate>=15?"#b45309":"#991b1b";
                return <tr key={r.m} style={{borderBottom:isLast?"none":"0.5px solid var(--color-border-tertiary)"}}>
                  <td style={{padding:"10px 12px",fontWeight:500,color:"var(--color-text-primary)"}}>{monthLabel(r.m)}</td>
                  <td style={{padding:"10px 12px",textAlign:"center"}}>
                    {editingMonth===r.m
                      ? <input autoFocus type="number" value={editVal} min="0"
                          onChange={e=>setEditVal(e.target.value)}
                          onBlur={()=>commitEdit(r.m)}
                          onKeyDown={e=>{if(e.key==="Enter")commitEdit(r.m);if(e.key==="Escape")setEditingMonth(null);}}
                          style={{...inpSt,width:64}}/>
                      : <span onClick={()=>startEdit(r.m)} style={{cursor:"pointer",fontWeight:500,color:r.sent>0?"var(--color-text-primary)":"var(--color-text-secondary)",borderBottom:"1px dashed var(--color-border-secondary)",paddingBottom:1}}>
                          {r.sent>0?r.sent:"klik untuk isi"}
                        </span>}
                  </td>
                  <td style={{padding:"10px 12px",textAlign:"center",fontWeight:500,color:"var(--color-text-primary)"}}>{r.won}</td>
                  <td style={{padding:"10px 12px",textAlign:"center"}}>
                    {r.invWon>0
                      ? <span style={{fontSize:11,fontWeight:500,background:"#eff6ff",color:"#1d4ed8",borderRadius:20,padding:"2px 10px"}}>{r.invWon} inv</span>
                      : <span style={{color:"var(--color-text-secondary)"}}>—</span>}
                  </td>
                  <td style={{padding:"10px 12px",textAlign:"center"}}>
                    {r.rate!==null
                      ? <span style={{fontSize:12,fontWeight:500,borderRadius:20,padding:"3px 10px",background:rateBg,color:rateColor}}>{r.rate}%</span>
                      : <span style={{fontSize:12,color:"var(--color-text-secondary)"}}>—</span>}
                  </td>
                  <td style={{padding:"10px 12px",textAlign:"center"}}>
                    <button onClick={()=>deleteMonth(r.m)} style={{border:"none",background:"transparent",cursor:"pointer",color:"var(--color-text-danger)",padding:"2px 4px",fontSize:13}}>✕</button>
                  </td>
                </tr>;
              })}
              {filteredRows.length>1&&<tr style={{borderTop:"1.5px solid var(--color-border-secondary)",background:"var(--color-background-secondary)"}}>
                <td style={{padding:"10px 12px",fontWeight:500,fontSize:12,color:"var(--color-text-secondary)"}}>Total</td>
                <td style={{padding:"10px 12px",textAlign:"center",fontWeight:500}}>{crTotalSent}</td>
                <td style={{padding:"10px 12px",textAlign:"center",fontWeight:500}}>{crTotalWon}</td>
                <td style={{padding:"10px 12px",textAlign:"center",fontWeight:500}}>{crTotalInv>0?`${crTotalInv} inv`:"—"}</td>
                <td style={{padding:"10px 12px",textAlign:"center"}}>
                  {crTotalRate!==null
                    ? <span style={{fontSize:12,fontWeight:500,borderRadius:20,padding:"3px 10px",background:crTotalRate>=30?"#E1F5EE":crTotalRate>=15?"#fff8ed":"#fef2f2",color:crTotalRate>=30?"#085041":crTotalRate>=15?"#b45309":"#991b1b"}}>{crTotalRate}%</span>
                    : "—"}
                </td>
                <td/>
              </tr>}
            </tbody>
          </table>
      }
    </div>

    {/* Analysis section — filterable */}
    <div style={cardSt}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,flexWrap:"wrap",gap:10}}>
        <div style={{fontWeight:500,fontSize:14}}>Upwork Analysis</div>
        <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}>
          <button style={pillSt(filterMode==="all")}   onClick={()=>setFilterMode("all")}>Semua</button>
          <button style={pillSt(filterMode==="year")}  onClick={()=>setFilterMode("year")}>Per Tahun</button>
          {filterMode==="year"&&<select value={filterYear} onChange={e=>setFilterYear(e.target.value)} style={selSt}>
            {allYearsAn.map(y=><option key={y} value={y}>{y}</option>)}
          </select>}
          <button style={pillSt(filterMode==="month")} onClick={()=>setFilterMode("month")}>Per Bulan</button>
          {filterMode==="month"&&<select value={filterMonth2} onChange={e=>setFilterMonth2(e.target.value)} style={selSt}>
            {allMonthsAn.map(m=><option key={m} value={m}>{monthLabel(m)}</option>)}
          </select>}
        </div>
      </div>

      {filteredAn.length===0
        ? <div style={{fontSize:13,color:"var(--color-text-secondary)",textAlign:"center",padding:"1.5rem 0"}}>Tidak ada proyek Upwork untuk periode ini.</div>
        : <>
            <div style={{display:"flex",gap:10,marginBottom:16,flexWrap:"wrap"}}>
              {[
                {label:"Total Proyek",   val:filteredAn.length, bg:"#f0fdf4", tc:"#15803d", sc:"#166534", sub:null},
                {label:"Invitation",     val:fInv,              bg:"#eff6ff", tc:"#1d4ed8", sc:"#1d4ed8", sub:`${filteredAn.length>0?Math.round(fInv/filteredAn.length*100):0}% dari total`},
                {label:"Non-Invitation", val:fNonInv,           bg:"#fff8ed", tc:"#b45309", sc:"#b45309", sub:`${filteredAn.length>0?Math.round(fNonInv/filteredAn.length*100):0}% dari total`},
                {label:"Hourly Job",     val:fHourly,           bg:"#fdf4ff", tc:"#7e22ce", sc:"#9333ea", sub:`${fFixed} fixed price`},
              ].map(({label,val,bg,tc,sc,sub})=><div key={label} style={{flex:1,minWidth:100,background:bg,borderRadius:8,padding:"12px 14px"}}>
                <div style={{fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",color:sc,marginBottom:4}}>{label}</div>
                <div style={{fontSize:24,fontWeight:500,color:tc,lineHeight:1}}>{val}</div>
                {sub&&<div style={{fontSize:11,color:sc,marginTop:2}}>{sub}</div>}
              </div>)}
            </div>

            <div style={{border:"0.5px solid var(--color-border-tertiary)",borderRadius:10,overflow:"hidden"}}>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
                <thead>
                  <tr style={{background:"var(--color-background-secondary)",borderBottom:"0.5px solid var(--color-border-tertiary)"}}>
                    <th style={thSt}>Proyek</th>
                    <th style={thSt}>Client</th>
                    <th style={{...thSt,textAlign:"center"}}>Tipe</th>
                    <th style={{...thSt,textAlign:"center"}}>Invitation</th>
                    <th style={thSt}>Status</th>
                    <th style={{...thSt,textAlign:"right"}}>Income</th>
                  </tr>
                </thead>
                <tbody>
                  {[...filteredAn].reverse().map((p,i)=>{
                    const cfg = STATUS_CFG[p.status]||STATUS_CFG["Ongoing"];
                    const isLast = i===filteredAn.length-1;
                    return <tr key={p.id} style={{borderBottom:isLast?"none":"0.5px solid var(--color-border-tertiary)",background:i%2===0?"transparent":"var(--color-background-secondary)"}}>
                      <td style={{padding:"9px 12px",fontWeight:500,color:"var(--color-text-primary)"}}>{p.projectName||"—"}</td>
                      <td style={{padding:"9px 12px",color:"var(--color-text-secondary)"}}>{p.clientName||"—"}</td>
                      <td style={{padding:"9px 12px",textAlign:"center"}}>
                        {p.hourlyJob
                          ? <span style={{background:"#fdf4ff",color:"#7e22ce",borderRadius:20,padding:"2px 9px",fontSize:11,fontWeight:500}}>Hourly</span>
                          : <span style={{background:"#f4f4f4",color:"#555",borderRadius:20,padding:"2px 9px",fontSize:11}}>Fixed</span>}
                      </td>
                      <td style={{padding:"9px 12px",textAlign:"center"}}>
                        {p.invitation
                          ? <span style={{background:"#eff6ff",color:"#1d4ed8",borderRadius:20,padding:"2px 10px",fontSize:11,fontWeight:500}}>Invitation</span>
                          : <span style={{color:"var(--color-text-secondary)",fontSize:11}}>—</span>}
                      </td>
                      <td style={{padding:"9px 12px"}}>
                        <span style={{background:cfg.bg,color:cfg.text,borderRadius:20,padding:"2px 10px",fontSize:11,fontWeight:500,display:"inline-flex",alignItems:"center",gap:4}}>
                          <span style={{width:5,height:5,borderRadius:"50%",background:cfg.dot,display:"inline-block"}}/>
                          {p.status}
                        </span>
                      </td>
                      <td style={{padding:"9px 12px",textAlign:"right",fontWeight:500,color:"var(--color-text-primary)"}}>
                        {p.priceRp?`Rp ${p.priceRp}`:p.priceUSD?`$${p.priceUSD}`:"—"}
                      </td>
                    </tr>;
                  })}
                </tbody>
              </table>
            </div>
          </>
      }
    </div>
  </div>;
}

const DEFAULT_RESOURCE_TAGS = ["Template","Portfolio","Tools","Referensi","Contract","Lainnya"];
const RESOURCE_TAG_COLORS = {
  "Template":  {bg:"#E6F1FB",color:"#185FA5"},
  "Portfolio": {bg:"#E1F5EE",color:"#0F6E56"},
  "Tools":     {bg:"#EEEDFE",color:"#534AB7"},
  "Referensi": {bg:"#FAEEDA",color:"#BA7517"},
  "Contract":  {bg:"#FBEAF0",color:"#993556"},
  "Lainnya":   {bg:"#F1EFE8",color:"#5F5E5A"},
};
function getResourceTagStyle(tag) {
  if (RESOURCE_TAG_COLORS[tag]) return RESOURCE_TAG_COLORS[tag];

  // 🔥 hash dari string
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }

  // 🔥 generate warna HSL
  const hue = hash % 360;
  const bg = `hsl(${hue}, 70%, 92%)`;
  const color = `hsl(${hue}, 50%, 35%)`;

  return { bg, color };
}
function loadResources() {
  try { const s=window._resourcesData; if(s){const p=JSON.parse(s);if(Array.isArray(p))return p;} } catch(e){}
  return seedResources ? [...seedResources] : [];
}
function saveResources(data) { window._resourcesData=JSON.stringify(data); }

function ResourcesPage() {
  const [resources, setResources] = useState(loadResources);
  const [activeTag, setActiveTag] = useState("Semua");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [confirmId, setConfirmId] = useState(null);
  const emptyForm = {name:"", url:"", tag:DEFAULT_RESOURCE_TAGS[0]};
  const [form, setForm] = useState(emptyForm);

  useEffect(()=>{ saveResources(resources); },[resources]);

  const allTags = [...new Set([...DEFAULT_RESOURCE_TAGS, ...resources.map(r=>r.tag).filter(Boolean)])];
  const filtered = activeTag==="Semua" ? resources : resources.filter(r=>r.tag===activeTag);

  const openAdd = () => { setEditingId(null); setForm(emptyForm); setShowForm(true); };
  const openEdit = (r) => { setEditingId(r.id); setForm({name:r.name,url:r.url,tag:r.tag}); setShowForm(true); };
  const cancelForm = () => { setShowForm(false); setEditingId(null); setForm(emptyForm); };

  const saveForm = () => {
    if (!form.name.trim()||!form.url.trim()) return;
    let url = form.url.trim();
    if (url && !/^https?:\/\//i.test(url)) url = "https://"+url;
    if (editingId) {
      setResources(rs=>rs.map(r=>r.id===editingId?{...r,...form,url}:r));
    } else {
      setResources(rs=>[...rs,{id:Date.now(),...form,url}]);
    }
    cancelForm();
  };

  const deleteResource = () => { setResources(rs=>rs.filter(r=>r.id!==confirmId)); setConfirmId(null); };

  const getHostname = (url) => { try { return new URL(url).hostname.replace("www.",""); } catch(e){ return url; } };

  const inp = {width:"100%",boxSizing:"border-box",fontSize:13,padding:"7px 10px",border:"0.5px solid var(--color-border-secondary)",borderRadius:6,background:"var(--color-background-primary)",color:"var(--color-text-primary)"};
  const labelSt = {fontSize:12,color:"var(--color-text-secondary)",display:"block",marginBottom:3};
  const selectSt = {fontSize:12,padding:"5px 8px",border:"0.5px solid var(--color-border-secondary)",borderRadius:6,background:"var(--color-background-primary)",color:"var(--color-text-primary)",cursor:"pointer"};

  return <div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16}}>
      <div style={{fontWeight:500,fontSize:20}}>Resources</div>
      <button onClick={openAdd} style={{display:"flex",alignItems:"center",gap:6,padding:"6px 14px",background:"#111",color:"#fff",border:"none",borderRadius:7,cursor:"pointer",fontSize:13,fontWeight:500}}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Tambah
      </button>
    </div>

    {/* Add / Edit Form */}
    {showForm&&<div style={{border:"2px solid #000",borderRadius:12,background:"var(--color-background-primary)",padding:"16px 20px",marginBottom:20,boxShadow:"0 2px 8px rgba(0,0,0,0.07)"}}>
      <div style={{fontWeight:500,fontSize:14,marginBottom:14}}>{editingId?"Edit Resource":"Tambah Resource"}</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 160px",gap:12,marginBottom:14}}>
        <div>
          <label style={labelSt}>Nama *</label>
          <input value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} placeholder="Modern Interior Deck" style={inp}/>
        </div>
        <div>
          <label style={labelSt}>URL *</label>
          <input value={form.url} onChange={e=>setForm(f=>({...f,url:e.target.value}))} placeholder="https://canva.com/..." style={inp} onKeyDown={e=>{if(e.key==="Enter"){e.preventDefault();saveForm();}}}/>
        </div>
        <div>
          <label style={labelSt}>Tag</label>
          <select value={form.tag} onChange={e=>setForm(f=>({...f,tag:e.target.value}))} style={{...inp,cursor:"pointer"}}>
            {allTags.map(t=><option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <div style={{display:"flex",gap:8,justifyContent:"flex-end"}}>
        <button onClick={cancelForm} style={{fontSize:13,padding:"6px 16px"}}>Batal</button>
        <button onClick={saveForm} disabled={!form.name.trim()||!form.url.trim()} style={{fontSize:13,padding:"6px 18px",background:(!form.name.trim()||!form.url.trim())?"var(--color-background-secondary)":"#111",color:(!form.name.trim()||!form.url.trim())?"var(--color-text-secondary)":"#fff",borderColor:"transparent",borderRadius:8,cursor:(!form.name.trim()||!form.url.trim())?"not-allowed":"pointer"}}>
          {editingId?"Simpan":"Tambah"}
        </button>
      </div>
    </div>}

    {/* Tag filter pills */}
    <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16,alignItems:"center"}}>
      {["Semua",...allTags].map(t=>{
        const active = activeTag===t;
        const cfg = t==="Semua" ? null : getResourceTagStyle(t);
        return <button key={t} onClick={()=>setActiveTag(t)} style={{
          fontSize:12,padding:"4px 14px",borderRadius:20,border:"0.5px solid",cursor:"pointer",
          background:active?(t==="Semua"?"#111":cfg.bg):"transparent",
          color:active?(t==="Semua"?"#fff":cfg.color):"var(--color-text-secondary)",
          borderColor:active?(t==="Semua"?"#111":cfg.color):"var(--color-border-secondary)",
          fontWeight:active?500:400,transition:"all 0.15s"
        }}>{t}{t==="Semua"?` (${resources.length})`:` (${resources.filter(r=>r.tag===t).length})`}</button>;
      })}
    </div>

    {/* List */}
    {resources.length===0
      ? <div style={{textAlign:"center",padding:"4rem 0",color:"var(--color-text-secondary)",fontSize:14}}>
          Belum ada resource. Klik "+ Tambah" untuk mulai.
        </div>
      : filtered.length===0
        ? <div style={{textAlign:"center",padding:"3rem 0",color:"var(--color-text-secondary)",fontSize:14}}>
            Tidak ada resource dengan tag ini.
          </div>
        : <div style={{border:"2px solid #000",borderRadius:12,overflow:"clip",boxShadow:"0 2px 8px rgba(0,0,0,0.07)"}}>
            {filtered.map((r,i)=>{
              const cfg = getResourceTagStyle(r.tag);
              const isLast = i===filtered.length-1;
              return <div key={r.id} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",borderBottom:isLast?"none":"0.5px solid var(--color-border-tertiary)",background:i%2===0?"transparent":"var(--color-background-secondary)"}}>
                {/* Icon */}
                <div style={{width:32,height:32,borderRadius:8,background:cfg.bg,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={cfg.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                </div>
                {/* Info */}
                <div style={{flex:1,minWidth:0}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:3}}>
                    <span style={{fontSize:13,fontWeight:500,color:"var(--color-text-primary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{r.name}</span>
                    <span style={{fontSize:10,fontWeight:500,padding:"2px 8px",borderRadius:20,background:cfg.bg,color:cfg.color,flexShrink:0}}>{r.tag}</span>
                  </div>
                  <span style={{fontSize:11,color:"var(--color-text-secondary)"}}>{getHostname(r.url)}</span>
                </div>
                {/* Actions */}
                <div style={{display:"flex",gap:4,alignItems:"center",flexShrink:0}}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:5,fontSize:12,padding:"5px 12px",borderRadius:6,border:"0.5px solid var(--color-border-secondary)",color:"var(--color-text-primary)",textDecoration:"none",background:"var(--color-background-primary)"}}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Buka
                  </a>
                  <button onClick={()=>openEdit(r)} style={{padding:"5px 6px",border:"none",background:"transparent",cursor:"pointer",color:"var(--color-text-secondary)"}}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                  </button>
                  <button onClick={()=>setConfirmId(r.id)} style={{padding:"5px 6px",border:"none",background:"transparent",cursor:"pointer",color:"#ef4444"}}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
                  </button>
                </div>
              </div>;
            })}
          </div>
    }
    {confirmId!=null&&<ConfirmModal message="Hapus resource ini?" onConfirm={deleteResource} onCancel={()=>setConfirmId(null)}/>}
  </div>;
}

function ProjectCard({proj,index,allProjects,onEdit,onDelete}) {
  const num = allProjects ? projectNum(proj, allProjects) : (index??proj.id);
  const vis = proj.tasks.filter(t=>t.visible);
  const done = vis.filter(t=>t.done).length;
  const pct = vis.length?Math.round(done/vis.length*100):0;
  const allDone = vis.length>0 && done===vis.length;
  const feeItems = normalizeFeeArr(proj.fee);
  const psItems = normalizeFeeArr(proj.paymentStatus);
  const showFeeRow = (proj.team&&feeItems.length>0)||(proj.hourlyJob&&proj.jobPerHour);
  return <div id={`proj-card-${proj.id}`} style={{border:"2px solid #000",borderRadius:16,background:"var(--color-background-primary)",padding:"1.25rem 1.5rem",marginBottom:14,boxShadow:"0 2px 8px rgba(0,0,0,0.07)"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}><div style={{flex:1,minWidth:0}}><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:2}}><div style={{fontWeight:500,fontSize:16,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{proj.projectName||"Untitled"}</div><span style={{fontSize:12,background:"var(--color-background-secondary)",borderRadius:6,padding:"2px 8px",color:"var(--color-text-secondary)",fontWeight:500,flexShrink:0}}>#{num}</span></div>{proj.address&&<div style={{fontSize:12,color:"var(--color-text-secondary)"}}>{proj.address}</div>}</div><div style={{display:"flex",alignItems:"center",gap:8,marginLeft:12,flexShrink:0}}><PlatformBadge platform={proj.platform}/><StatusBadge status={proj.status}/></div></div><div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px 16px",marginBottom:12}}><Chip label="Client" value={proj.clientName}/><Chip label="Client Type" value={proj.clientType}/><Chip label="Scope of Work" value={proj.jobType}/><Chip label="Project Type" value={proj.design}/><Chip label="Style" value={proj.style}/><Chip label="Start" value={proj.startDate}/><Chip label="End" value={proj.endDate}/><Chip label="Hours" value={proj.hours}/><Chip label="Area" value={proj.area?`${proj.area} m²`:null}/></div>{proj.notes&&<div style={{marginBottom:12}}><span style={{fontSize:10,color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.05em",fontWeight:500}}>Notes</span><div style={{marginTop:4,fontSize:13,color:"var(--color-text-primary)"}}>{proj.notes}</div></div>}{showFeeRow&&<div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px 16px",marginBottom:12}}>{proj.team&&feeItems.length>0&&<div><span style={{fontSize:10,color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.05em",fontWeight:500}}>Fee</span><div style={{marginTop:4,display:"flex",flexDirection:"column",gap:3}}>{feeItems.map(f=><span key={f.name} style={{fontSize:13,color:f.lunas?"var(--color-text-secondary)":"var(--color-text-primary)",textDecoration:f.lunas?"line-through":"none"}}>{f.name}</span>)}</div></div>}{proj.hourlyJob&&proj.jobPerHour&&<div><span style={{fontSize:10,color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.05em",fontWeight:500}}>Job Per Hour</span><div style={{marginTop:4,fontSize:13,color:"var(--color-text-primary)"}}>${proj.jobPerHour}</div></div>}</div>}<Divider/>{vis.length>0&&<div style={{marginBottom:10,background:allDone?"#f0fdf4":"#fffbeb",border:`1.5px solid ${allDone?"#86efac":"#fcd34d"}`,borderRadius:10,padding:"12px 14px"}}><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={allDone?"#16a34a":"#b45309"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg><span style={{fontSize:11,color:allDone?"#16a34a":"#b45309",textTransform:"uppercase",letterSpacing:"0.05em",fontWeight:600}}>Tasks</span><span style={{fontSize:11,color:allDone?"#166534":"#92400e",background:allDone?"#dcfce7":"#fef3c7",borderRadius:20,padding:"1px 8px",fontWeight:500}}>{done}/{vis.length} selesai</span></div><div style={{height:4,background:allDone?"#bbf7d0":"#fde68a",borderRadius:4,marginBottom:10,overflow:"hidden"}}><div style={{height:"100%",width:`${pct}%`,background:allDone?"#22c55e":"#f59e0b",borderRadius:4,transition:"width 0.3s"}}/></div><div style={{display:"grid",gridTemplateColumns:"1fr",gap:"6px"}}>{vis.map(t=><div key={t.id} style={{display:"flex",alignItems:"center",gap:6}}>{t.done? <div style={{display:"flex",alignItems:"center",gap:6,flex:1,opacity:0.45}}><span style={{width:13,height:13,borderRadius:3,background:"#22c55e",display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><svg viewBox="0 0 12 12" width="9" height="9"><polyline points="1.5,6 4.5,9 10.5,3" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span style={{fontSize:12,color:allDone?"#16a34a":"#78350f",textDecoration:"line-through",flex:1}}>{t.name}</span>{t.deadline&&<span style={{fontSize:10,color:allDone?"#16a34a":"#b45309",flexShrink:0}}>{t.deadline}</span>}</div>: <div style={{display:"flex",alignItems:"center",gap:6,flex:1}}><CheckBox done={false}/><span style={{fontSize:12,color:"#78350f",flex:1}}>{t.name}</span>{t.deadline&&<span style={{fontSize:10,color:"#b45309",flexShrink:0}}>{t.deadline}</span>}</div>}</div>)}</div></div>}<div style={{display:"flex",gap:16,flexWrap:"wrap",marginBottom:12}}>{proj.priceRp&&<div><div style={{fontSize:10,color:"var(--color-text-secondary)",textTransform:"uppercase",fontWeight:500,marginBottom:2}}>Nett Price</div><div style={{fontSize:14,fontWeight:500}}>Rp {proj.priceRp}</div></div>}{proj.priceUSD&&<div><div style={{fontSize:10,color:"var(--color-text-secondary)",textTransform:"uppercase",fontWeight:500,marginBottom:2}}>Priced (USD)</div><div style={{fontSize:14,fontWeight:500}}>${proj.priceUSD}</div></div>}{proj.grossPrice&&<div><div style={{fontSize:10,color:"var(--color-text-secondary)",textTransform:"uppercase",fontWeight:500,marginBottom:2}}>Gross Price</div><div style={{fontSize:14,fontWeight:500}}>Rp {proj.grossPrice}</div></div>}<div style={{marginLeft:"auto",display:"flex",gap:6,flexWrap:"wrap"}}>{proj.invitation&&<span style={{fontSize:11,background:"#f0fdf4",color:"#166534",borderRadius:6,padding:"3px 10px"}}>Invitation</span>}{proj.team&&<span style={{fontSize:11,background:"#eff6ff",color:"#1d4ed8",borderRadius:6,padding:"3px 10px"}}>Team</span>}{proj.hourlyJob&&<span style={{fontSize:11,background:"#fdf2f8",color:"#86198f",borderRadius:6,padding:"3px 10px"}}>Hourly</span>}</div></div>{psItems.length>0&&<div style={{marginBottom:12,background:"#f0fdf4",border:"1.5px solid #86efac",borderRadius:10,padding:"12px 14px"}}><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg><span style={{fontSize:11,color:"#16a34a",textTransform:"uppercase",fontWeight:600,letterSpacing:"0.05em"}}>Payment Status</span><span style={{fontSize:11,background:"#dcfce7",color:"#166534",borderRadius:20,padding:"1px 8px",fontWeight:500,marginLeft:"auto"}}>{psItems.filter(f=>f.lunas).length}/{psItems.length} lunas</span></div><div style={{display:"flex",flexDirection:"column",gap:5}}>{psItems.map(f=><div key={f.name} style={{display:"flex",alignItems:"center",gap:8}}><span style={{width:7,height:7,borderRadius:"50%",background:f.lunas?"#22c55e":"#d1d5db",flexShrink:0,display:"inline-block"}}/><span style={{fontSize:13,color:f.lunas?"#166534":"#374151",textDecoration:f.lunas?"line-through":"none",flex:1,opacity:f.lunas?0.7:1}}>{f.name}</span>{f.lunas&&<span style={{fontSize:10,color:"#16a34a",fontWeight:600}}>✓ Lunas</span>}</div>)}</div></div>}<div style={{display:"flex",justifyContent:"flex-end",gap:8}}><button onClick={()=>onEdit(proj)} style={{fontSize:12,padding:"5px 14px"}}>Edit</button><button onClick={()=>onDelete(proj.id)} style={{fontSize:12,padding:"5px 14px",color:"var(--color-text-danger)",borderColor:"var(--color-border-danger)"}}>Hapus</button></div></div>;
}

const LOCATION_SUGGESTIONS = [
  "Australia","Austria","Belgium","Brazil","Canada","China","Denmark","Egypt","Finland","France",
  "Germany","Greece","Hong Kong","India","Indonesia","Ireland","Israel","Italy","Japan","Jordan",
  "Kuwait","Malaysia","Mexico","Netherlands","New Zealand","Norway","Pakistan","Philippines",
  "Poland","Portugal","Qatar","Russia","Saudi Arabia","Singapore","South Korea","Spain",
  "Sweden","Switzerland","Taiwan","Thailand","Turkey","UAE","United Kingdom","United States",
  "Vietnam","South Africa","Argentina","Chile","Colombia","Peru",
  "Jakarta","Bali","Surabaya","Bandung","Yogyakarta",
  "Sydney","Melbourne","Brisbane","Perth","Auckland",
  "London","Manchester","Edinburgh","Dublin",
  "New York","Los Angeles","Chicago","San Francisco","Miami","Toronto","Vancouver",
  "Dubai","Abu Dhabi","Doha","Riyadh","Kuwait City",
  "Tokyo","Seoul","Beijing","Shanghai","Bangkok","Kuala Lumpur","Manila","Ho Chi Minh City",
  "Trinidad and Tobago","Jamaica","Barbados","Bahamas","Dominican Republic","Cuba",
  "Panama","Costa Rica","Guatemala","Ecuador","Paraguay","Bolivia",
  "Ivory Coast","Ghana","Senegal","Cameroon","Angola","Ethiopia","Rwanda","Tanzania",
  "Mozambique","Namibia","Botswana","Madagascar","Somalia",
  "Algeria","Morocco","Libya","Tunisia","Sudan",
  "Sri Lanka","Nepal","Bangladesh","Myanmar","Cambodia","Laos","Mongolia",
  "Maldives","Brunei","Papua New Guinea","Fiji","New Zealand",
  "Latvia","Lithuania","Estonia","Slovenia","Croatia","Serbia","Albania","Cyprus","Malta","Luxembourg","Iceland",
  "Armenia","Georgia","Azerbaijan","Belarus","Moldova",
  "Turkmenistan","Kyrgyzstan","Tajikistan","Afghanistan",
  "Oman","Bahrain","Palestine","Yemen",
];

function LocationInput({value, onChange, style}) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  useEffect(()=>{
    const h = e => { if(ref.current&&!ref.current.contains(e.target)) setShow(false); };
    document.addEventListener("mousedown",h);
    return ()=>document.removeEventListener("mousedown",h);
  },[]);
  const q = (value||"").trim().toLowerCase();
  const filtered = q.length>=2
    ? LOCATION_SUGGESTIONS.filter(s=>s.toLowerCase().includes(q)).slice(0,6)
    : [];
  return <div ref={ref} style={{position:"relative"}}>
    <input
      style={style}
      value={value}
      onChange={e=>{onChange(e.target.value);setShow(true);}}
      onFocus={()=>setShow(true)}
      placeholder="Singapore, Malaysia, Australia..."
      autoComplete="off"
    />
    {show&&filtered.length>0&&<div style={{position:"absolute",top:"100%",left:0,right:0,zIndex:999,background:"#fff",border:"1px solid #ddd",borderRadius:8,marginTop:4,boxShadow:"0 4px 20px rgba(0,0,0,0.12)",overflow:"hidden"}}>
      {filtered.map(s=><div key={s} onMouseDown={e=>{e.preventDefault();onChange(s);setShow(false);}} style={{padding:"8px 12px",fontSize:13,cursor:"pointer",color:"#222"}} onMouseEnter={e=>e.currentTarget.style.background="#f5f5f5"} onMouseLeave={e=>e.currentTarget.style.background="#fff"}>
        {s}
      </div>)}
    </div>}
  </div>;
}

function ClientNameInput({value, onChange, onAutofill, allProjects, style}) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(()=>{
    const h = e => { if(ref.current&&!ref.current.contains(e.target)) setShow(false); };
    document.addEventListener("mousedown",h);
    return ()=>document.removeEventListener("mousedown",h);
  },[]);

  // Build unique client list from existing projects, keyed by lowercase name
  const clientMap = {};
  allProjects.forEach(p=>{
    const name = (p.clientName||"").trim();
    if (!name) return;
    const key = name.toLowerCase();
    if (!clientMap[key]) clientMap[key] = {name, clientType:p.clientType||"", address:p.address||"", platform:p.platform||"", count:0};
    clientMap[key].count++;
    // Always use latest project data for autofill
    if (p.clientType) clientMap[key].clientType = p.clientType;
    if (p.address)    clientMap[key].address    = p.address;
    if (p.platform)   clientMap[key].platform   = p.platform;
  });

  const q = (value||"").trim().toLowerCase();
  const suggestions = q.length>=1
    ? Object.values(clientMap)
        .filter(c=>c.name.toLowerCase().includes(q))
        .sort((a,b)=>b.count-a.count)
        .slice(0,6)
    : [];

  const pick = (client) => {
    onChange(client.name);
    onAutofill({clientType:client.clientType, address:client.address, platform:client.platform});
    setShow(false);
  };

  return <div ref={ref} style={{position:"relative"}}>
    <input
      style={style}
      value={value}
      onChange={e=>{onChange(e.target.value);setShow(true);}}
      onFocus={()=>setShow(true)}
      placeholder="Nama client..."
      autoComplete="off"
    />
    {show&&suggestions.length>0&&<div style={{
      position:"absolute",top:"100%",left:0,right:0,zIndex:999,
      background:"#fff",border:"1px solid #ddd",borderRadius:8,
      marginTop:4,boxShadow:"0 4px 20px rgba(0,0,0,0.12)",overflow:"hidden"
    }}>
      {suggestions.map(c=><div key={c.name}
        onMouseDown={e=>{e.preventDefault();pick(c);}}
        style={{padding:"8px 12px",cursor:"pointer",borderBottom:"0.5px solid #f0f0f0"}}
        onMouseEnter={e=>e.currentTarget.style.background="#f5f5f5"}
        onMouseLeave={e=>e.currentTarget.style.background="#fff"}
      >
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8}}>
          <span style={{fontSize:13,fontWeight:500,color:"#222"}}>{c.name}</span>
          <div style={{display:"flex",gap:4,flexShrink:0}}>
            {c.count>1&&<span style={{fontSize:10,background:"#eff6ff",color:"#1d4ed8",borderRadius:10,padding:"1px 7px"}}>{c.count}×</span>}
            {c.clientType&&<span style={{fontSize:10,background:"#f0fdf4",color:"#166534",borderRadius:10,padding:"1px 7px"}}>{c.clientType}</span>}
            {c.platform&&<span style={{fontSize:10,background:"#f4f4f4",color:"#555",borderRadius:10,padding:"1px 7px"}}>{c.platform}</span>}
          </div>
        </div>
        {c.address&&<div style={{fontSize:11,color:"#888",marginTop:2}}>{c.address}</div>}
      </div>)}
    </div>}
  </div>;
}

function ProjectForm({initial,onSave,onCancel,allProjects=[]}) {
  const [proj,setProj] = useState(initial||emptyProject());
  const [openId,setOpenId] = useState(null);
  const set=(k,v)=>setProj(p=>recalc({...p,[k]:v}));
  function recalc(p) {
    if (!p.grossPrice) return p;
    if (!p.team) return {...p,priceRp:p.grossPrice};
    const fi=normalizeFeeArr(p.fee); if(fi.length===0) return {...p,priceRp:p.grossPrice};
    const gross=parseFloat(p.grossPrice.replace(/\./g,"").replace(",","."))||0; if(gross===0) return p;
    const total=fi.reduce((s,f)=>{const m=f.name.match(/[\d.,]+/g);if(!m)return s;return s+(parseFloat(m[m.length-1].replace(/\./g,"").replace(",","."))||0);},0);
    return {...p,priceRp:formatRp(Math.round(gross-total).toString())};
  }
  const setTask=(id,k,v)=>setProj(p=>({...p,tasks:p.tasks.map(t=>t.id===id?{...t,[k]:v}:t)}));
  const addTask=()=>setProj(p=>({...p,tasks:[...p.tasks,{id:Date.now(),name:"",done:false,visible:false,deadline:""}]}));
  const removeTask=id=>setProj(p=>({...p,tasks:p.tasks.filter(t=>t.id!==id)}));
  const inp={width:"100%",boxSizing:"border-box"};
  return <div><div style={{fontWeight:500,fontSize:16,marginBottom:16}}>{initial?"Edit Proyek":"Proyek Baru"}</div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}><Field label="Nama Proyek"><input style={inp} value={proj.projectName} onChange={e=>set("projectName",e.target.value)} placeholder="Proyek Sarah"/></Field><Field label="Client Name"><ClientNameInput style={inp} value={proj.clientName} allProjects={allProjects} onChange={v=>set("clientName",v)} onAutofill={({clientType,address,platform})=>setProj(p=>({...p,clientType:clientType||p.clientType,address:address||p.address,platform:platform||p.platform}))}/></Field><Field label="Client Type"><SearchableSelect id="clientType" value={proj.clientType||"Owner"} onChange={v=>set("clientType",v)} openId={openId} setOpenId={setOpenId} storageKey="_clientTypeOptions" defaultOptions={clientTypeOptions} placeholder="Pilih tipe klien..."/></Field><Field label="Platform"><CustomSelect id="platform" value={proj.platform} onChange={v=>set("platform",v)} options={platformOptions} openId={openId} setOpenId={setOpenId}/></Field><div style={{gridColumn:"1/-1"}}><Field label="Location"><LocationInput style={inp} value={proj.address} onChange={v=>set("address",v)}/></Field><div style={{display:"flex",gap:16,marginTop:4,flexWrap:"wrap"}}>{proj.platform==="Upwork"&&<div style={{display:"flex",alignItems:"center",gap:8}}><input type="checkbox" id="inv" checked={proj.invitation} onChange={e=>set("invitation",e.target.checked)}/><label htmlFor="inv" style={{fontSize:13}}>Invitation</label></div>}<div style={{display:"flex",alignItems:"center",gap:8}}><input type="checkbox" id="team" checked={proj.team||false} onChange={e=>{set("team",e.target.checked);if(e.target.checked)set("hourlyJob",false);}}/><label htmlFor="team" style={{fontSize:13}}>Team</label></div><div style={{display:"flex",alignItems:"center",gap:8}}><input type="checkbox" id="hourlyJob" checked={proj.hourlyJob||false} onChange={e=>{set("hourlyJob",e.target.checked);if(e.target.checked)set("team",false);}}/><label htmlFor="hourlyJob" style={{fontSize:13}}>Hourly Job</label></div></div></div><RpInput label="Nett Price (Rp)" value={proj.priceRp} onChange={v=>set("priceRp",v)}/><Field label="Priced (USD)"><input style={inp} value={proj.priceUSD} onChange={e=>set("priceUSD",e.target.value)}/></Field><RpInput label="Gross Price (Rp)" value={proj.grossPrice} onChange={v=>set("grossPrice",v)}/>{proj.hourlyJob?<Field label="Job Per Hour ($)"><input style={inp} value={proj.jobPerHour} onChange={e=>set("jobPerHour",e.target.value)} placeholder="40"/></Field>:<div/>}<div style={{gridColumn:"1/-1"}}><Field label="Payment Status"><MilestoneSelect id="paymentStatus" value={proj.paymentStatus||[]} onChange={v=>set("paymentStatus",v)} openId={openId} setOpenId={setOpenId} storageKey={`_psOptions_${proj.id}`}/></Field></div>{proj.team&&<div style={{gridColumn:"1/-1"}}><Field label="Fee"><FeeSelect id="fee" value={proj.fee||[]} onChange={v=>set("fee",v)} openId={openId} setOpenId={setOpenId}/></Field></div>}<Field label="Area (m²)"><input style={inp} value={proj.area} onChange={e=>set("area",e.target.value)}/></Field><Field label="Style"><input style={inp} value={proj.style} onChange={e=>set("style",e.target.value)} placeholder="Minimalist, Modern, Classic..."/></Field><Field label="Hours"><input style={inp} value={proj.hours} onChange={e=>set("hours",e.target.value)}/></Field><div/><Field label="Start Date"><input type="date" style={inp} value={proj.startDate} onChange={e=>set("startDate",e.target.value)}/></Field><Field label="End Date"><input type="date" style={inp} value={proj.endDate} onChange={e=>set("endDate",e.target.value)}/></Field><Field label="Status"><CustomSelect id="status" value={proj.status} onChange={v=>set("status",v)} options={statusOptions} openId={openId} setOpenId={setOpenId}/></Field><div/><Field label="Scope of Work"><SearchableSelect id="jobType" value={proj.jobType} onChange={v=>set("jobType",v)} openId={openId} setOpenId={setOpenId} storageKey="_jobTypeOptions" defaultOptions={defaultJobTypeOptions} placeholder="Pilih scope..."/></Field><Field label="Project Type"><SearchableSelect id="design" value={proj.design} onChange={v=>set("design",v)} openId={openId} setOpenId={setOpenId} storageKey="_designOptions" defaultOptions={defaultDesignOptions} placeholder="Pilih tipe..."/></Field><div style={{gridColumn:"1/-1"}}><Field label="Notes"><textarea style={{...inp,height:60,resize:"vertical"}} value={proj.notes} onChange={e=>set("notes",e.target.value)}/></Field></div></div><div style={{marginTop:16,borderTop:"0.5px solid var(--color-border-tertiary)",paddingTop:14}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}><span style={{fontWeight:500,fontSize:14}}>Tasks</span><button onClick={addTask} style={{fontSize:12,padding:"3px 12px"}}>+ Tambah</button></div><div style={{display:"grid",gridTemplateColumns:"64px 1fr 140px 44px 28px",gap:6,alignItems:"center",marginBottom:4}}>{["Tampil","Nama Task","Deadline","Done",""].map((h,i)=><span key={i} style={{fontSize:10,color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.04em"}}>{h}</span>)}</div>{proj.tasks.map((t,i)=><div key={t.id} style={{display:"grid",gridTemplateColumns:"64px 1fr 140px 44px 28px",gap:6,alignItems:"center",marginBottom:6}}><select value={t.visible?"yes":"no"} onChange={e=>setTask(t.id,"visible",e.target.value==="yes")} style={{fontSize:12,padding:"3px 4px"}}><option value="no">no</option><option value="yes">yes</option></select><input value={t.name} onChange={e=>setTask(t.id,"name",e.target.value)} placeholder={`Task ${i+1}`}/><input type="date" value={t.deadline} onChange={e=>setTask(t.id,"deadline",e.target.value)}/><div style={{textAlign:"center"}}><span onClick={()=>setTask(t.id,"done",!t.done)} style={{cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",width:18,height:18,border:`1.5px solid ${t.done?"#22c55e":"var(--color-border-secondary)"}`,borderRadius:4,background:t.done?"#22c55e":"transparent"}}>{t.done&&<svg viewBox="0 0 12 12" width="11" height="11"><polyline points="1.5,6 4.5,9 10.5,3" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}</span></div><button onClick={()=>removeTask(t.id)} style={{fontSize:12,padding:"2px 6px",color:"var(--color-text-danger)"}}>✕</button></div>)}</div><div style={{display:"flex",gap:8,marginTop:16,justifyContent:"flex-end"}}><button onClick={onCancel} style={{fontSize:13,padding:"6px 16px"}}>Batal</button><button onClick={()=>onSave(proj)} style={{fontSize:13,padding:"6px 16px",background:"#111",color:"#fff",borderColor:"#111"}}>Simpan</button></div></div>;
}




const PRIORITY_CFG = {
  High:   {bg:"#fef2f2",color:"#991b1b",dot:"#ef4444",order:0},
  Medium: {bg:"#fff8ed",color:"#b45309",dot:"#f59e0b",order:1},
  Low:    {bg:"#f0fdf4",color:"#166534",dot:"#22c55e",order:2},
};
const priorityOptions = ["High","Medium","Low"];

function DeadlineWarningBanner({projects}) {
  const [threshold, setThreshold] = useState(()=>{try{return parseInt(window._deadlineThreshold)||7;}catch(e){return 7;}});
  const [editing, setEditing] = useState(false);
  const [tempVal, setTempVal] = useState(threshold);
  const [dismissed, setDismissed] = useState([]);

  useEffect(()=>{window._deadlineThreshold=threshold;},[threshold]);

  const today = new Date(); today.setHours(0,0,0,0);

  const warnings = [];
  projects.filter(p=>p.status==="Ongoing").forEach(p=>{
    p.tasks.filter(t=>t.visible&&!t.done&&t.deadline).forEach(t=>{
      const dl = new Date(t.deadline); dl.setHours(0,0,0,0);
      const diff = Math.round((dl-today)/(1000*60*60*24));
      const key = `${p.id}-${t.id}`;
      if (!dismissed.includes(key)) {
        if (diff < 0) warnings.push({key,proj:p,task:t,diff,type:"overdue"});
        else if (diff <= threshold) warnings.push({key,proj:p,task:t,diff,type:"soon"});
      }
    });
  });

  warnings.sort((a,b)=>a.diff-b.diff);

  if (warnings.length===0) return null;

  const overdue = warnings.filter(w=>w.type==="overdue");
  const soon = warnings.filter(w=>w.type==="soon");

  return <div style={{marginBottom:24}}>
    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      <span style={{fontWeight:500,fontSize:15}}>Deadline Warning</span>
      <span style={{fontSize:11,background:"#fff8ed",color:"#b45309",borderRadius:20,padding:"2px 10px",fontWeight:500}}>{warnings.length} task</span>
      <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:6}}>
        {editing
          ? <><input autoFocus type="number" min="1" max="90" value={tempVal} onChange={e=>setTempVal(e.target.value)} style={{width:48,fontSize:12,padding:"3px 6px",border:"1px solid #f59e0b",borderRadius:4,textAlign:"center"}}/><span style={{fontSize:12,color:"var(--color-text-secondary)"}}>hari</span><button onClick={()=>{const v=parseInt(tempVal);if(v>0){setThreshold(v);}setEditing(false);}} style={{fontSize:11,padding:"3px 8px",background:"#fff8ed",color:"#b45309",borderColor:"#f59e0b",borderRadius:4}}>OK</button><button onClick={()=>setEditing(false)} style={{fontSize:11,padding:"3px 6px",border:"none",background:"transparent",color:"#aaa",cursor:"pointer"}}>✕</button></>
          : <button onClick={()=>{setTempVal(threshold);setEditing(true);}} style={{fontSize:11,padding:"3px 10px",borderRadius:6,border:"0.5px solid var(--color-border-tertiary)",background:"transparent",color:"var(--color-text-secondary)",cursor:"pointer"}}>⚙ {threshold} hari</button>
        }
      </div>
    </div>
    <div style={{display:"flex",flexDirection:"column",gap:6}}>
      {warnings.map(w=>{
        const isOverdue = w.type==="overdue";
        const bg = isOverdue?"#fef2f2":"#fff8ed";
        const border = isOverdue?"#fca5a5":"#fcd34d";
        const textColor = isOverdue?"#991b1b":"#92400e";
        const dotColor = isOverdue?"#ef4444":"#f59e0b";
        const dayLabel = isOverdue ? `${Math.abs(w.diff)} hari lalu` : w.diff===0 ? "Hari ini!" : `${w.diff} hari lagi`;
        return <div key={w.key} style={{display:"flex",alignItems:"center",gap:10,background:bg,border:`1px solid ${border}`,borderRadius:8,padding:"10px 14px"}}>
          <span style={{width:8,height:8,borderRadius:"50%",background:dotColor,flexShrink:0}}/>
          <span style={{fontSize:13,fontWeight:500,color:textColor,flex:1}}>{w.proj.projectName||"Untitled"}</span>
          <span style={{fontSize:12,color:textColor,opacity:0.8}}>{w.task.name}</span>
          <span style={{fontSize:11,fontWeight:600,color:textColor,background:"#fff",borderRadius:20,padding:"2px 8px",border:`1px solid ${border}`,whiteSpace:"nowrap"}}>{dayLabel}</span>
          <button onClick={()=>setDismissed(d=>[...d,w.key])} style={{fontSize:12,border:"none",background:"transparent",color:"#aaa",cursor:"pointer",padding:"2px 4px",lineHeight:1}}>✕</button>
        </div>;
      })}
    </div>
  </div>;
}

function IncomeLineChart({projects}) {
  const canvasRef = useRef(null);
  const chartRef  = useRef(null);

  const allYears = [...new Set(projects.map(p=>(p.startDate||"").slice(0,4)).filter(Boolean))].sort().reverse();
  const [selYear, setSelYear] = useState(()=>allYears[0]||String(new Date().getFullYear()));

  const MONTHS = ["","Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];
  const months12 = Array.from({length:12},(_,i)=>String(i+1).padStart(2,"0"));
  const labels = months12.map(mo=>MONTHS[parseInt(mo)]);
  const grossData = months12.map(mo=>
    projects
      .filter(p=>(p.startDate||"").startsWith(`${selYear}-${mo}`))
      .reduce((s,p)=>s+parseRp(p.grossPrice||p.priceRp),0)
  );

  const totalYear = grossData.reduce((s,v)=>s+v,0);
  const activeMonths = grossData.filter(v=>v>0);
  const avg = activeMonths.length ? Math.round(totalYear/activeMonths.length) : 0;
  const maxIdx = grossData.indexOf(Math.max(...grossData));
  const now = new Date();
  const curMoIdx = selYear===String(now.getFullYear()) ? now.getMonth() : -1;
  const prevVal = curMoIdx>0 ? grossData[curMoIdx-1] : 0;
  const curVal  = curMoIdx>=0 ? grossData[curMoIdx] : 0;
  const vsLast  = prevVal>0 ? Math.round((curVal-prevVal)/prevVal*100) : null;

  useEffect(()=>{
    if (!canvasRef.current) return;
    if (chartRef.current) { chartRef.current.destroy(); chartRef.current=null; }
    const init = () => {
      if (!window.Chart) return;
      chartRef.current = new window.Chart(canvasRef.current,{
        type:"line",
        data:{labels,datasets:[{
          data:grossData,
          borderColor:"#14a800",backgroundColor:"rgba(20,168,0,0.08)",
          borderWidth:2,pointRadius:4,pointBackgroundColor:"#14a800",
          fill:true,tension:0.35,
        }]},
        options:{
          responsive:true,maintainAspectRatio:false,
          layout:{padding:{top:16}},
          plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>ctx.parsed.y>0?`Rp ${fmtFull(ctx.parsed.y)}`:null}}},
          scales:{
            x:{grid:{color:"rgba(128,128,128,0.1)"},ticks:{font:{size:11},color:"#888",maxRotation:0}},
            y:{grid:{color:"rgba(128,128,128,0.1)"},ticks:{font:{size:10},color:"#888",callback:v=>v>=1000000?`${(v/1000000).toFixed(0)}jt`:v>=1000?`${Math.round(v/1000)}rb`:`${v}`},min:0}
          }
        }
      });
    };
    if (window.Chart) init();
    else { const s=document.createElement("script"); s.src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"; s.onload=init; document.head.appendChild(s); }
    return ()=>{ if(chartRef.current){chartRef.current.destroy();chartRef.current=null;} };
  },[selYear, JSON.stringify(grossData)]);

  if (allYears.length===0) return <div style={{fontSize:13,color:"var(--color-text-secondary)",textAlign:"center",padding:"1rem 0"}}>Belum ada data income.</div>;

  return <div>
    {/* Year selector pills */}
    <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:14,flexWrap:"wrap"}}>
      {allYears.map(y=>(
        <button key={y} onClick={()=>setSelYear(y)} style={{
          fontSize:12,padding:"3px 14px",borderRadius:20,cursor:"pointer",border:"1.5px solid",
          background:selYear===y?"#111":"transparent",
          color:selYear===y?"#fff":"var(--color-text-secondary)",
          borderColor:selYear===y?"#111":"var(--color-border-secondary)",
          fontWeight:selYear===y?500:400,transition:"all 0.15s"
        }}>{y}</button>
      ))}
    </div>
    {/* Stats row */}
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:14}}>
      <div style={{background:"#f4f4f4",borderRadius:8,padding:"10px 14px"}}>
        <div style={{fontSize:11,color:"#888",marginBottom:4}}>Total {selYear}</div>
        <div style={{fontSize:16,fontWeight:500,color:"#222"}}>Rp {fmtFull(totalYear)}</div>
      </div>
      <div style={{background:"#f4f4f4",borderRadius:8,padding:"10px 14px"}}>
        <div style={{fontSize:11,color:"#888",marginBottom:4}}>Rata-rata/bulan aktif</div>
        <div style={{fontSize:16,fontWeight:500,color:"#222"}}>Rp {fmtFull(avg)}</div>
      </div>
      <div style={{background:"#f4f4f4",borderRadius:8,padding:"10px 14px"}}>
        <div style={{fontSize:11,color:"#888",marginBottom:4}}>{vsLast!=null?"vs bulan lalu":"Bulan terbaik"}</div>
        <div style={{fontSize:16,fontWeight:500,color:vsLast!=null?(vsLast>=0?"#16a34a":"#dc2626"):"#222"}}>
          {vsLast!=null
            ?(vsLast>=0?`+${vsLast}%`:`${vsLast}%`)
            :(maxIdx>=0&&grossData[maxIdx]>0?`${labels[maxIdx]} · Rp ${fmtFull(grossData[maxIdx])}`:"—")}
        </div>
      </div>
    </div>
    <div style={{position:"relative",width:"100%",height:200}}>
      <canvas ref={canvasRef}/>
    </div>
  </div>;
}

function IncomeStackedBar({projects}) {
  const canvasRef = useRef(null);
  const chartRef  = useRef(null);

  const allMonths = [...new Set(projects.map(p=>(p.startDate||"").slice(0,7)).filter(Boolean))].sort();
  const labels = allMonths.map(m=>{ const [,mo]=m.split("-"); return ["","Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"][parseInt(mo)]; });

  const datasets = platformOptions.map(pl=>({
    label:pl,
    data:allMonths.map(m=>projects.filter(p=>(p.startDate||"").startsWith(m)&&p.platform===pl).reduce((s,p)=>s+parseRp(p.grossPrice||p.priceRp),0)),
    backgroundColor:PLATFORM_COLORS[pl],
    stack:"s",
    borderRadius:0,
  })).filter(ds=>ds.data.some(v=>v>0));

  const totals = allMonths.map((_,i)=>datasets.reduce((s,ds)=>s+(ds.data[i]||0),0));

  useEffect(()=>{
    if (!canvasRef.current||allMonths.length===0) return;
    if (chartRef.current) { chartRef.current.destroy(); chartRef.current=null; }
    const init = () => {
      if (!window.Chart) return;

      const totalLabelPlugin = {
        id:"totalLabel",
        afterDatasetsDraw(chart) {
          const {ctx} = chart;
          const lastDs = chart.data.datasets[chart.data.datasets.length-1];
          if (!lastDs) return;
          const meta = chart.getDatasetMeta(chart.data.datasets.length-1);
          meta.data.forEach((bar,i)=>{
            const total = totals[i];
            if (!total) return;
            const label = total>=1000000?`${(total/1000000).toFixed(1)}jt`:total>=1000?`${Math.round(total/1000)}rb`:total;
            ctx.save();
            ctx.font = "500 10px sans-serif";
            ctx.fillStyle = "#555";
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";
            ctx.fillText(label, bar.x, bar.y - 3);
            ctx.restore();
          });
        }
      };

      chartRef.current = new window.Chart(canvasRef.current,{
        type:"bar",
        plugins:[totalLabelPlugin],
        data:{labels,datasets},
        options:{
          responsive:true,maintainAspectRatio:false,
          layout:{padding:{top:20}},
          plugins:{legend:{display:false},tooltip:{callbacks:{
            label:ctx=>`${ctx.dataset.label}: Rp ${fmtRp(ctx.parsed.y)}`,
            footer:items=>`Total: Rp ${fmtRp(items.reduce((s,i)=>s+i.parsed.y,0))}`
          }}},
          scales:{
            x:{stacked:true,grid:{color:"rgba(128,128,128,0.1)"},ticks:{font:{size:11},color:"#888"}},
            y:{stacked:true,grid:{color:"rgba(128,128,128,0.1)"},ticks:{font:{size:10},color:"#888",callback:v=>v>=1000000?`${(v/1000000).toFixed(0)}jt`:v>=1000?`${(v/1000).toFixed(0)}rb`:v},min:0}
          }
        }
      });
    };
    if (window.Chart) init();
    else { const s=document.createElement("script"); s.src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"; s.onload=init; document.head.appendChild(s); }
    return ()=>{ if(chartRef.current){chartRef.current.destroy();chartRef.current=null;} };
  },[JSON.stringify(datasets)]);

  if (allMonths.length===0) return <div style={{fontSize:13,color:"var(--color-text-secondary)",textAlign:"center",padding:"1rem 0"}}>Belum ada data income.</div>;

  return <div>
    <div style={{display:"flex",gap:12,marginBottom:10,fontSize:12,color:"var(--color-text-secondary)"}}>
      {datasets.map(ds=><span key={ds.label} style={{display:"flex",alignItems:"center",gap:5}}>
        <span style={{width:10,height:10,borderRadius:2,background:PLATFORM_COLORS[ds.label],display:"inline-block"}}/>
        {ds.label}
      </span>)}
    </div>
    <div style={{position:"relative",width:"100%",height:200}}>
      <canvas ref={canvasRef}/>
    </div>
  </div>;
}

function DashboardPage({projects, setProjects}) {
  const setPriority = (id, priority) => setProjects(ps=>ps.map(p=>p.id===id?{...p,priority}:p));

  const ongoing = projects.filter(p=>p.status==="Ongoing")
    .sort((a,b)=>(PRIORITY_CFG[a.priority]?.order??3)-(PRIORITY_CFG[b.priority]?.order??3));

  const unpaidProjects = projects.map(p=>{
    const psItems  = normalizeFeeArr(p.paymentStatus).filter(f=>!f.lunas);
    const feeItems = normalizeFeeArr(p.fee).filter(f=>!f.lunas);
    const unpaid = [
      ...psItems.map(f=>({...f, _type:"payment"})),
      ...feeItems.map(f=>({...f, _type:"fee"})),
    ];
    return {proj:p, unpaid};
  });

  const cardStyle = {border:"2px solid #000",borderRadius:12,background:"var(--color-background-primary)",padding:"14px 16px",boxShadow:"0 2px 8px rgba(0,0,0,0.07)"};
  const sectionLabel = {fontSize:10,color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",fontWeight:500};

  return <div>
    <div style={{fontWeight:500,fontSize:20,marginBottom:20}}>Dashboard</div>

    {/* Income Trend */}
    <div style={{border:"2px solid #000",borderRadius:12,background:"var(--color-background-primary)",padding:"14px 16px",boxShadow:"0 2px 8px rgba(0,0,0,0.07)",marginBottom:28}}>
      <div style={{fontWeight:500,fontSize:15,marginBottom:14}}>Tren Income</div>
      <IncomeLineChart projects={projects}/>
    </div>
    <div style={{marginBottom:28}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
        <span style={{fontWeight:500,fontSize:15}}>Ongoing Projects</span>
        <span style={{fontSize:12,background:"#fff8ed",color:"#b45309",borderRadius:20,padding:"2px 10px",fontWeight:500}}>{ongoing.length}</span>
      </div>
      {ongoing.length===0
        ? <div style={{...cardStyle,color:"var(--color-text-secondary)",fontSize:13,textAlign:"center",padding:"2rem"}}>Tidak ada proyek ongoing.</div>
        : <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:12}}>
            {ongoing.map(p=>{
              const incompleteTasks = p.tasks.filter(t=>t.visible&&!t.done);
              const pr = p.priority;
              const pc = PRIORITY_CFG[pr];
              const headerBg   = pc ? pc.bg  : "var(--color-background-secondary)";
              const headerBorder = pc ? pc.dot : "var(--color-border-tertiary)";
              const headerColor  = pc ? pc.color : "var(--color-text-primary)";
              const subColor     = pc ? pc.color : "var(--color-text-secondary)";
              return <div key={p.id} style={{border:"2px solid #000",borderRadius:12,background:"var(--color-background-primary)",boxShadow:"0 2px 8px rgba(0,0,0,0.07)",overflow:"hidden"}}>
                {/* Header — berubah warna sesuai priority */}
                <div style={{background:headerBg,borderBottom:`1.5px solid ${headerBorder}`,padding:"10px 14px"}}>
                  <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:2}}>
                    <div style={{display:"flex",alignItems:"center",gap:6,flex:1,minWidth:0}}>
                      <div style={{fontWeight:500,fontSize:14,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:headerColor}}>{p.projectName||"Untitled"}</div>
                      <span style={{fontSize:11,background:"rgba(0,0,0,0.06)",borderRadius:6,padding:"1px 7px",color:subColor,fontWeight:500,flexShrink:0}}>{projectNum(p,projects)}</span>
                    </div>
                    <span style={{flexShrink:0,marginLeft:8}}><PlatformIcon platform={p.platform} size={18}/></span>
                  </div>
                  <div style={{fontSize:11,color:subColor}}>{p.clientName||"—"}</div>
                </div>
                {/* Body */}
                <div style={{padding:"10px 14px"}}>
                  {/* Priority selector */}
                  <div style={{display:"flex",gap:5,marginBottom:10}}>
                    {priorityOptions.map(opt=>{
                      const c = PRIORITY_CFG[opt];
                      const active = pr===opt;
                      return <button key={opt} onClick={()=>setPriority(p.id,active?null:opt)} style={{fontSize:11,padding:"4px 10px",borderRadius:6,border:`1px solid ${active?c.dot:"#e5e7eb"}`,background:active?c.dot:"transparent",color:active?"#fff":"#aaa",cursor:"pointer",fontWeight:active?500:400,transition:"all 0.15s"}}>{opt}</button>;
                    })}
                  </div>
                  {incompleteTasks.length===0
                    ? <div style={{fontSize:12,color:"#22c55e"}}>✓ Semua task selesai</div>
                    : <div style={{display:"flex",flexDirection:"column",gap:5}}>
                        <span style={sectionLabel}>Tasks tersisa</span>
                        {incompleteTasks.map(t=><div key={t.id} style={{display:"flex",alignItems:"center",gap:6}}>
                          <span style={{width:6,height:6,borderRadius:"50%",background:"#f59e0b",flexShrink:0,display:"inline-block"}}/>
                          <span style={{fontSize:12,color:"var(--color-text-primary)"}}>{t.name}</span>
                          {t.deadline&&<span style={{fontSize:10,color:"var(--color-text-secondary)",marginLeft:"auto"}}>{t.deadline}</span>}
                        </div>)}
                      </div>
                  }
                </div>
              </div>;
            })}
          </div>
      }
    </div>

    {/* Unpaid Invoices */}
    <div>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
        <span style={{fontWeight:500,fontSize:15}}>Unpaid Invoices</span>
        <span style={{fontSize:12,background:"#fef2f2",color:"#991b1b",borderRadius:20,padding:"2px 10px",fontWeight:500}}>{unpaidProjects.filter(x=>x.unpaid.length>0).length}</span>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:12}}>
        {unpaidProjects.filter(x=>x.unpaid.length>0).length===0
          ? <div style={{...cardStyle,color:"var(--color-text-secondary)",fontSize:13,textAlign:"center",padding:"2rem"}}>NONE</div>
          : unpaidProjects.filter(x=>x.unpaid.length>0).map(({proj:p,unpaid})=><div key={p.id} style={cardStyle}>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2}}>
                <div style={{fontWeight:500,fontSize:14}}>{p.projectName||"Untitled"}</div>
                <span style={{fontSize:11,background:"var(--color-background-secondary)",borderRadius:6,padding:"1px 7px",color:"var(--color-text-secondary)",fontWeight:500,flexShrink:0}}>{projectNum(p,projects)}</span>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:5,marginTop:8}}>
                <span style={sectionLabel}>Belum dibayar</span>
                {unpaid.map(f=><div key={f.name+(f._type||"")} style={{display:"flex",alignItems:"center",gap:6}}>
                  <span style={{width:6,height:6,borderRadius:"50%",background:"#ef4444",flexShrink:0,display:"inline-block"}}/>  
                  <span style={{fontSize:12,color:"var(--color-text-primary)",flex:1}}>{f.name}</span>
                  <span style={{fontSize:10,borderRadius:4,padding:"1px 6px",background:f._type==="payment"?"#fef3c7":"#eff6ff",color:f._type==="payment"?"#92400e":"#1d4ed8",flexShrink:0}}>{f._type==="payment"?"Payment":"Fee"}</span>
                </div>)}
              </div>
            </div>)
        }
      </div>
    </div>
  </div>;
}

// ── Theme ────────────────────────────────────────────────────────────────────

const DEFAULT_ACCENT = "#1d4ed8";

function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)}, ${parseInt(r[2],16)}, ${parseInt(r[3],16)}` : null;
}

function lighten(hex, amt) {
  // naive lighten: blend toward white
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!r) return hex;
  const to255 = s => parseInt(s,16);
  const blend = (c) => Math.round(c + (255-c)*amt).toString(16).padStart(2,"0");
  return `#${blend(to255(r[1]))}${blend(to255(r[2]))}${blend(to255(r[3]))}`;
}

function applyAccent(hex) {
  const root = document.documentElement;
  const valid = /^#[0-9a-fA-F]{6}$/.test(hex);
  const color = valid ? hex : DEFAULT_ACCENT;
  root.style.setProperty("--accent", color);
  root.style.setProperty("--accent-bg", lighten(color, 0.88));
  root.style.setProperty("--accent-border", lighten(color, 0.55));
  root.style.setProperty("--color-text-info", color);
  root.style.setProperty("--color-background-info", lighten(color, 0.88));
  root.style.setProperty("--color-border-info", lighten(color, 0.55));
}

function RangeSettingsPanel() {
  const [areaRanges, setAreaRanges] = useState(loadAreaRanges);
  const [durasiRanges, setDurasiRanges] = useState(loadDurasiRanges);
  const [addingArea, setAddingArea] = useState(false);
  const [addingDurasi, setAddingDurasi] = useState(false);
  const [areaMin, setAreaMin] = useState("");
  const [areaMax, setAreaMax] = useState("");
  const [durasiMax, setDurasiMax] = useState("");
  const [saved, setSaved] = useState(false);

  const flash = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  const updateArea = (r) => {
    const sorted = [...r].sort((a, b) => a[0] - b[0]);
    setAreaRanges(sorted);
    saveAreaRanges(sorted);
    flash();
  };

  const updateDurasi = (r) => {
    setDurasiRanges(r);
    saveDurasiRanges(r);
    flash();
  };

  const addAreaRange = () => {
    const mn = parseInt(areaMin);
    const mx = parseInt(areaMax);

    if (!isNaN(mn) && !isNaN(mx) && mn < mx) {
      updateArea([...areaRanges, [mn, mx]]);
      setAreaMin("");
      setAreaMax("");
      setAddingArea(false);
    }
  };

  const addDurasiRange = () => {
    const mx = parseInt(durasiMax);

    if (!isNaN(mx) && mx > 0) {
      const last =
        durasiRanges.length > 0
          ? durasiRanges[durasiRanges.length - 1][1]
          : 0;

      updateDurasi([...durasiRanges, [last + 1, mx]]);
      setDurasiMax("");
      setAddingDurasi(false);
    }
  };

  const resetArea = () => updateArea([...DEFAULT_AREA_RANGES]);
  const resetDurasi = () => updateDurasi([...DEFAULT_DURASI_RANGES]);

  const durasiLabel = ([mnM, mxM]) =>
    mnM === 0
      ? `≤ ${mxM} bulan`
      : mnM === mxM
      ? `${mnM} bulan`
      : `${mnM} – ${mxM} bulan`;

  const subTitle = {
    fontSize: 12,
    fontWeight: 600,
    color: "var(--color-text-secondary)",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    marginBottom: 8,
  };

  const tagSt = {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    background: "var(--color-background-secondary)",
    border: "0.5px solid var(--color-border-tertiary)",
    borderRadius: 20,
    padding: "3px 10px 3px 12px",
    fontSize: 12,
    color: "var(--color-text-primary)",
    marginBottom: 6,
    marginRight: 6,
  };

  const delBtn = {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#f87171",
    fontSize: 14,
    lineHeight: 1,
    padding: "0 2px",
  };

  return (
    <div>
      {saved && (
        <div
          style={{
            fontSize: 12,
            color: "#166534",
            background: "#f0fdf4",
            border: "0.5px solid #86efac",
            borderRadius: 6,
            padding: "5px 12px",
            marginBottom: 12,
            display: "inline-block",
          }}
        >
          ✓ Tersimpan
        </div>
      )}

      {/* Area */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={subTitle}>Range Area (m²)</span>
          <button onClick={resetArea}>Reset default</button>
        </div>

        <div>
          {areaRanges.map(([mn, mx], i) => (
            <span key={i} style={tagSt}>
              {mn} – {mx}
              <button onClick={() => updateArea(areaRanges.filter((_, j) => j !== i))}>
                ×
              </button>
            </span>
          ))}
        </div>

        {addingArea ? (
          <div style={{ marginTop: 8 }}>
            <input value={areaMin} onChange={(e) => setAreaMin(e.target.value)} placeholder="Min" />
            <input value={areaMax} onChange={(e) => setAreaMax(e.target.value)} placeholder="Max" />
            <button onClick={addAreaRange}>Tambah</button>
            <button
              onClick={() => {
                setAddingArea(false);
                setAreaMin("");
                setAreaMax("");
              }}
            >
              Batal
            </button>
          </div>
        ) : (
          <button onClick={() => setAddingArea(true)}>+ Tambah Range</button>
        )}
      </div>

      {/* Durasi */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={subTitle}>Range Durasi (bulan)</span>
          <button onClick={resetDurasi}>Reset default</button>
        </div>

        <div>
          {durasiRanges.map((r, i) => (
            <span key={i} style={tagSt}>
              {durasiLabel(r)}
              <button onClick={() => updateDurasi(durasiRanges.filter((_, j) => j !== i))}>
                ×
              </button>
            </span>
          ))}
        </div>

        {addingDurasi ? (
          <div style={{ marginTop: 8 }}>
            <input
              value={durasiMax}
              onChange={(e) => setDurasiMax(e.target.value)}
              placeholder="Max"
            />
            <button onClick={addDurasiRange}>Tambah</button>
            <button
              onClick={() => {
                setAddingDurasi(false);
                setDurasiMax("");
              }}
            >
              Batal
            </button>
          </div>
        ) : (
          <button onClick={() => setAddingDurasi(true)}>+ Tambah Range</button>
        )}
      </div>
    </div>
  );
}

function DataManagement({ projects, setProjects, tags, setTags, expenses }){
  const [status, setStatus] = useState("");
  const [importing, setImporting] = useState(false);
  const fileRef = useRef(null);

	const exportData = () => {
	  try {
		const data = {
		  projects,
		  tags,
		  expenses
		};

		const blob = new Blob([JSON.stringify(data, null, 2)], {
		  type: "application/json"
		});

		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");

		a.href = url;
		a.download = `project-cards-${new Date().toISOString().slice(0,10)}.json`;

		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);

		URL.revokeObjectURL(url);

		setStatus("✓ Export berhasil");
		setTimeout(()=>setStatus(""), 3000);
	  } catch(e) {
		setStatus("✕ Gagal export");
		setTimeout(()=>setStatus(""), 3000);
	  }

	const importData = (e) => {
	  const file = e.target.files?.[0];
	  if (!file) return;

	  setImporting(true);
	  const reader = new FileReader();

	  reader.onload = (ev) => {
		try {
		  const parsed = JSON.parse(ev.target.result);

		  let incomingProjects = [];
		  let incomingTags = [];

		  if (Array.isArray(parsed)) {
			incomingProjects = parsed;
		  } else {
			incomingProjects = parsed.projects || [];
			incomingTags = parsed.tags || [];
		  }

		  const existing = projects;
		  const existingIds = new Set(existing.map(p => p.id));

		  const newProjects = incomingProjects.filter(p => !existingIds.has(p.id));
		  const merged = [...existing, ...newProjects];

		  setProjects(merged);

		  // 🔥 MERGE TAGS
		  if (incomingTags.length) {
			setTags(prev => [...new Set([...prev, ...incomingTags])]);
		  }

		  setStatus(`✓ ${newProjects.length} proyek baru ditambahkan.`);
		  setTimeout(()=>setStatus(""), 5000);

		} catch(err) {
		  setStatus("✕ File tidak valid. Pastikan format JSON benar.");
		  setTimeout(()=>setStatus(""), 4000);
		}

		setImporting(false);
		if (fileRef.current) fileRef.current.value = "";
	  };

	  reader.readAsText(file);
	};

  const secBtn = {fontSize:13,padding:"8px 18px",borderRadius:8,cursor:"pointer",display:"flex",alignItems:"center",gap:8};

  return <div>
    <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
      <button onClick={exportData} style={{...secBtn,border:"1.5px solid #000",background:"transparent",color:"var(--color-text-primary)"}}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Export JSON
      </button>
      <button onClick={()=>fileRef.current?.click()} style={{...secBtn,border:"1.5px solid #000",background:"#111",color:"#fff"}}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        {importing ? "Mengimpor..." : "Import JSON"}
      </button>
      <input ref={fileRef} type="file" accept=".json" style={{display:"none"}} onChange={importData}/>
    </div>
    {status&&<div style={{marginTop:10,fontSize:12,color:status.startsWith("✓")?"#16a34a":"#dc2626",background:status.startsWith("✓")?"#f0fdf4":"#fef2f2",border:`1px solid ${status.startsWith("✓")?"#86efac":"#fca5a5"}`,borderRadius:6,padding:"7px 12px"}}>{status}</div>}
    <div style={{marginTop:10,fontSize:11,color:"var(--color-text-secondary)"}}>Import akan menambahkan proyek baru tanpa menghapus data yang sudah ada. ID yang sama akan dilewati.</div>
  </div>;
}

function SettingsPage({ projects, setProjects }) {
  const [hex, setHex] = useState(()=>window._accentColor||DEFAULT_ACCENT);
  const [input, setInput] = useState(()=>window._accentColor||DEFAULT_ACCENT);
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");
  const toastTimer = useRef(null);
  const showToast = (msg) => { clearTimeout(toastTimer.current); setToast(msg); toastTimer.current = setTimeout(()=>setToast(""),2500); };

  const presets = [
    {label:"Blue",    color:"#1d4ed8"},
    {label:"Indigo",  color:"#4338ca"},
    {label:"Violet",  color:"#7c3aed"},
    {label:"Rose",    color:"#e11d48"},
    {label:"Orange",  color:"#ea580c"},
    {label:"Green",   color:"#16a34a"},
    {label:"Teal",    color:"#0d9488"},
    {label:"Slate",   color:"#475569"},
  ];

  const apply = (val) => {
    const clean = val.trim().startsWith("#") ? val.trim() : "#"+val.trim();
    if (!/^#[0-9a-fA-F]{6}$/.test(clean)) { setError("Format hex tidak valid. Contoh: #1d4ed8"); return; }
    setError("");
    setHex(clean);
    setInput(clean);
    window._accentColor = clean;
    applyAccent(clean);
    showToast("✓ Warna berhasil diubah");
  };

  const reset = () => { apply(DEFAULT_ACCENT); setInput(DEFAULT_ACCENT); showToast("✓ Warna direset ke default"); };

  const sectionStyle = {border:"2px solid #000",borderRadius:12,padding:"20px 24px",marginBottom:16,boxShadow:"0 2px 8px rgba(0,0,0,0.05)"};

  return <div style={{maxWidth:520}}>
    <div style={{fontWeight:500,fontSize:20,marginBottom:24}}>Settings</div>

    {toast&&<div style={{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",background:"#111",color:"#fff",borderRadius:10,padding:"10px 20px",fontSize:13,zIndex:99999,boxShadow:"0 4px 16px rgba(0,0,0,0.25)",whiteSpace:"nowrap"}}>{toast}</div>}

    <div style={sectionStyle}>
      <div style={{fontWeight:500,fontSize:14,marginBottom:4}}>Accent Color</div>
      <div style={{fontSize:12,color:"var(--color-text-secondary)",marginBottom:20}}>Warna utama yang dipakai di tombol, badge, dan highlight.</div>

      {/* Preset swatches */}
      <div style={{marginBottom:20}}>
        <div style={{fontSize:11,color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",fontWeight:500,marginBottom:10}}>Preset</div>
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
          {presets.map(p=>{
            const active = hex.toLowerCase()===p.color.toLowerCase();
            return <button key={p.color} onClick={()=>apply(p.color)}
              title={p.label}
              style={{width:32,height:32,borderRadius:8,background:p.color,border:active?"3px solid #000":"2px solid transparent",cursor:"pointer",outline:"none",transition:"border 0.15s",position:"relative"}}>
              {active&&<span style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <svg width="12" height="12" viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9 10.5,3" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>}
            </button>;
          })}
        </div>
      </div>

      {/* Hex input */}
      <div style={{marginBottom:16}}>
        <div style={{fontSize:11,color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",fontWeight:500,marginBottom:8}}>Custom Hex</div>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          <div style={{width:36,height:36,borderRadius:8,background:hex,border:"1.5px solid #ddd",flexShrink:0}}/>
          <input
            value={input}
            onChange={e=>setInput(e.target.value)}
            onKeyDown={e=>{if(e.key==="Enter")apply(input);}}
            placeholder="#1d4ed8"
            style={{flex:1,fontSize:13,padding:"8px 12px",border:"1.5px solid #000",borderRadius:8,outline:"none",fontFamily:"monospace"}}
          />
          <button onClick={()=>apply(input)} style={{fontSize:13,padding:"8px 16px",background:"#111",color:"#fff",borderColor:"#111",borderRadius:8,whiteSpace:"nowrap"}}>Apply</button>
        </div>
        {error&&<div style={{fontSize:12,color:"#ef4444",marginTop:6}}>{error}</div>}
      </div>

      {/* Preview */}
      <div style={{background:"var(--color-background-secondary)",borderRadius:10,padding:"14px 16px"}}>
        <div style={{fontSize:11,color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:"0.06em",fontWeight:500,marginBottom:12}}>Preview</div>
        <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
          <button style={{fontSize:12,padding:"6px 14px",background:"#111",color:"#fff",borderColor:"#111",borderRadius:6}}>Button</button>
          <span style={{fontSize:12,background:"var(--color-background-info)",color:"var(--color-text-info)",borderRadius:20,padding:"3px 10px",fontWeight:500}}>Badge</span>
          <span style={{fontSize:12,color:"var(--color-text-info)",fontWeight:500,textDecoration:"underline",cursor:"pointer"}}>Link text</span>
          <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:16,height:16,background:"var(--color-text-info)",borderRadius:4}}><svg viewBox="0 0 12 12" width="9" height="9"><polyline points="1.5,6 4.5,9 10.5,3" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        </div>
      </div>

      <div style={{marginTop:14,display:"flex",justifyContent:"flex-end"}}>
        <button onClick={reset} style={{fontSize:12,padding:"5px 14px",color:"var(--color-text-secondary)",borderColor:"var(--color-border-tertiary)",borderRadius:6}}>Reset ke default</button>
      </div>
    </div>

    {/* Data Management */}
    <div style={sectionStyle}>
      <div style={{fontWeight:500,fontSize:14,marginBottom:4}}>Data</div>
      <div style={{fontSize:12,color:"var(--color-text-secondary)",marginBottom:16}}>Export semua proyek ke file JSON, atau import dari file JSON yang sudah diexport sebelumnya.</div>
<DataManagement
  projects={projects}
  setProjects={setProjects}
  tags={tags}
  setTags={setTags}
  expenses={expenses}
/>
    </div>
	{/* Tag Settings */}
	<div style={sectionStyle}>
	  <div style={{fontWeight:500,fontSize:14,marginBottom:4}}>Tag</div>
	  <div style={{fontSize:12,color:"var(--color-text-secondary)",marginBottom:16}}>
		Tambah, hapus, atau ubah urutan tag yang tampil di menu Resources.
	  </div>
	  <TagSettings tags={tags} setTags={setTags}/>
	</div>
    {/* Expense Categories */}
    <div style={sectionStyle}>
      <div style={{fontWeight:500,fontSize:14,marginBottom:4}}>Kategori Expenses</div>
      <div style={{fontSize:12,color:"var(--color-text-secondary)",marginBottom:20}}>Tambah, hapus, atau ubah urutan kategori yang tampil di halaman Expenses.</div>
      <ExpenseCategorySettings/>
    </div>

    {/* Range Settings */}
    <div style={sectionStyle}>
      <div style={{fontWeight:500,fontSize:14,marginBottom:4}}>Range Settings</div>
      <div style={{fontSize:12,color:"var(--color-text-secondary)",marginBottom:20}}>Konfigurasi range Area dan Durasi yang dipakai di halaman Analysis. Perubahan langsung tersimpan otomatis.</div>
      <RangeSettingsPanel/>
    </div>

  </div>;
}

// ── Nav ──────────────────────────────────────────────────────────────────────

const DEFAULT_EXPENSE_CATEGORIES = ["Software","Tools","Fee Tim","Marketing","Infra","Lainnya"];
function loadExpenseCategories() {
  try { const s=window._expenseCats; if(s){const p=JSON.parse(s);if(p.length>0)return p;} } catch(e) {} return seedExpenseCats ? [...seedExpenseCats] : [...DEFAULT_EXPENSE_CATEGORIES];
}
function saveExpenseCategories(cats) { window._expenseCats=JSON.stringify(cats); }

const EXPENSE_CAT_COLORS = [
  {bg:"#eff6ff",color:"#1d4ed8"},{bg:"#fef3c7",color:"#92400e"},{bg:"#f0fdf4",color:"#166534"},
  {bg:"#fdf4ff",color:"#6b21a8"},{bg:"#fff7ed",color:"#9a3412"},{bg:"#fef2f2",color:"#991b1b"},
  {bg:"#ecfdf5",color:"#065f46"},{bg:"#fffbeb",color:"#78350f"},{bg:"#f0f9ff",color:"#0c4a6e"},
  {bg:"#faf5ff",color:"#581c87"},{bg:"#fff1f2",color:"#881337"},{bg:"#f7fee7",color:"#365314"},
];
function getCatStyle(cats, cat) {
  const idx = cats.indexOf(cat);
  if (idx===-1) return {bg:"var(--color-background-secondary)",color:"var(--color-text-secondary)"};
  return EXPENSE_CAT_COLORS[idx % EXPENSE_CAT_COLORS.length];
}

function ExpenseCategorySettings() {
  const [cats, setCats] = useState(loadExpenseCategories);
  const [newCat, setNewCat] = useState("");
  const [editingIdx, setEditingIdx] = useState(null);
  const [editVal, setEditVal] = useState("");
  const [saved, setSaved] = useState(false);
  const toastTimer = useRef(null);
  const editInputRef = useRef(null);

  const flash = () => { setSaved(true); clearTimeout(toastTimer.current); toastTimer.current=setTimeout(()=>setSaved(false),1800); };
  const update = (next) => { setCats(next); saveExpenseCategories(next); flash(); };

  const add = () => {
    const val = newCat.trim();
    if (!val || cats.includes(val)) return;
    update([...cats, val]);
    setNewCat("");
  };

  const remove = (i) => {
    if (cats.length<=1) return;
    setEditingIdx(null);
    update(cats.filter((_,idx)=>idx!==i));
  };

  const startEdit = (i) => {
    setEditingIdx(i);
    setEditVal(cats[i]);
    setTimeout(()=>editInputRef.current?.focus(),50);
  };

  const commitEdit = () => {
    const val = editVal.trim();
    if (!val || (cats.includes(val) && val!==cats[editingIdx])) { setEditingIdx(null); return; }
    const next = [...cats];
    next[editingIdx] = val;
    update(next);
    setEditingIdx(null);
  };

  const cancelEdit = () => { setEditingIdx(null); setEditVal(""); };

  const moveUp   = (i) => { if(i===0) return; const next=[...cats]; [next[i-1],next[i]]=[next[i],next[i-1]]; update(next); };
  const moveDown = (i) => { if(i===cats.length-1) return; const next=[...cats]; [next[i],next[i+1]]=[next[i+1],next[i]]; update(next); };

  const inpStyle = {fontSize:13,padding:"4px 10px",border:"1.5px solid #000",borderRadius:6,background:"var(--color-background-primary)",color:"var(--color-text-primary)",outline:"none",minWidth:0};
  const btnGhost = (color="#888") => ({padding:"2px 8px",fontSize:12,border:"0.5px solid var(--color-border-secondary)",background:"transparent",color,borderRadius:6,cursor:"pointer"});

  return <div>
    <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:14}}>
      {cats.map((cat,i)=>{
        const cfg = getCatStyle(cats, cat);
        const isEditing = editingIdx===i;
        return <div key={i} style={{display:"flex",alignItems:"center",gap:8}}>
          {/* Up/down */}
          <div style={{display:"flex",flexDirection:"column",gap:1}}>
            <button onClick={()=>moveUp(i)} disabled={i===0} style={{padding:"1px 4px",border:"none",background:"transparent",cursor:i===0?"default":"pointer",color:i===0?"#ddd":"var(--color-text-secondary)",fontSize:10,lineHeight:1}}>▲</button>
            <button onClick={()=>moveDown(i)} disabled={i===cats.length-1} style={{padding:"1px 4px",border:"none",background:"transparent",cursor:i===cats.length-1?"default":"pointer",color:i===cats.length-1?"#ddd":"var(--color-text-secondary)",fontSize:10,lineHeight:1}}>▼</button>
          </div>

          {/* Badge or inline input */}
          {isEditing
            ? <input
                ref={editInputRef}
                value={editVal}
                onChange={e=>setEditVal(e.target.value)}
                onKeyDown={e=>{if(e.key==="Enter"){e.preventDefault();commitEdit();}if(e.key==="Escape")cancelEdit();}}
                style={{...inpStyle,width:140}}
              />
            : <span style={{display:"inline-block",fontSize:12,fontWeight:500,borderRadius:20,padding:"3px 12px",background:cfg.bg,color:cfg.color,minWidth:80,textAlign:"center"}}>{cat}</span>
          }

          {/* Action buttons */}
          {isEditing ? <>
            <button onClick={commitEdit} title="Simpan" style={{padding:"3px 6px",border:"none",background:"transparent",cursor:"pointer",color:"var(--color-text-success)"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></button>
            <button onClick={cancelEdit} title="Batal" style={{padding:"3px 6px",border:"none",background:"transparent",cursor:"pointer",color:"var(--color-text-secondary)"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
          </> : <>
            <button onClick={()=>startEdit(i)} title="Edit" style={{padding:"3px 6px",border:"none",background:"transparent",cursor:"pointer",color:"var(--color-text-secondary)"}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
            <button onClick={()=>remove(i)} disabled={cats.length<=1} title="Hapus" style={{padding:"3px 6px",border:"none",background:"transparent",cursor:cats.length<=1?"default":"pointer",color:cats.length<=1?"#ccc":"var(--color-text-danger)"}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
          </>}
        </div>;
      })}
    </div>

    {/* Add new */}
    <div style={{display:"flex",gap:8,alignItems:"center"}}>
      <input
        value={newCat}
        onChange={e=>setNewCat(e.target.value)}
        onKeyDown={e=>{if(e.key==="Enter"){e.preventDefault();add();}}}
        placeholder="Nama kategori baru..."
        style={{flex:1,fontSize:13,padding:"7px 10px",border:"0.5px solid var(--color-border-secondary)",borderRadius:6,background:"var(--color-background-primary)",color:"var(--color-text-primary)"}}
      />
      <button onClick={add} disabled={!newCat.trim()||cats.includes(newCat.trim())} style={{fontSize:13,padding:"7px 16px",borderRadius:6,background:(!newCat.trim()||cats.includes(newCat.trim()))?"var(--color-background-secondary)":"#111",color:(!newCat.trim()||cats.includes(newCat.trim()))?"var(--color-text-secondary)":"#fff",border:"none",cursor:(!newCat.trim()||cats.includes(newCat.trim()))?"not-allowed":"pointer"}}>+ Tambah</button>
    </div>
    {saved&&<div style={{fontSize:12,color:"var(--color-text-success)",marginTop:8}}>✓ Tersimpan</div>}
  </div>;
}

function TagSettings({ tags, setTags }) {
  const [newTag, setNewTag] = useState("");
  const [editingIdx, setEditingIdx] = useState(null);
  const [editVal, setEditVal] = useState("");
  const [saved, setSaved] = useState(false);
  const toastTimer = useRef(null);
  const editInputRef = useRef(null);

  const flash = () => {
    setSaved(true);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setSaved(false), 1800);
  };

  const update = (next) => {
    setTags(next);
    flash();
  };

  const add = () => {
    const val = newTag.trim();
    if (!val || tags.includes(val)) return;
    update([...tags, val]);
    setNewTag("");
  };

  const remove = (i) => {
    if (tags.length <= 1) return;
    setEditingIdx(null);
    update(tags.filter((_, idx) => idx !== i));
  };

  const startEdit = (i) => {
    setEditingIdx(i);
    setEditVal(tags[i]);
    setTimeout(() => editInputRef.current?.focus(), 50);
  };

  const commitEdit = () => {
    const val = editVal.trim();
    if (!val || (tags.includes(val) && val !== tags[editingIdx])) {
      setEditingIdx(null);
      return;
    }
    const next = [...tags];
    next[editingIdx] = val;
    update(next);
    setEditingIdx(null);
  };

  const cancelEdit = () => {
    setEditingIdx(null);
    setEditVal("");
  };

  const moveUp = (i) => {
    if (i === 0) return;
    const next = [...tags];
    [next[i - 1], next[i]] = [next[i], next[i - 1]];
    update(next);
  };

  const moveDown = (i) => {
    if (i === tags.length - 1) return;
    const next = [...tags];
    [next[i], next[i + 1]] = [next[i + 1], next[i]];
    update(next);
  };

  const inpStyle = {
    fontSize: 13,
    padding: "4px 10px",
    border: "1.5px solid #000",
    borderRadius: 6,
    background: "var(--color-background-primary)",
    color: "var(--color-text-primary)",
    outline: "none",
    minWidth: 0
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 14 }}>
        {tags.map((tag, i) => {
          const isEditing = editingIdx === i;

          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {/* Up/down */}
              <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <button onClick={() => moveUp(i)} disabled={i === 0}
                  style={{ padding: "1px 4px", border: "none", background: "transparent", cursor: i === 0 ? "default" : "pointer", color: i === 0 ? "#ddd" : "var(--color-text-secondary)", fontSize: 10 }}>
                  ▲
                </button>
                <button onClick={() => moveDown(i)} disabled={i === tags.length - 1}
                  style={{ padding: "1px 4px", border: "none", background: "transparent", cursor: i === tags.length - 1 ? "default" : "pointer", color: i === tags.length - 1 ? "#ddd" : "var(--color-text-secondary)", fontSize: 10 }}>
                  ▼
                </button>
              </div>

              {/* Tag text / input */}
              {isEditing ? (
                <input
                  ref={editInputRef}
                  value={editVal}
                  onChange={(e) => setEditVal(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") commitEdit();
                    if (e.key === "Escape") cancelEdit();
                  }}
                  style={{ ...inpStyle, width: 140 }}
                />
              ) : (
                <span style={{
                  fontSize: 12,
                  fontWeight: 500,
                  borderRadius: 20,
                  padding: "3px 12px",
                  border: "1px solid var(--color-border-secondary)"
                }}>
                  {tag}
                </span>
              )}

              {/* Actions */}
              {isEditing ? (
                <>
                  <button onClick={commitEdit}>✔</button>
                  <button onClick={cancelEdit}>✕</button>
                </>
              ) : (
                <>
                  <button onClick={() => startEdit(i)}>Edit</button>
                  <button onClick={() => remove(i)} disabled={tags.length <= 1}>Delete</button>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Add new */}
      <div style={{ display: "flex", gap: 8 }}>
        <input
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder="Nama tag baru..."
          style={{ flex: 1, padding: "7px 10px", borderRadius: 6 }}
        />
        <button onClick={add} disabled={!newTag.trim() || tags.includes(newTag.trim())}>
          + Tambah
        </button>
      </div>

      {saved && <div style={{ fontSize: 12, color: "var(--color-text-success)", marginTop: 8 }}>✓ Tersimpan</div>}
    </div>
  );
}

function loadExpenses() {
  try { const s=window._expensesData; if(s){const p=JSON.parse(s);if(p.length>0)return p;} } catch(e){}
  return seedExpenses;
}
function saveExpenses(data) { window._expensesData=JSON.stringify(data); }

function ExpensesPage({projects}) {
  const [expenses,setExpenses] = useState(loadExpenses);
  const [showForm,setShowForm] = useState(false);
  const [editing,setEditing] = useState(null);
  const [confirmId,setConfirmId] = useState(null);
  const [filterMonth,setFilterMonth] = useState("All");
  const [filterCat,setFilterCat] = useState("All");
  const [mainTab,setMainTab] = useState("pertahun");
  const [filterYear,setFilterYear] = useState("All");

  const categories = loadExpenseCategories();
  const emptyForm = {date:"",desc:"",category:categories[0]||"Lainnya",amount:"",notes:""};
  const [form,setForm] = useState(emptyForm);
  const [amtLoading,setAmtLoading] = useState(false);

  useEffect(()=>{ saveExpenses(expenses); },[expenses]);

  const allYears = [...new Set(expenses.map(e=>(e.date||"").slice(0,4)).filter(Boolean))].sort().reverse();
  const allMonths = [...new Set(
    expenses
      .filter(e=>mainTab==="alltime"||(filterYear==="All"||(e.date||"").startsWith(filterYear)))
      .map(e=>(e.date||"").slice(0,7)).filter(Boolean)
  )].sort().reverse();

  const tabExpenses = expenses.filter(e=>{
    if (mainTab==="pertahun" && filterYear!=="All" && !(e.date||"").startsWith(filterYear)) return false;
    return true;
  });

  const filtered = tabExpenses.filter(e=>{
    if (filterMonth!=="All" && !(e.date||"").startsWith(filterMonth)) return false;
    if (filterCat!=="All" && e.category!==filterCat) return false;
    return true;
  });

  const totalNettAll = projects.reduce((s,p)=>s+parseRp(p.priceRp),0);
  const totalNettTab = mainTab==="pertahun" && filterYear!=="All"
    ? projects.filter(p=>(p.startDate||"").startsWith(filterYear)).reduce((s,p)=>s+parseRp(p.priceRp),0)
    : totalNettAll;
  const totalExpensesTab = tabExpenses.reduce((s,e)=>s+parseRp(e.amount),0);
  const totalExpensesFiltered = filtered.reduce((s,e)=>s+parseRp(e.amount),0);
  const netProfit = totalNettTab - totalExpensesTab;

  const openAdd = () => { setEditing(null); setForm(emptyForm); setShowForm(true); };
  const openEdit = (e) => { setEditing(e.id); setForm({date:e.date,desc:e.desc,category:e.category,amount:e.amount,notes:e.notes||""}); setShowForm(true); };
  const cancelForm = () => { setShowForm(false); setEditing(null); setForm(emptyForm); };

  const handleAmtBlur = async () => {
    if (!form.amount.trim()) return;
    const clean = form.amount.replace(/\./g,"");
    if (/^\d+$/.test(clean)) { setForm(f=>({...f,amount:formatRp(clean)})); return; }
    setAmtLoading(true);
    const r = await formatRpWithAI(form.amount.trim());
    setAmtLoading(false);
    setForm(f=>({...f,amount:r}));
  };

  const saveForm = () => {
    if (!form.date||!form.desc||!form.amount) return;
    if (editing) {
      setExpenses(es=>es.map(e=>e.id===editing?{...e,...form}:e));
    } else {
      setExpenses(es=>[...es,{id:Date.now(),...form}]);
    }
    cancelForm();
  };

  const deleteExpense = () => {
    setExpenses(es=>es.filter(e=>e.id!==confirmId));
    setConfirmId(null);
  };

  const inputStyle = {width:"100%",boxSizing:"border-box",fontSize:13,padding:"7px 10px",border:"0.5px solid var(--color-border-secondary)",borderRadius:6,background:"var(--color-background-primary)",color:"var(--color-text-primary)"};
  const labelStyle = {fontSize:12,color:"var(--color-text-secondary)",display:"block",marginBottom:3};
  const selectStyle = {fontSize:12,padding:"5px 8px",border:"0.5px solid var(--color-border-secondary)",borderRadius:6,background:"var(--color-background-primary)",color:"var(--color-text-primary)",cursor:"pointer"};
  const thStyle = {textAlign:"left",padding:"9px 14px",fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-text-secondary)",borderBottom:"0.5px solid var(--color-border-tertiary)",background:"var(--color-background-secondary)"};
  const tdStyle = {padding:"10px 14px",borderBottom:"0.5px solid var(--color-border-tertiary)",fontSize:13,color:"var(--color-text-primary)",verticalAlign:"middle"};

  const downloadExpensesPDF = () => {
    const sorted = [...filtered].sort((a,b)=>(b.date||"").localeCompare(a.date||""));
    const tabLabel = mainTab==="alltime" ? "All Time" : filterYear!=="All" ? `Tahun ${filterYear}` : "Semua Tahun";
    const monthLabel = filterMonth!=="All" ? ` — ${filterMonth}` : "";
    const catLabel = filterCat!=="All" ? ` — ${filterCat}` : "";
    const rows = sorted.map((e,i)=>{
      const cfg = getCatStyle(categories, e.category);
      return `<tr style="background:${i%2===0?"#fff":"#f9fafb"}">
        <td style="padding:9px 14px;border-bottom:1px solid #e5e7eb;white-space:nowrap;color:#6b7280;font-size:13px">${e.date||"—"}</td>
        <td style="padding:9px 14px;border-bottom:1px solid #e5e7eb;font-weight:500;font-size:13px">${e.desc||"—"}</td>
        <td style="padding:9px 14px;border-bottom:1px solid #e5e7eb;font-size:13px"><span style="display:inline-block;font-size:11px;font-weight:500;border-radius:20px;padding:2px 9px;background:${cfg.bg};color:${cfg.color}">${e.category}</span></td>
        <td style="padding:9px 14px;border-bottom:1px solid #e5e7eb;text-align:right;color:#dc2626;font-weight:500;white-space:nowrap;font-size:13px">${e.amount?`Rp ${e.amount}`:"—"}</td>
        <td style="padding:9px 14px;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:12px">${e.notes||"—"}</td>
      </tr>`;
    }).join("");
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Expenses — ${tabLabel}</title>
    <style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#111;padding:32px 40px;font-size:13px}
    @media print{body{padding:16px 20px}button{display:none!important}}</style></head><body>
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:24px">
      <div>
        <div style="font-size:22px;font-weight:600;margin-bottom:4px">Laporan Expenses</div>
        <div style="font-size:13px;color:#6b7280">${tabLabel}${monthLabel}${catLabel}</div>
      </div>
      <button onclick="window.print()" style="padding:8px 18px;background:#111;color:#fff;border:none;border-radius:7px;cursor:pointer;font-size:13px;font-weight:500">🖨 Print / Save PDF</button>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:28px">
      <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:10px;padding:12px 16px">
        <div style="font-size:11px;color:#166534;text-transform:uppercase;letter-spacing:0.06em;font-weight:600;margin-bottom:5px">Total Income (Nett)</div>
        <div style="font-size:20px;font-weight:500;color:#15803d">Rp ${fmtFull(totalNettTab)}</div>
        <div style="font-size:11px;color:#16a34a;margin-top:3px">${mainTab==="pertahun"&&filterYear!=="All"?`proyek ${filterYear}`:"semua proyek"}</div>
      </div>
      <div style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:10px;padding:12px 16px">
        <div style="font-size:11px;color:#991b1b;text-transform:uppercase;letter-spacing:0.06em;font-weight:600;margin-bottom:5px">Total Expenses</div>
        <div style="font-size:20px;font-weight:500;color:#dc2626">Rp ${fmtFull(totalExpensesTab)}</div>
        <div style="font-size:11px;color:#b91c1c;margin-top:3px">${mainTab==="pertahun"&&filterYear!=="All"?`tahun ${filterYear}`:"semua waktu"}</div>
      </div>
      <div style="background:${netProfit>=0?"#eff6ff":"#fef2f2"};border:1.5px solid ${netProfit>=0?"#93c5fd":"#fca5a5"};border-radius:10px;padding:12px 16px">
        <div style="font-size:11px;color:${netProfit>=0?"#1e40af":"#991b1b"};text-transform:uppercase;letter-spacing:0.06em;font-weight:600;margin-bottom:5px">Net Profit</div>
        <div style="font-size:20px;font-weight:500;color:${netProfit>=0?"#1d4ed8":"#dc2626"}">Rp ${fmtFull(Math.abs(netProfit))}${netProfit<0?" (minus)":""}</div>
        <div style="font-size:11px;color:${netProfit>=0?"#3b82f6":"#b91c1c"};margin-top:3px">income – expenses</div>
      </div>
    </div>
    <table style="width:100%;border-collapse:collapse">
      <thead>
        <tr style="background:#f9fafb">
          <th style="text-align:left;padding:9px 14px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#6b7280;border-bottom:1.5px solid #e5e7eb">Tanggal</th>
          <th style="text-align:left;padding:9px 14px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#6b7280;border-bottom:1.5px solid #e5e7eb">Deskripsi</th>
          <th style="text-align:left;padding:9px 14px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#6b7280;border-bottom:1.5px solid #e5e7eb">Kategori</th>
          <th style="text-align:right;padding:9px 14px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#6b7280;border-bottom:1.5px solid #e5e7eb">Jumlah (Rp)</th>
          <th style="text-align:left;padding:9px 14px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#6b7280;border-bottom:1.5px solid #e5e7eb">Catatan</th>
        </tr>
      </thead>
      <tbody>${rows}
        <tr>
          <td colspan="3" style="padding:9px 14px;text-align:right;color:#6b7280;font-size:12px;font-weight:500;border-top:1.5px solid #d1d5db">Total ditampilkan</td>
          <td style="padding:9px 14px;text-align:right;font-weight:600;color:#dc2626;border-top:1.5px solid #d1d5db;white-space:nowrap">Rp ${fmtFull(totalExpensesFiltered)}</td>
          <td style="border-top:1.5px solid #d1d5db"></td>
        </tr>
      </tbody>
    </table>
    <div style="margin-top:24px;font-size:11px;color:#9ca3af">Dicetak pada: ${new Date().toLocaleDateString("id-ID",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}</div>
    </body></html>`;
    const w = window.open("","_blank");
    w.document.write(html);
    w.document.close();
  };

  return <div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16}}>
      <div style={{fontWeight:500,fontSize:20}}>Expenses</div>
      <button onClick={downloadExpensesPDF} style={{display:"flex",alignItems:"center",gap:6,padding:"6px 14px",background:"#111",color:"#fff",border:"none",borderRadius:7,cursor:"pointer",fontSize:13,fontWeight:500}}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download PDF
      </button>
    </div>

    {/* Tab bar — sama persis seperti Analysis */}
    <div style={{display:"flex",gap:0,marginBottom:20,borderBottom:"0.5px solid var(--color-border-tertiary)"}}>
      <button onClick={()=>{setMainTab("pertahun");setFilterMonth("All");}} style={tabBtn(mainTab==="pertahun")}>Per Tahun</button>
      <button onClick={()=>{setMainTab("alltime");setFilterYear("All");setFilterMonth("All");}} style={{...tabBtn(mainTab==="alltime"),marginLeft:"auto"}}>All Time</button>
    </div>

    {/* Year filter — hanya muncul di tab Per Tahun */}
    {mainTab==="pertahun"&&<div style={{display:"flex",gap:8,alignItems:"center",marginBottom:20}}>
      <span style={{fontSize:12,color:"var(--color-text-secondary)"}}>Tahun</span>
      <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
        <button onClick={()=>setFilterYear("All")} style={{fontSize:12,padding:"4px 14px",borderRadius:20,border:"0.5px solid",cursor:"pointer",background:filterYear==="All"?"#111":"transparent",color:filterYear==="All"?"#fff":"var(--color-text-secondary)",borderColor:filterYear==="All"?"#111":"var(--color-border-secondary)"}}>Semua</button>
        {allYears.map(y=><button key={y} onClick={()=>{setFilterYear(y);setFilterMonth("All");}} style={{fontSize:12,padding:"4px 14px",borderRadius:20,border:"0.5px solid",cursor:"pointer",background:filterYear===y?"#111":"transparent",color:filterYear===y?"#fff":"var(--color-text-secondary)",borderColor:filterYear===y?"#111":"var(--color-border-secondary)"}}>{y}</button>)}
        {allYears.length===0&&<span style={{fontSize:12,color:"var(--color-text-secondary)"}}>—</span>}
      </div>
    </div>}

    {/* Summary cards */}
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:24}}>
      <div style={{background:"#f0fdf4",border:"1.5px solid #86efac",borderRadius:10,padding:"12px 16px"}}>
        <div style={{fontSize:11,color:"#166534",marginBottom:5,textTransform:"uppercase",letterSpacing:"0.06em",fontWeight:600}}>Total Income (Nett)</div>
        <div style={{fontSize:20,fontWeight:500,color:"#15803d"}}>Rp {fmtFull(totalNettTab)}</div>
        <div style={{fontSize:11,color:"#16a34a",marginTop:3}}>{mainTab==="pertahun"&&filterYear!=="All"?`proyek ${filterYear}`:"semua proyek"}</div>
      </div>
      <div style={{background:"#fef2f2",border:"1.5px solid #fca5a5",borderRadius:10,padding:"12px 16px"}}>
        <div style={{fontSize:11,color:"#991b1b",marginBottom:5,textTransform:"uppercase",letterSpacing:"0.06em",fontWeight:600}}>Total Expenses</div>
        <div style={{fontSize:20,fontWeight:500,color:"#dc2626"}}>Rp {fmtFull(totalExpensesTab)}</div>
        <div style={{fontSize:11,color:"#b91c1c",marginTop:3}}>{mainTab==="pertahun"&&filterYear!=="All"?`tahun ${filterYear}`:"semua waktu"}</div>
      </div>
      <div style={{background:netProfit>=0?"#eff6ff":"#fef2f2",border:`1.5px solid ${netProfit>=0?"#93c5fd":"#fca5a5"}`,borderRadius:10,padding:"12px 16px"}}>
        <div style={{fontSize:11,color:netProfit>=0?"#1e40af":"#991b1b",marginBottom:5,textTransform:"uppercase",letterSpacing:"0.06em",fontWeight:600}}>Net Profit</div>
        <div style={{fontSize:20,fontWeight:500,color:netProfit>=0?"#1d4ed8":"#dc2626"}}>Rp {fmtFull(Math.abs(netProfit))}{netProfit<0?" (minus)":""}</div>
        <div style={{fontSize:11,color:netProfit>=0?"#3b82f6":"#b91c1c",marginTop:3}}>income – expenses</div>
      </div>
    </div>

    {/* Add / Edit Form */}
    {showForm&&<div style={{border:"2px solid #000",borderRadius:12,background:"var(--color-background-primary)",padding:"16px 20px",marginBottom:20,boxShadow:"0 2px 8px rgba(0,0,0,0.07)"}}>
      <div style={{fontWeight:500,fontSize:14,marginBottom:14}}>{editing?"Edit Expense":"Tambah Expense"}</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,marginBottom:12}}>
        <div>
          <label style={labelStyle}>Tanggal *</label>
          <input type="date" value={form.date} onChange={e=>setForm(f=>({...f,date:e.target.value}))} style={inputStyle}/>
        </div>
        <div>
          <label style={labelStyle}>Kategori *</label>
          <select value={form.category} onChange={e=>setForm(f=>({...f,category:e.target.value}))} style={{...inputStyle,cursor:"pointer"}}>
            {categories.map(c=><option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label style={labelStyle}>{amtLoading?"Jumlah (memformat...)":"Jumlah (Rp) *"}</label>
          <input value={form.amount} onChange={e=>setForm(f=>({...f,amount:e.target.value}))} onBlur={handleAmtBlur} onKeyDown={e=>{if(e.key==="Enter"){e.preventDefault();handleAmtBlur();}}} placeholder="Contoh: 5jt, 750rb" style={{...inputStyle,opacity:amtLoading?0.6:1}}/>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:12,marginBottom:14}}>
        <div>
          <label style={labelStyle}>Deskripsi *</label>
          <input value={form.desc} onChange={e=>setForm(f=>({...f,desc:e.target.value}))} placeholder="Contoh: Adobe CC Subscription" style={inputStyle}/>
        </div>
        <div>
          <label style={labelStyle}>Catatan</label>
          <input value={form.notes} onChange={e=>setForm(f=>({...f,notes:e.target.value}))} placeholder="Opsional" style={inputStyle}/>
        </div>
      </div>
      <div style={{display:"flex",gap:8,justifyContent:"flex-end"}}>
        <button onClick={cancelForm} style={{fontSize:13,padding:"6px 16px"}}>Batal</button>
        <button onClick={saveForm} disabled={!form.date||!form.desc||!form.amount} style={{fontSize:13,padding:"6px 18px",background:(!form.date||!form.desc||!form.amount)?"var(--color-background-secondary)":"#111",color:(!form.date||!form.desc||!form.amount)?"var(--color-text-secondary)":"#fff",borderColor:"transparent",borderRadius:8,cursor:(!form.date||!form.desc||!form.amount)?"not-allowed":"pointer"}}>{editing?"Simpan Perubahan":"Tambah"}</button>
      </div>
    </div>}

    {/* Table */}
    <div style={{border:"2px solid #000",borderRadius:12,overflow:"clip",boxShadow:"0 2px 8px rgba(0,0,0,0.07)"}}>
      {/* Table header toolbar */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--color-background-secondary)",borderBottom:"0.5px solid var(--color-border-tertiary)"}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontWeight:500,fontSize:14}}>Daftar Expenses</span>
          <span style={{fontSize:12,background:"var(--color-background-primary)",border:"0.5px solid var(--color-border-secondary)",borderRadius:20,padding:"1px 9px",color:"var(--color-text-secondary)"}}>{filtered.length}</span>
        </div>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          {mainTab==="pertahun"&&<select value={filterMonth} onChange={e=>setFilterMonth(e.target.value)} style={selectStyle}>
            <option value="All">Bulan (Semua)</option>
            {allMonths.map(m=><option key={m} value={m}>{m}</option>)}
          </select>}
          <select value={filterCat} onChange={e=>setFilterCat(e.target.value)} style={selectStyle}>
            <option value="All">Kategori (Semua)</option>
            {categories.map(c=><option key={c} value={c}>{c}</option>)}
          </select>
          {!showForm&&<button onClick={openAdd} style={{padding:"5px 16px",fontSize:13,display:"flex",alignItems:"center",gap:5,background:"#111",color:"#fff",border:"none",borderRadius:6,cursor:"pointer",fontWeight:500}}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>Tambah</button>}
        </div>
      </div>

      {expenses.length===0
        ? <div style={{textAlign:"center",padding:"4rem 0",color:"var(--color-text-secondary)",fontSize:14}}>Belum ada data expenses. Klik "Tambah" untuk mulai.</div>
        : filtered.length===0
          ? <div style={{textAlign:"center",padding:"3rem 0",color:"var(--color-text-secondary)",fontSize:14}}>Tidak ada expense yang cocok dengan filter ini.</div>
          : <div style={{overflowX:"auto"}}>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
                <thead>
                  <tr>
                    <th style={thStyle}>Tanggal</th>
                    <th style={thStyle}>Deskripsi</th>
                    <th style={thStyle}>Kategori</th>
                    <th style={{...thStyle,textAlign:"right"}}>Jumlah (Rp)</th>
                    <th style={thStyle}>Catatan</th>
                    <th style={{...thStyle,width:80,minWidth:80}}></th>
                  </tr>
                </thead>
                <tbody>
                  {[...filtered].sort((a,b)=>(b.date||"").localeCompare(a.date||"")).map((e,i)=>{
                    const cfg = getCatStyle(categories, e.category);
                    return <tr key={e.id} style={{background:i%2===0?"transparent":"var(--color-background-secondary)"}}>
                      <td style={{...tdStyle,color:"var(--color-text-secondary)",whiteSpace:"nowrap"}}>{e.date}</td>
                      <td style={{...tdStyle,fontWeight:500}}>{e.desc||"—"}</td>
                      <td style={tdStyle}>
                        <span style={{display:"inline-block",fontSize:11,fontWeight:500,borderRadius:20,padding:"2px 9px",background:cfg.bg,color:cfg.color}}>{e.category}</span>
                      </td>
                      <td style={{...tdStyle,textAlign:"right",color:"var(--color-text-danger)",fontWeight:500,whiteSpace:"nowrap"}}>
                        {e.amount?`Rp ${e.amount}`:"—"}
                      </td>
                      <td style={{...tdStyle,color:"var(--color-text-secondary)",fontSize:12,maxWidth:160,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{e.notes||"—"}</td>
                      <td style={{...tdStyle,padding:"10px 8px",minWidth:80,whiteSpace:"nowrap",overflow:"visible"}}>
                        <div style={{display:"flex",gap:4,justifyContent:"flex-end"}}>
                          <button onClick={()=>openEdit(e)} style={{padding:"3px 6px",border:"none",background:"transparent",cursor:"pointer",color:"var(--color-text-secondary)"}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                          <button onClick={()=>setConfirmId(e.id)} style={{padding:"3px 6px",border:"none",background:"transparent",cursor:"pointer",color:"#ef4444"}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
                        </div>
                      </td>
                    </tr>;
                  })}
                  {filtered.length>0&&<tr>
                    <td colSpan={3} style={{...tdStyle,textAlign:"right",color:"var(--color-text-secondary)",fontSize:12,fontWeight:500,borderTop:"1.5px solid var(--color-border-secondary)"}}>Total ditampilkan</td>
                    <td class="amount-neg" style={{textAlign:"right",fontWeight:500,color:"var(--color-text-danger)",borderTop:"1.5px solid var(--color-border-secondary)",whiteSpace:"nowrap"}}>Rp {fmtFull(totalExpensesFiltered)}</td>
                    <td colSpan={2} style={{...tdStyle,borderTop:"1.5px solid var(--color-border-secondary)"}}></td>
                  </tr>}
                </tbody>
              </table>
            </div>
      }
    </div>
    {confirmId!=null&&<ConfirmModal message="Hapus expense ini? Tindakan ini tidak bisa dibatalkan." onConfirm={deleteExpense} onCancel={()=>setConfirmId(null)}/>}
  </div>;
}

function QuotePage({projects}) {
  const allJobTypes = [...new Set(projects.map(p=>p.jobType).filter(Boolean))].sort();
  const allDesigns  = [...new Set(projects.map(p=>p.design).filter(Boolean))].sort();

  const [scope,    setScope]    = useState(allJobTypes[0]||"");
  const [area,     setArea]     = useState("100");
  const [design,   setDesign]   = useState(allDesigns[0]||"");
  const [platform, setPlatform] = useState("Upwork");

  const parseRpLocal = v => { if (!v) return 0; return parseInt(String(v).replace(/\D/g,""))||0; };
  const fmtRpLocal   = n => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

  const similar = projects.filter(p =>
    p.jobType === scope &&
    parseRpLocal(p.priceRp) > 0 &&
    parseFloat(p.area) > 0 &&
    parseFloat(p.hours) > 0
  );

  const allScopeProjects = projects.filter(p => p.jobType === scope);

  const areaNum = parseFloat(area)||0;
  const avgPricePerM2 = similar.length
    ? similar.reduce((s,p)=>s+parseRpLocal(p.priceRp)/parseFloat(p.area),0) / similar.length
    : 0;
  const avgHoursPerM2 = similar.length
    ? similar.reduce((s,p)=>s+parseFloat(p.hours)/parseFloat(p.area),0) / similar.length
    : 0;

  const platformMul = platform==="Upwork"?1.05:platform==="Fiverr"?0.95:1.0;
  const estPrice  = areaNum > 0 && avgPricePerM2 > 0 ? Math.round(areaNum * avgPricePerM2 * platformMul / 50000) * 50000 : 0;
  const estHours  = areaNum > 0 && avgHoursPerM2 > 0 ? Math.round(areaNum * avgHoursPerM2 * 10) / 10 : 0;
  const estRate   = estHours > 0 && estPrice > 0 ? Math.round(estPrice / estHours) : 0;
  const estLo     = estPrice > 0 ? Math.round(estPrice * 0.75 / 50000) * 50000 : 0;
  const estHi     = estPrice > 0 ? Math.round(estPrice * 1.25 / 50000) * 50000 : 0;

  const noData = similar.length === 0;

  const inpSt = {fontSize:13,padding:"7px 10px",border:"0.5px solid var(--color-border-secondary)",borderRadius:8,background:"var(--color-background-primary)",color:"var(--color-text-primary)",width:"100%",boxSizing:"border-box"};
  const chipLbl = {fontSize:10,fontWeight:500,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-text-secondary)",marginBottom:5,display:"block"};
  const cardSt = {background:"var(--color-background-primary)",border:"0.5px solid var(--color-border-tertiary)",borderRadius:12,padding:"16px 18px"};

  return <div>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:20}}>
      <div style={{fontWeight:500,fontSize:20}}>Quote Calculator</div>
      <span style={{fontSize:12,color:"var(--color-text-secondary)"}}>
        {projects.length} proyek historis
      </span>
    </div>

    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,marginBottom:20}}>

      {/* Input */}
      <div style={cardSt}>
        <div style={{fontWeight:500,fontSize:14,color:"var(--color-text-primary)",marginBottom:14}}>Input Proyek</div>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          <div>
            <span style={chipLbl}>Scope of Work</span>
            <select value={scope} onChange={e=>setScope(e.target.value)} style={inpSt}>
              {allJobTypes.length===0 && <option value="">Belum ada data</option>}
              {allJobTypes.map(j=><option key={j} value={j}>{j}</option>)}
            </select>
          </div>
          <div>
            <span style={chipLbl}>Area (m²)</span>
            <input type="number" value={area} onChange={e=>setArea(e.target.value)} min="1" placeholder="cth. 120" style={inpSt}/>
          </div>
          <div>
            <span style={chipLbl}>Project Type</span>
            <select value={design} onChange={e=>setDesign(e.target.value)} style={inpSt}>
              {allDesigns.length===0 && <option value="">Belum ada data</option>}
              {allDesigns.map(d=><option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <div>
            <span style={chipLbl}>Platform</span>
            <select value={platform} onChange={e=>setPlatform(e.target.value)} style={inpSt}>
              {platformOptions.map(p=><option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Output */}
      <div style={{display:"flex",flexDirection:"column",gap:12}}>

        <div style={{...cardSt,background:"#E6F1FB",border:"0.5px solid #B5D4F4"}}>
          <div style={{fontSize:11,fontWeight:500,textTransform:"uppercase",letterSpacing:"0.05em",color:"#185FA5",marginBottom:8}}>Estimasi Harga</div>
          {noData
            ? <div style={{fontSize:13,color:"#185FA5"}}>Belum cukup data untuk scope ini</div>
            : <>
                <div style={{fontSize:26,fontWeight:500,color:"#0C447C",marginBottom:2}}>Rp {fmtRpLocal(estPrice)}</div>
                <div style={{fontSize:12,color:"#185FA5"}}>kisaran Rp {fmtRpLocal(estLo)} – Rp {fmtRpLocal(estHi)}</div>
              </>}
        </div>

        <div style={{...cardSt,background:"#E1F5EE",border:"0.5px solid #9FE1CB"}}>
          <div style={{fontSize:11,fontWeight:500,textTransform:"uppercase",letterSpacing:"0.05em",color:"#085041",marginBottom:8}}>Estimasi Jam</div>
          {noData
            ? <div style={{fontSize:13,color:"#085041"}}>Belum cukup data untuk scope ini</div>
            : <>
                <div style={{fontSize:26,fontWeight:500,color:"#085041",marginBottom:2}}>{estHours} jam</div>
                <div style={{fontSize:12,color:"#0F6E56"}}>{estRate>0?`≈ Rp ${fmtRpLocal(estRate)} / jam`:"—"}</div>
              </>}
        </div>

        <div style={{...cardSt,background:"#f4f4f4"}}>
          <div style={{fontSize:11,fontWeight:500,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--color-text-secondary)",marginBottom:8}}>Dasar Perhitungan</div>
          <div style={{display:"flex",flexDirection:"column",gap:5}}>
            {[
              {label:"Proyek serupa ditemukan", val:`${similar.length} proyek`},
              {label:"Rata-rata harga/m²",      val: similar.length ? `Rp ${fmtRpLocal(Math.round(avgPricePerM2))}/m²` : "—"},
              {label:"Rata-rata jam/m²",        val: similar.length ? `${Math.round(avgHoursPerM2*100)/100} jam/m²`     : "—"},
              {label:"Multiplier platform",     val: platform==="Upwork"?"+5%":platform==="Fiverr"?"-5%":"±0%"},
            ].map(({label,val})=><div key={label} style={{display:"flex",justifyContent:"space-between",fontSize:12}}>
              <span style={{color:"var(--color-text-secondary)"}}>{label}</span>
              <span style={{fontWeight:500,color:"var(--color-text-primary)"}}>{val}</span>
            </div>)}
          </div>
        </div>

      </div>
    </div>

    {/* Similar projects */}
    <div style={cardSt}>
      <div style={{fontWeight:500,fontSize:13,color:"var(--color-text-primary)",marginBottom:12}}>
        Proyek Serupa
        <span style={{fontSize:12,color:"var(--color-text-secondary)",fontWeight:400,marginLeft:8}}>scope: {scope||"—"}</span>
      </div>
      {allScopeProjects.length === 0
        ? <div style={{fontSize:13,color:"var(--color-text-secondary)",padding:"8px 0"}}>Belum ada proyek dengan scope ini.</div>
        : allScopeProjects.map((p,i)=>{
            const hasData = parseRpLocal(p.priceRp)>0 && parseFloat(p.area)>0 && parseFloat(p.hours)>0;
            const isLast  = i===allScopeProjects.length-1;
            return <div key={p.id} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 0",borderBottom:isLast?"none":"0.5px solid var(--color-border-tertiary)"}}>
              <div style={{display:"flex",flexDirection:"column",gap:2}}>
                <div style={{fontSize:13,fontWeight:500,color:"var(--color-text-primary)"}}>{p.projectName||"Untitled"}</div>
                <div style={{fontSize:12,color:"var(--color-text-secondary)"}}>
                  {[p.design, p.platform, p.area?`${p.area} m²`:null, p.status].filter(Boolean).join(" · ")}
                </div>
              </div>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:2,flexShrink:0}}>
                <div style={{fontSize:13,fontWeight:500,color:"var(--color-text-primary)"}}>
                  {hasData ? `Rp ${fmtRpLocal(parseRpLocal(p.priceRp))}` : "—"}
                </div>
                <div style={{fontSize:12,color:hasData?"var(--color-text-secondary)":"var(--color-text-danger)"}}>
                  {hasData ? `${p.hours} jam` : "data tidak lengkap"}
                </div>
              </div>
            </div>;
          })
      }
    </div>
  </div>;
}

const navItems = [
  {id:"dashboard",label:"Dashboard",icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>},
  {id:"projects",label:"Project Cards",icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>},
  {id:"analysis",label:"Analysis",icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>},
  {id:"expenses",label:"Expenses",icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>},
  {id:"client",label:"Client",icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>},
  {id:"download",label:"Download",icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>},
  {id:"upwork",label:"Upwork",icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="#14a800" stroke="none"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703 0 1.489-1.211 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/></svg>},
  {id:"quote",label:"Quote Calc",icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/><circle cx="18" cy="18" r="4"/><line x1="16.5" y1="18" x2="19.5" y2="18"/><line x1="18" y1="16.5" x2="18" y2="19.5"/></svg>},
  {id:"resources",label:"Resources",icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>},
  {id:"settings",label:"Settings",icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>},
];

function BigToggle({on,onToggle}) {
  return <div onClick={onToggle} style={{width:48,height:26,borderRadius:13,background:on?"#22c55e":"#d1d5db",cursor:"pointer",position:"relative",transition:"background 0.2s",flexShrink:0,border:"1.5px solid",borderColor:on?"#16a34a":"#9ca3af"}}>
    <div style={{width:20,height:20,borderRadius:"50%",background:"#fff",position:"absolute",top:2,left:on?24:2,transition:"left 0.2s",boxShadow:"0 1px 4px rgba(0,0,0,0.25)"}}/>
  </div>;
}

function Toggle({on,onToggle,label}) {
  return <div style={{display:"flex",alignItems:"center",gap:8}}><span style={{fontSize:11,color:"var(--color-text-secondary)"}}>{label}</span><div onClick={onToggle} style={{width:36,height:20,borderRadius:10,background:on?"#22c55e":"var(--color-border-secondary)",cursor:"pointer",position:"relative",transition:"background 0.2s"}}><div style={{width:16,height:16,borderRadius:"50%",background:"#fff",position:"absolute",top:2,left:on?18:2,transition:"left 0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}}/></div></div>;
}

function Sidebar({active,onSelect,topbar,onToggle}) {
  return <div style={{width:220,flexShrink:0,borderRight:"2px solid #000",display:"flex",flexDirection:"column",background:"var(--color-background-primary)",position:"sticky",top:0,height:"100vh",overflowY:"auto"}}>
    {/* Logo / brand area */}
    <div style={{padding:"20px 20px 16px"}}>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
        <div style={{width:32,height:32,borderRadius:8,background:"#111",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <div>
          <div style={{fontWeight:600,fontSize:13,color:"var(--color-text-primary)",lineHeight:1.2}}>Project</div>
          <div style={{fontWeight:600,fontSize:13,color:"var(--color-text-secondary)",lineHeight:1.2}}>Manager</div>
        </div>
      </div>
      <div style={{height:"1px",background:"var(--color-border-tertiary)"}}/>
    </div>

    {/* Nav items */}
    <div style={{flex:1,padding:"4px 12px",display:"flex",flexDirection:"column",gap:2}}>
      <div style={{fontSize:10,fontWeight:600,color:"var(--color-text-secondary)",letterSpacing:"0.08em",textTransform:"uppercase",padding:"4px 8px",marginBottom:4}}>Navigation</div>
      {navItems.map(item=>{
        const isActive = active===item.id;
        return <div key={item.id} onClick={()=>onSelect(item.id)}
          style={{display:"flex",alignItems:"center",gap:10,padding:"9px 12px",cursor:"pointer",borderRadius:10,
            background:isActive?"#111":"transparent",
            color:isActive?"#fff":"var(--color-text-secondary)",
            fontSize:13,fontWeight:isActive?500:400,
            transition:"all 0.15s"}}
          onMouseEnter={e=>{if(!isActive){e.currentTarget.style.background="var(--color-background-secondary)";e.currentTarget.style.color="var(--color-text-primary)";}}}
          onMouseLeave={e=>{if(!isActive){e.currentTarget.style.background="transparent";e.currentTarget.style.color="var(--color-text-secondary)";}}}
        >
          <span style={{opacity:isActive?1:0.6}}>{item.icon}</span>
          {item.label}
          {isActive&&<span style={{marginLeft:"auto",width:6,height:6,borderRadius:"50%",background:"#fff",opacity:0.7,flexShrink:0}}/>}
        </div>;
      })}
    </div>

  </div>;
}

function Topbar({active,onSelect,topbar,onToggle}) {
  return <div style={{borderBottom:"0.5px solid var(--color-border-tertiary)",padding:"0 1rem",display:"flex",alignItems:"center",gap:4,height:48,flexShrink:0}}><span style={{fontWeight:500,fontSize:14,marginRight:12}}>Menu</span>{navItems.map(item=><div key={item.id} onClick={()=>onSelect(item.id)} style={{display:"flex",alignItems:"center",gap:6,padding:"6px 12px",cursor:"pointer",borderRadius:8,background:active===item.id?"#111":"transparent",color:active===item.id?"#fff":"var(--color-text-primary)",fontSize:13}} onMouseEnter={e=>{if(active!==item.id)e.currentTarget.style.background="var(--color-background-secondary)";}} onMouseLeave={e=>{if(active!==item.id)e.currentTarget.style.background="transparent";}}>{item.icon}{item.label}</div>)}</div>;
}

function parseSheetsTSV(text) {
  const lines = text.split("\n").map(l=>l.split("\t"));
  const c = (row,col) => (lines[row]?.[col]||"").trim().replace(/^"|"$/g,"").trim();

  const projectName = c(0,1);
  const platform    = c(0,7);

  const area     = c(2,1).replace(/[^0-9.]/g,"");
  const priceRp  = c(2,2).replace(/^Rp\s*/i,"").replace(/\./g,"").replace(/,/g,"");
  const style    = c(2,3);
  const hours    = c(2,4);
  const startRaw = c(2,6);
  const priceUSD = c(2,7).replace(/[^0-9.]/g,"");

  const parseDate = s => {
    if (!s) return "";
    const parts = s.split("/");
    if (parts.length!==3) return "";
    const [a,b,yr] = parts;
    return `${yr}-${String(a).padStart(2,"0")}-${String(b).padStart(2,"0")}`;
  };

  const startDate = parseDate(startRaw);

  const endDate    = parseDate(c(4,6));
  const grossPrice = c(4,7).replace(/[^0-9]/g,"");
  const statusRaw  = c(5,6)||"Ongoing";
  const status     = statusRaw.charAt(0).toUpperCase()+statusRaw.slice(1);
  const notes      = c(7,4);
  const jobType    = c(7,7);
  const design     = c(8,6);
  const clientName = c(8,7);
  const jobPerHourRaw = c(9,6).replace(/[^0-9.]/g,"");
  const jobPerHour    = jobPerHourRaw==="0"?"":jobPerHourRaw;
  const invitationRaw = c(9,7).toLowerCase();
  const invitation    = invitationRaw==="yes"||invitationRaw==="true";
  const hourlyJob     = jobPerHour!=="";

  const taskNames = ["Layout Furni & Mood Board","Revisi","3d Model & Render","Revisi","Gamker","Revisi","3d Animation","Revisi"];
  const tasks = taskNames.map((name,i)=>{
    const row     = 4+i;
    const visRaw  = c(row,0).toLowerCase();
    const visible = visRaw==="yes";
    const doneRaw = c(row,3).toLowerCase();
    const done    = doneRaw==="true"||doneRaw==="yes"||doneRaw==="1";
    const deadline = parseDate(c(row,4));
    return {id:i, name, done, visible, deadline};
  });

  const nettNum = parseFloat(priceRp)||0;
  if (!projectName) throw new Error("Nama proyek tidak ditemukan");

  return {
    id: Date.now(),
    projectName, platform, clientName, clientType:"Owner",
    area, priceRp: nettNum>0?String(Math.round(nettNum)):"",
    priceUSD, style, hours, startDate, endDate,
    status, jobType, design, jobPerHour, invitation, team:false, hourlyJob,
    fee:[], paymentStatus:[], payment:[], notes,
    grossPrice, address:"", tasks,
  };
}

function ImportSheetsModal({onParsed, onClose}) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => { setText(""); setError(""); onClose(); };

  const handleParse = () => {
    setError("");
    try {
      if (!text.trim()) { setError("Paste data dari Google Sheets dulu."); return; }
      const parsed = parseSheetsTSV(text);
      if (!parsed.projectName) { setError("Nama proyek tidak ditemukan. Pastikan format benar."); return; }
      onParsed(parsed);
    } catch(e) {
      setError("Gagal membaca data. Pastikan copy dari baris pertama proyek.");
    }
  };

  const inp = {width:"100%",boxSizing:"border-box",fontSize:13,padding:"7px 10px",border:"1.5px solid #ddd",borderRadius:6,background:"#fff",outline:"none"};

  return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:9999,display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:"8vh"}} onClick={handleClose}>
    <div onClick={e=>e.stopPropagation()} style={{background:"#fff",borderRadius:14,padding:"24px 28px",width:"min(480px,92vw)",boxShadow:"0 8px 32px rgba(0,0,0,0.2)"}}>
      <div style={{fontWeight:500,fontSize:15,marginBottom:4}}>Import dari Google Sheets</div>
      <div style={{fontSize:12,color:"#888",marginBottom:16}}>Select all sel proyek di Sheets → Copy → Paste di bawah, lalu klik Parse untuk mengisi form.</div>
      <textarea
        value={text} onChange={e=>{setText(e.target.value);setError("");}}
        placeholder={"7\	Proyek Sarah\	\	\	\	\	\	Upwork\
\	Area\	Price\	Style\	Hours\	\	Start\	Priced (USD)\
..."}
        style={{...inp,height:150,resize:"vertical",fontFamily:"monospace",fontSize:11}}
        autoFocus
      />
      {error&&<div style={{fontSize:12,color:"#dc2626",marginTop:6,padding:"6px 10px",background:"#fef2f2",borderRadius:6}}>{error}</div>}
      <div style={{display:"flex",gap:8,justifyContent:"flex-end",marginTop:14}}>
        <button onClick={handleClose} style={{fontSize:13,padding:"6px 16px"}}>Batal</button>
        <button onClick={handleParse} style={{fontSize:13,padding:"6px 16px",background:"#111",color:"#fff",border:"none",borderRadius:6,cursor:"pointer"}}>
          Parse & Edit →
        </button>
      </div>
    </div>
  </div>;
}

export default function App() {
const [projects, setProjects] = useState(seedData);
const [tags, setTags] = useState(() => { /* load dari window._resourceTags atau default */ });
const [expenses, setExpenses] = useState(loadExpenses);
const [loaded, setLoaded] = useState(false);
const [mode,setMode] = useState("list");
const [editing,setEditing] = useState(null);
const [filter,setFilter] = useState("All");
const [activePage,setActivePage] = useState("dashboard");
const [topbar,setTopbar] = useState(false);
const [confirmId,setConfirmId] = useState(null);

useEffect(()=>{
  try {
    if(window.storage) {
      window.storage.get("projectData").then(res=>{
        if(res?.value) setProjects(JSON.parse(res.value));
        setLoaded(true);
      }).catch(()=>{ setLoaded(true); });
    } else {
      const s = localStorage.getItem("projectData");
      if(s) setProjects(JSON.parse(s));
      setLoaded(true);
    }
  } catch(e) { setLoaded(true); }
},[]);

useEffect(()=>{
  if(!loaded) return;
  try {
    if(window.storage) {
      window.storage.set("projectData",JSON.stringify(projects)).catch(()=>{});
    } else {
      localStorage.setItem("projectData",JSON.stringify(projects));
    }
  } catch(e) {}
},[projects, loaded]);

useEffect(()=>{ applyAccent(window._accentColor||seedAccent||DEFAULT_ACCENT); },[]);

  
  

  const [search,setSearch] = useState("");
  const [filterPlatform,setFilterPlatform] = useState("All");
  const [filterJobType,setFilterJobType] = useState("All");
  const [filterYear,setFilterYear] = useState("All");

  const [showImport, setShowImport] = useState(false);
  const savedScrollY = useRef(0);

  const handleImport = (proj, replace, replaceId) => {
    if (replace && replaceId) {
      setProjects(ps=>ps.map(p=>p.id===replaceId?{...proj,id:replaceId}:p));
    } else {
      setProjects(ps=>[...ps, proj]);
    }
    setShowImport(false);
  };

  const handleParsed = (parsed) => {
    setShowImport(false);
    setEditing(parsed);
    setMode("form");
  };

  const saveProject = proj => {
    setProjects(ps => {
      const exists = ps.some(p=>p.id===proj.id);
      if (exists) return ps.map(p=>p.id===proj.id?proj:p);
      return [...ps, proj];
    });
    setMode("list");
    setEditing(null);
  };

  const deleteProject=id=>{setConfirmId(id);};
  const confirmDelete=()=>{setProjects(ps=>ps.filter(p=>p.id!==confirmId));setConfirmId(null);};
  const startEdit=proj=>{savedScrollY.current=window.scrollY;setEditing(proj);setMode("form");};



  const allYears = [...new Set(projects.map(p=>(p.startDate||"").slice(0,4)).filter(Boolean))].sort().reverse();
  const allJobTypes = [...new Set(projects.map(p=>p.jobType).filter(Boolean))].sort();

  const filtered = projects.filter(p=>{
    if (filter!=="All" && p.status!==filter) return false;
    if (filterPlatform!=="All" && p.platform!==filterPlatform) return false;
    if (filterJobType!=="All" && p.jobType!==filterJobType) return false;
    if (filterYear!=="All" && !(p.startDate||"").startsWith(filterYear)) return false;
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      if (!( (p.projectName||"").toLowerCase().includes(q) || (p.clientName||"").toLowerCase().includes(q) || (p.address||"").toLowerCase().includes(q) )) return false;
    }
    return true;
  });
  const counts=statusOptions.reduce((acc,s)=>({...acc,[s]:projects.filter(p=>p.status===s).length}),{});

  const hasActiveFilters = search.trim()||filterPlatform!=="All"||filterJobType!=="All"||filterYear!=="All"||filter!=="All";
  const resetFilters = ()=>{setSearch("");setFilterPlatform("All");setFilterJobType("All");setFilterYear("All");setFilter("All");};

  const selectStyle = {fontSize:12,padding:"5px 8px",border:"0.5px solid var(--color-border-secondary)",borderRadius:6,background:"var(--color-background-primary)",color:"var(--color-text-primary)",cursor:"pointer"};

  const projectsPage = <div>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
      <div><div style={{display:"flex",alignItems:"baseline",gap:10}}><div style={{fontWeight:500,fontSize:20}}>Project Cards</div><div style={{fontWeight:500,fontSize:28,color:"var(--color-text-primary)",lineHeight:1}}>{projects.length}</div></div><div style={{fontSize:12,color:"var(--color-text-secondary)",marginTop:2}}>total proyek</div></div>
      {mode==="list"&&<div style={{display:"flex",gap:8}}>
        <button onClick={()=>setShowImport(true)} style={{padding:"7px 14px",fontSize:13,display:"flex",alignItems:"center",gap:6}}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          Import Sheets
        </button>
        <button onClick={()=>{savedScrollY.current=window.scrollY;setEditing(null);setMode("form");}} style={{padding:"8px 18px",fontSize:13}}>+ Proyek Baru</button>
      </div>}
    </div>
    {mode==="form"&&<ProjectForm initial={editing} allProjects={projects} onSave={saveProject} onCancel={()=>{const sy=savedScrollY.current;setMode("list");setEditing(null);setTimeout(()=>window.scrollTo({top:sy,behavior:"instant"}),80);}}/>}
    {mode==="list"&&<div>
      {/* Search bar */}
      <div style={{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap",alignItems:"center"}}>
        <div style={{position:"relative",flex:1,minWidth:180}}>
          <svg style={{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",pointerEvents:"none"}} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Cari nama proyek, client, lokasi..." style={{width:"100%",boxSizing:"border-box",paddingLeft:32,fontSize:13,border:"0.5px solid var(--color-border-secondary)",borderRadius:8,padding:"7px 10px 7px 32px",outline:"none",background:"var(--color-background-primary)"}}/>
        </div>
        <select value={filterPlatform} onChange={e=>setFilterPlatform(e.target.value)} style={selectStyle}>
          <option value="All">Platform (Semua)</option>
          {platformOptions.map(p=><option key={p} value={p}>{p}</option>)}
        </select>
        <select value={filterJobType} onChange={e=>setFilterJobType(e.target.value)} style={selectStyle}>
          <option value="All">Scope (Semua)</option>
          {allJobTypes.map(j=><option key={j} value={j}>{j}</option>)}
        </select>
        <select value={filterYear} onChange={e=>setFilterYear(e.target.value)} style={selectStyle}>
          <option value="All">Tahun (Semua)</option>
          {allYears.map(y=><option key={y} value={y}>{y}</option>)}
        </select>
        {hasActiveFilters&&<button onClick={resetFilters} style={{fontSize:12,padding:"5px 12px",color:"var(--color-text-danger)",borderColor:"var(--color-border-danger)",borderRadius:6,whiteSpace:"nowrap"}}>✕ Reset</button>}
      </div>
      {/* Status filter pills */}
      <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap",alignItems:"center"}}>
        <button onClick={()=>setFilter("All")} style={{fontSize:12,padding:"4px 14px",background:filter==="All"?"#111":"transparent",color:filter==="All"?"#fff":"var(--color-text-secondary)",borderColor:filter==="All"?"#111":"var(--color-border-secondary)",borderRadius:20}}>Semua ({projects.length})</button>
        {statusOptions.map(s=>{const c=STATUS_CFG[s];const act=filter===s;return <button key={s} onClick={()=>setFilter(s)} style={{fontSize:12,padding:"4px 14px",background:act?c.bg:"transparent",color:act?c.text:"var(--color-text-secondary)",borderColor:act?c.dot:"var(--color-border-tertiary)",borderRadius:20}}>{s} {counts[s]>0&&`(${counts[s]})`}</button>;})}
        {hasActiveFilters&&<span style={{fontSize:12,color:"var(--color-text-secondary)",marginLeft:4}}>{filtered.length} hasil ditemukan</span>}
      </div>
      {filtered.length===0
        ? <div style={{textAlign:"center",padding:"4rem 0",color:"var(--color-text-secondary)",fontSize:14}}>{projects.length===0?"Belum ada proyek.":hasActiveFilters?"Tidak ada proyek yang cocok dengan filter ini.":"Tidak ada proyek dengan status ini."}</div>
        : [...filtered].sort((a,b)=>{ const ds=(b.startDate||"").localeCompare(a.startDate||""); return ds!==0?ds:b.id-a.id; }).map((p,i)=><ProjectCard key={p.id} proj={p} allProjects={projects} onEdit={startEdit} onDelete={deleteProject}/>)
      }
    </div>}
  </div>;

  function exportWithSeedData() {
    const currentProjects = projects;
    const currentExpenses = (() => { try { const s=window._expensesData; return s?JSON.parse(s):[]; } catch(e){return [];} })();
    const currentClientMeta = (() => { try { const s=window._clientMeta; return s?JSON.parse(s):{}; } catch(e){return {};} })();
    const currentExpenseCats = (() => { try { const s=window._expenseCats; return s?JSON.parse(s):null; } catch(e){return null;} })();
    const currentAccent = window._accentColor||"";
    const currentTarget = (() => { try { const s=window._incomeTarget; return s?JSON.parse(s):null; } catch(e){return null;} })();
    const currentAreaRanges = (() => { try { const s=window._areaRanges; return s?JSON.parse(s):null; } catch(e){return null;} })();
    const currentDurasiRanges = (() => { try { const s=window._durasiRanges; return s?JSON.parse(s):null; } catch(e){return null;} })();
    const currentRates = (() => { try { const s=window._usdRates; return s?JSON.parse(s):null; } catch(e){return null;} })();

    const src = window.__sourceTSX;
    if (!src) {
      alert("Source belum siap. Tunggu 2-3 detik lalu coba lagi.");
      return;
    }

    const replaceLine = (text, varName, value) => {
      const re = new RegExp(`^const ${varName} = [\\s\\S]*?;$`, "m");
      return text.replace(re, `const ${varName} = ${JSON.stringify(value)};`);
    };

    let out = src;
    out = replaceLine(out, "seedData", currentProjects);
    out = replaceLine(out, "seedExpenses", currentExpenses);
    out = replaceLine(out, "seedClientMeta", currentClientMeta);
    if (currentExpenseCats) out = replaceLine(out, "seedExpenseCats", currentExpenseCats);
    out = replaceLine(out, "seedAccent", currentAccent);
    if (currentTarget) out = replaceLine(out, "seedTarget", currentTarget);
    if (currentAreaRanges) out = replaceLine(out, "seedAreaRanges", currentAreaRanges);
    if (currentDurasiRanges) out = replaceLine(out, "seedDurasiRanges", currentDurasiRanges);
    if (currentRates) out = replaceLine(out, "seedRates", currentRates);
    const currentResources = (() => { try { const s=window._resourcesData; return s?JSON.parse(s):null; } catch(e){return null;} })();
    if (currentResources && currentResources.length > 0) out = replaceLine(out, "seedResources", currentResources);

    const blob = new Blob([out], {type:"text/plain"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const now = new Date();
    const stamp = `${now.getFullYear()}${String(now.getMonth()+1).padStart(2,"0")}${String(now.getDate()).padStart(2,"0")}`;
    a.href = url;
    a.download = `project_card_manager_${stamp}.tsx`;
    a.click();
    URL.revokeObjectURL(url);
  }

const content = <div style={{flex:1,padding:"1.5rem",overflowY:"auto",minHeight:"100vh"}}>{activePage==="settings"?<SettingsPage projects={projects} setProjects={setProjects} tags={tags} setTags={setTags} expenses={expenses}/>:projectsPage}</div>;
  const modal = confirmId!=null ? <ConfirmModal message="Hapus proyek ini? Tindakan ini tidak bisa dibatalkan." onConfirm={confirmDelete} onCancel={()=>setConfirmId(null)}/> : null;
  if (topbar) return <><div style={{display:"flex",flexDirection:"column",height:"100%"}}><Topbar active={activePage} onSelect={setActivePage} topbar={topbar} onToggle={()=>setTopbar(v=>!v)}/>{content}</div>{modal}{showImport&&<ImportSheetsModal onParsed={handleParsed} onClose={()=>setShowImport(false)}/>}</>;
  return <><div style={{display:"flex",minHeight:"100vh",alignItems:"flex-start"}}><Sidebar active={activePage} onSelect={setActivePage} topbar={topbar} onToggle={()=>setTopbar(v=>!v)}/>{content}</div>{modal}{showImport&&<ImportSheetsModal onParsed={handleParsed} onClose={()=>setShowImport(false)}/>}</>;
}
