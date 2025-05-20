'use client'

import React from 'react'

import { ShiftCard } from './shift-card'
import { topContent, topAnimateContent, middleContent, bottomContent } from './shift-card-content'


 export function ShiftCardUse() {
      
    return (
      <div className="flex justify-center items-center py-20">
        <ShiftCard
          className="bg-card dark:bg-[#1A1A1A] "
          topContent={topContent}
          topAnimateContent={topAnimateContent}
          middleContent={middleContent}
          bottomContent={bottomContent}
        />
      </div>
    )
  }
  
