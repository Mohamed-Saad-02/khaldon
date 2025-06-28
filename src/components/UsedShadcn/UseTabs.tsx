"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UseTabsProps } from "@/types";

import { motion } from "motion/react";

function UseTabs<T extends string>({
  defaultValue,
  tabList,
  activeTabList = true,
  actions,
}: UseTabsProps<T>) {
  const [currentTab, setCurrentTab] = useState<T>(defaultValue);

  const handleChange = (val: T | string) => setCurrentTab(val as T);

  return (
    <Tabs value={currentTab} onValueChange={handleChange}>
      {activeTabList && (
        <TabsList>
          {tabList.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      )}

      <motion.div layout transition={{ duration: 0.5, ease: "easeInOut" }}>
        {tabList.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <motion.div
              layout
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {tab.renderContent(tab.value, handleChange, actions)}
            </motion.div>
          </TabsContent>
        ))}
      </motion.div>
    </Tabs>
  );
}

export default UseTabs;
