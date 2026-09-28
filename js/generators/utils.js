export function mulberry32(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

export function pick(arr, rng) {
    return arr[Math.floor(rng() * arr.length)];
}

export function shuffle(a, b) {
    let rng, arr;
    if (typeof a === 'function') {
        rng = a;
        arr = b;
    } else {
        arr = a;
        rng = b;
    }
    
    const correctAns = String(arr[0]);
    const seen = new Set([correctAns]);
    const uniqueList = [correctAns];

    for (let i = 1; i < arr.length; i++) {
        const item = String(arr[i]);
        if (!seen.has(item) && item !== 'undefined' && item !== 'null' && item !== 'NaN') {
            seen.add(item);
            uniqueList.push(item);
        }
    }

    let counter = 1;
    while (uniqueList.length < 4 && counter < 20) {
        let candidate;
        if (correctAns.startsWith('$')) {
            const raw = parseFloat(correctAns.replace('$', '')) || 0;
            candidate = '$' + (raw + counter * 1.5).toFixed(2);
        } else if (/\d+\s+[a-zA-Z°]+/.test(correctAns)) {
            const parts = correctAns.split(/\s+/);
            const num = parseFloat(parts[0]) || 0;
            const unit = parts.slice(1).join(' ');
            candidate = `${num + counter * 3} ${unit}`;
        } else if (/\d+°/.test(correctAns)) {
            const num = parseFloat(correctAns.replace('°', '')) || 0;
            candidate = `${num + counter * 15}°`;
        } else if (/^-?\d+$/.test(correctAns)) {
            const num = parseInt(correctAns, 10);
            candidate = String(num + counter * 3);
        } else if (correctAns.includes('/')) {
            const parts = correctAns.split('/');
            candidate = `${parseInt(parts[0], 10) + counter}/${parts[1]}`;
        } else {
            candidate = `${correctAns} (Option ${counter})`;
        }

        if (!seen.has(candidate)) {
            seen.add(candidate);
            uniqueList.push(candidate);
        }
        counter++;
    }

    let array = [...uniqueList.slice(0, 4)];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    const correctIdx = array.indexOf(correctAns);
    array.options = array;
    array.correctIndex = correctIdx >= 0 ? correctIdx : 0;
    return array;
}

export function randInt(rng, min, max) {
    return Math.floor(rng() * (max - min + 1)) + min;
}

export function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

export function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

export function formatCurrency(num) {
    return '$' + Number(num).toFixed(2);
}

export function formatFraction(n, d) {
    if (d === 0) return 'Undefined';
    if (d < 0) { n = -n; d = -d; }
    if (n === 0) return '0';
    const g = gcd(Math.abs(n), Math.abs(d));
    n = n / g;
    d = d / g;
    if (d === 1) return String(n);
    return `${n}/${d}`;
}

export function generateDistractors(a, b, c, d) {
    let correctAnswer, rng, type;
    if (typeof a === 'function') {
        rng = a;
        correctAnswer = b;
        type = c || "number";
    } else {
        correctAnswer = a;
        rng = b;
        type = c || "number";
    }

    let distractors = new Set();
    let attempts = 0;
    while(distractors.size < 3 && attempts < 50) {
        let dist;
        if (type === "number" || type === "integer") {
            const num = parseInt(correctAnswer, 10) || 0;
            const r = rng();
            if (r < 0.25) dist = num + randInt(rng, 1, 5);
            else if (r < 0.5) dist = Math.max(0, num - randInt(rng, 1, 5));
            else if (r < 0.75) dist = num + 10 * randInt(rng, 1, 3);
            else dist = Math.max(0, num - 10 * randInt(rng, 1, 3));
            dist = String(dist);
        } else if (type === "currency") {
            const raw = parseFloat(String(correctAnswer).replace('$', '')) || 0;
            const isWhole = String(correctAnswer).indexOf('.') === -1;
            const r = rng();
            let v = raw;
            if (isWhole) {
                if (r < 0.3) v = raw + randInt(rng, 1, 5);
                else if (r < 0.6) v = Math.max(1, raw - randInt(rng, 1, 2));
                else v = raw + randInt(rng, 6, 10);
                dist = '$' + v;
            } else {
                if (r < 0.3) v = (Math.round(raw * 100) + randInt(rng, 10, 50))/100;
                else if (r < 0.6) v = Math.max(0.01, (Math.round(raw * 100) - randInt(rng, 10, 50))/100);
                else v = (Math.round(raw * 100) + randInt(rng, 1, 9))/100;
                dist = formatCurrency(v);
            }
        } else if (type === "fraction") {
            const parts = String(correctAnswer).split('/');
            if (parts.length === 2) {
                const n = parseInt(parts[0], 10);
                const den = parseInt(parts[1], 10);
                const r = rng();
                if (r < 0.25 && n !== 0) {
                    dist = formatFraction(den, n);
                } else if (r < 0.5) {
                    dist = formatFraction(n + 1, den);
                } else if (r < 0.75) {
                    dist = formatFraction(Math.max(1, n - 1), den);
                } else {
                    dist = formatFraction(n, den + 1);
                }
            } else {
                dist = String(parseInt(correctAnswer, 10) + randInt(rng, 1, 5));
            }
        } else {
            dist = correctAnswer + " " + randInt(rng, 1, 10);
        }
        if (dist !== correctAnswer && dist !== 'Undefined') distractors.add(String(dist));
        attempts++;
    }

    while(distractors.size < 3) {
        if (type === "number" || type === "integer") {
            const num = parseInt(correctAnswer, 10) || 0;
            distractors.add(String(num + distractors.size + 1));
        } else if (type === "currency") {
            const raw = parseFloat(String(correctAnswer).replace('$', '')) || 0;
            const isWhole = String(correctAnswer).indexOf('.') === -1;
            if (isWhole) {
                distractors.add('$' + (raw + distractors.size + 1));
            } else {
                distractors.add(formatCurrency(raw + distractors.size + 1));
            }
        } else if (type === "fraction") {
            const parts = String(correctAnswer).split('/');
            if (parts.length === 2) {
                distractors.add(formatFraction(parseInt(parts[0], 10) + distractors.size + 1, parseInt(parts[1], 10)));
            } else {
                distractors.add(String(parseInt(correctAnswer, 10) + distractors.size + 1));
            }
        } else {
            distractors.add(correctAnswer + " " + (distractors.size + 1));
        }
    }
    return Array.from(distractors);
}

export function finalizeQuestion(question, correctAns, distractors, stepByStep, hint, lessonNum, lessonTitle, rng) {
    let opts = [correctAns, ...distractors];
    let array = shuffle(opts, rng);
    let correctIndex = array.indexOf(correctAns);
    return {
        question,
        options: array.map(o => String(o)),
        correctIndex: correctIndex >= 0 ? correctIndex : 0,
        stepByStep,
        hint,
        lessonNum,
        lessonTitle
    };
}
