path = 'src/screens/Home/index.jsx'
content = open(path).read()

old = '''                <div className="flex flex-col items-center gap-5">
                  {unitLocked ? (
                    <div className="w-16 h-16 rounded-full bg-blue-900/40 border-2 border-blue-400/10 flex items-center justify-center opacity-40">
                      <AppIcon name="Lock" className="w-6 h-6 text-slate-500" />
                    </div>
                  ) : (
                    nodes.map((lesson, i) => (
                      <LessonNode
                        key={lesson.id}
                        lesson={lesson}
                        isBoss={lesson.id === unit.boss.id}
                        offset={ZIGZAG[i % ZIGZAG.length]}
                        status={getLessonStatus(lesson.id, completedLessons)}
                        onClick={() => handleLessonClick(lesson.id)}
                      />
                    ))
                  )}
                </div>'''

new = '''                <div className="flex flex-col items-center gap-5">
                  {unitLocked ? (
                    <div className="w-16 h-16 rounded-full bg-blue-900/40 border-2 border-blue-400/10 flex items-center justify-center opacity-40">
                      <AppIcon name="Lock" className="w-6 h-6 text-slate-500" />
                    </div>
                  ) : (
                    nodes.map((lesson, i) => (
                      <LessonNode
                        key={lesson.id}
                        lesson={lesson}
                        isBoss={lesson.id === unit.boss.id}
                        offset={ZIGZAG[i % ZIGZAG.length]}
                        status={getLessonStatus(lesson.id, completedLessons)}
                        onClick={() => handleLessonClick(lesson.id)}
                      />
                    ))
                  )}
                </div>

                {completedLessons.includes(unit.boss.id) && (
                  <button
                    className="w-full glass-card p-3.5 mt-3 flex items-center gap-3 border border-amber-400/20 animate-fadeInUp"
                    onClick={() => navigate(`/story/${unit.id}`)}
                  >
                    <AppIcon name="BookOpen" className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span className="text-slate-100 text-sm font-medium">Lire l\\'histoire de cette unité</span>
                  </button>
                )}'''

if old not in content:
    print('MOTIF NON TROUVÉ')
else:
    content = content.replace(old, new, 1)
    open(path, 'w').write(content)
    print('ok')
